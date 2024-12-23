// Import required modules
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { OAuth2Client } from 'google-auth-library';

dotenv.config();

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);

// Register user
export const registerUser = async (req, res) => {
  const { email, username, password, phoneNumber } = req.body;

  if (!username || !email || !password || !phoneNumber) {
    return res.status(400).json({ message: 'All fields (username, email, password, and phone number) are required' });
  }

  try {
    // Check if user already exists
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in database
    await prisma.user.create({
      data: {
        email,
        username,
        phoneNumber,
        password: hashedPassword,
      },
    });

    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (err) {
    console.error('Error registering user:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Find user in database
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Validate password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.error('Error logging in user:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Google login/register
export const googleLogin = async (req, res) => {
  const { token } = req.body;

  try {
    // Verify Google token
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name } = payload;

    // Check if user exists in the database
    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      // Register new user if not found
      user = await prisma.user.create({
        data: {
          email,
          username: name,
          phoneNumber: null, // Optional: Handle phone number
          password: null, // Password can be null for Google login
        },
      });
    }

    // Generate JWT token for the user
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.error('Error during Google login:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
// CRUD operations for health data
export const addHealthData = async (req, res) => {
  const { userId, healthData } = req.body;

  try {
    const data = await prisma.healthData.create({
      data: { userId, healthData },
    });

    res.status(201).json({ message: 'Health data added successfully', data });
  } catch (err) {
    console.error('Error adding health data:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getHealthData = async (req, res) => {
  const { userId } = req.params;

  try {
    const data = await prisma.healthData.findMany({ where: { userId } });
    res.status(200).json({ data });
  } catch (err) {
    console.error('Error fetching health data:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateHealthData = async (req, res) => {
  const { id, healthData } = req.body;

  try {
    const updatedData = await prisma.healthData.update({
      where: { id },
      data: { healthData },
    });

    res.status(200).json({ message: 'Health data updated successfully', updatedData });
  } catch (err) {
    console.error('Error updating health data:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteHealthData = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.healthData.delete({ where: { id } });
    res.status(200).json({ message: 'Health data deleted successfully' });
  } catch (err) {
    console.error('Error deleting health data:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
