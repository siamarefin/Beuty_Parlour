const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  phone: { type: String },
  appointmentDate: { type: Date, required: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  notes: { type: String },
});

module.exports = mongoose.model('Appointment', AppointmentSchema);