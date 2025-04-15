const express = require('express');
const router = express.Router();
const Worker = require('../models/Worker');
const { sendWelcomeEmail } = require('../services/emailService');

// Register Worker
router.post('/register', async (req, res) => {
  try {
    const { fullName, email, password, phoneNumber, address, hourlyRate, skills, experience, availability } = req.body;

    // Check if worker already exists
    const existingWorker = await Worker.findOne({ email });
    if (existingWorker) {
      return res.status(400).json({ message: 'Worker already exists' });
    }

    // Create new worker
    const worker = new Worker({
      fullName,
      email,
      password,
      phoneNumber,
      address,
      hourlyRate,
      skills,
      experience,
      availability
    });

    await worker.save();

    // Send welcome email
    try {
      await sendWelcomeEmail(email, fullName, 'worker');
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Don't fail the registration if email sending fails
    }

    res.status(201).json({ message: 'Worker registered successfully', worker });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 