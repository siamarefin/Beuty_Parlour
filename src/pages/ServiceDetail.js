import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5001/services/${id}`)
      .then(res => {
        setService(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load service details');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading service details...</div>;
  if (error) return <div>{error}</div>;
  if (!service) return <div>Service not found.</div>;

  return (
    <div className="service-detail">
      <h2>{service.name}</h2>
      <p>{service.description}</p>
      <p>Duration: 1 hour</p>
      <p>Price: ${service.price}</p>
      <Link to={`/book?serviceId=${service._id}`}>Book Now</Link>
    </div>
  );
};

export default ServiceDetail;