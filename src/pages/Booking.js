import React, { useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('serviceId') || '';
  const [form, setForm] = useState({
    userName: '',
    userEmail: '',
    phone: '',
    appointmentDate: '',
    serviceId: serviceId,
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    try {
      const res = await axios.post('http://localhost:5001/bookings', form);
      setSubmitted(res.data);
    } catch (err) {
      setError(err.response?.data?.errors?.[0]?.msg || 'Booking failed');
    }
  };

  if (submitted) {
    return (
      <div className="booking-confirmation">
        <h2>Thank you for your booking!</h2>
        <p>Your appointment is confirmed.</p>
        <pre>{JSON.stringify(submitted.appointment, null, 2)}</pre>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book an Appointment</h2>
      <label>Full Name: <input type="text" name="userName" value={form.userName} onChange={handleChange} required /></label>
      <label>Email Address: <input type="email" name="userEmail" value={form.userEmail} onChange={handleChange} required /></label>
      <label>Phone Number: <input type="text" name="phone" value={form.phone} onChange={handleChange} /></label>
      <label>Preferred Date & Time: <input type="datetime-local" name="appointmentDate" value={form.appointmentDate} onChange={handleChange} required /></label>
      <label>Additional Notes: <textarea name="notes" value={form.notes} onChange={handleChange} /></label>
      <input type="hidden" name="serviceId" value={form.serviceId} />
      <button type="submit">Book Now</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Booking;