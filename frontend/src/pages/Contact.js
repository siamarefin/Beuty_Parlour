import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ userName: '', userEmail: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    try {
      const res = await axios.post('http://localhost:5001/contact', form);
      setSubmitted(res.data);
    } catch (err) {
      setError(err.response?.data?.errors?.[0]?.msg || 'Submission failed');
    }
  };

  if (submitted) {
    return (
      <div className="contact-confirmation">
        <h2>Thank you for contacting us!</h2>
        <p>Your inquiry has been submitted.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <label>Full Name: <input type="text" name="userName" value={form.userName} onChange={handleChange} required /></label>
      <label>Email Address: <input type="email" name="userEmail" value={form.userEmail} onChange={handleChange} required /></label>
      <label>Message: <textarea name="message" value={form.message} onChange={handleChange} required /></label>
      <button type="submit">Send</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Contact;