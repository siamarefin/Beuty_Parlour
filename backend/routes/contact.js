const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const ContactInquiry = require('../models/ContactInquiry');

// POST /contact - Submit a contact inquiry
router.post('/', [
  body('userName').notEmpty().withMessage('Name is required'),
  body('userEmail').isEmail().withMessage('Valid email is required'),
  body('message').notEmpty().withMessage('Message is required'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const inquiry = new ContactInquiry(req.body);
    await inquiry.save();
    res.status(201).json({ message: 'Inquiry submitted!', inquiry });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit inquiry.' });
  }
});

module.exports = router;