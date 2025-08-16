const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const Appointment = require('../models/Appointment');

// POST /bookings - Create a new appointment
router.post('/', [
  body('userName').notEmpty().withMessage('Name is required'),
  body('userEmail').isEmail().withMessage('Valid email is required'),
  body('appointmentDate').notEmpty().withMessage('Appointment date is required'),
  body('serviceId').notEmpty().withMessage('Service ID is required'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: 'Booking confirmed!', appointment });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create booking.' });
  }
});

module.exports = router;