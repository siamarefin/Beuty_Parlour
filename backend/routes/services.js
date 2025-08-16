const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// GET /services - List all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch services.' });
  }
});

// GET /services/:id - Get service details
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ error: 'Service not found.' });
    res.json(service);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch service details.' });
  }
});

module.exports = router;