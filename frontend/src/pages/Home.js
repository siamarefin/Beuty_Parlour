import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5001/services')
      .then(res => {
        setServices(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load services');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading services...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="service-list">
      <h2>Beauty Services</h2>
      <div className="services-grid">
        {services.map(service => (
          <div key={service._id} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Price: ${service.price}</p>
            <div className="service-card-actions">
              <Link to={`/service/${service._id}`}>View Details</Link>
              <Link to={`/book?serviceId=${service._id}`}>Book Now</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;