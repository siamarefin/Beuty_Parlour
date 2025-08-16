const mongoose = require('mongoose');

const ContactInquirySchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model('ContactInquiry', ContactInquirySchema);