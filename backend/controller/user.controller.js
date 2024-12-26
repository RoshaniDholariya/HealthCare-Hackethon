const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const prisma = require("../config/connectDB");
const { sendEmail } = require("../config/emailService");

const register = async (req, res) => {
  const { username, email, password } = req.body;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser)
    return res.status(400).json({ message: "Email already registered" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: { username, email, password: hashedPassword },
  });

  const otp = otpGenerator.generate(6, { digits: true });
  await prisma.userVerification.create({ data: { userId: newUser.id, otp } });

  await sendEmail(
    email,
    "Verify your email",
    `<p>Your OTP: <strong>${otp}</strong></p>`
  );

  res.status(201).json({ message: "User registered, OTP sent" });
};

const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  console.log({ email, otp });

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(404).json({ message: "User not found" });

  const verification = await prisma.userVerification.findFirst({
    where: { userId: user.id, otp },
  });
  if (!verification) return res.status(400).json({ message: "Invalid OTP" });

  await prisma.userVerification.delete({ where: { id: verification.id } });

  res.status(200).json({ message: "Email verified successfully",
    userId: user.id,
   });
};

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by email
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) return res.status(404).json({ message: "User not found" });
  
      // Validate the password
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) return res.status(400).json({ message: "Invalid password" });
  
      // Generate JWT token
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET || "your_secret_key",
        { expiresIn: "1d" }
      );
  
      // Set the token as a cookie
      res.cookie("token", token, {
        httpOnly: true, // Prevents access to the cookie from JavaScript
        secure: process.env.NODE_ENV === "production", // Sends cookie only over HTTPS in production
        maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
        sameSite: "strict", // Prevents CSRF attacks
      });
  
      // Send response
      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  

const GoogleAuth = async (req, res) => {
  const { username, email, googlePhotoURL } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      const payload = {
        id: user.id,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d",
      });

      const cookieOptions = {
        httpOnly: true,
        secure: true,
      };

      res.cookie("token", token, cookieOptions);
      return res.status(200).json({
        message: "Login successful",
        success: true,
        data: {
          token: token,
          user: {
            id: user.id,
            email: user.email,
            username: user.username,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            avatar: user.avatar,
          },
        },
      });
    } else {
      const generatePassword = Math.random().toString(36).slice(-8);
      const salt = await bcrypt.genSalt(10);
      const hashpassword = await bcrypt.hash(generatePassword, salt);

      const newUser = await prisma.user.create({
        data: {
          email: email,
          username: username,
          password: hashpassword,
          avatar: googlePhotoURL,
        },
      });

      await sendGeneratedPassword(email, generatePassword);

      const payload = {
        id: newUser.id,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d",
      });

      const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      };

      res.cookie("token", token, cookieOptions);
      return res.status(200).json({
        message: "Registration and login successful",
        success: true,
        data: {
          token: token,
          user: {
            id: newUser.id,
            email: newUser.email,
            username: newUser.username,
            createdAt: newUser.createdAt,
            updatedAt: newUser.updatedAt,
            avatar: newUser.avatar,
          },
        },
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

module.exports = { register, verifyOtp, login, GoogleAuth };
