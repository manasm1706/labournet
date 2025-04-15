const express = require('express');
const router = express.Router();
const Contractor = require('../models/Contractor');
const { sendWelcomeEmail } = require('../services/emailService');

// Register Contractor
router.post('/register', async (req, res) => {
  try {
    const { businessName, email, password, phoneNumber, address, businessType, yearsOfExperience, licenseNumber, insuranceInfo, projectTypes } = req.body;

    // Check if contractor already exists
    const existingContractor = await Contractor.findOne({ email });
    if (existingContractor) {
      return res.status(400).json({ message: 'Contractor already exists' });
    }

    // Create new contractor
    const contractor = new Contractor({
      businessName,
      email,
      password,
      phoneNumber,
      address,
      businessType,
      yearsOfExperience,
      licenseNumber,
      insuranceInfo,
      projectTypes
    });

    await contractor.save();

    // Send welcome email
    try {
      await sendWelcomeEmail(email, businessName, 'contractor');
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Don't fail the registration if email sending fails
    }

    res.status(201).json({ message: 'Contractor registered successfully', contractor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); 