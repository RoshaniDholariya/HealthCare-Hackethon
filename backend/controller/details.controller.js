const prisma = require("../config/connectDB");

const addDetails = async (req, res) => {
  const { userId, healthDetails, insuranceDetails } = req.body;

  if (!userId || !healthDetails || !insuranceDetails) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return res.status(404).json({ message: "User not found" });

  try {
    const newHealthInsurance = await prisma.healthData.create({
      data: {
        userId,
        healthStatus: healthDetails.healthStatus,
        bloodType: healthDetails.bloodType,
        allergies: healthDetails.allergies || null,
        chronicConditions: healthDetails.chronicConditions || null,
        emergencyContactName: healthDetails.emergencyContactName || null,
        emergencyContactNumber: healthDetails.emergencyContactNumber || null,
        insuranceProvider: insuranceDetails.insuranceProvider,
        policyNumber: insuranceDetails.policyNumber,
        policyStartDate: new Date(insuranceDetails.policyStartDate),  
        policyEndDate: new Date(insuranceDetails.policyEndDate),     
      },
    });

    res.status(201).json({ message: "Details added successfully", data: newHealthInsurance });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports = { addDetails };
