import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Example beauty parlor themed images
const internetBackgrounds = [
  "https://media.istockphoto.com/id/2150308249/photo/portrait-of-a-beautiful-woman-with-natural-make-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=IXX1BhoXT13Y1ekLyB0myFm-bIMcihZ3-aCIi5fckW8=",
   "https://media.istockphoto.com/id/2166413052/photo/close-up-cosmetic-eye-shadow-palette-lipstick-foundation-young-asian-beauty-girl-collect.webp?a=1&b=1&s=612x612&w=0&k=20&c=wKQzdCsyzHTbbjCywH6a-6OHII9U5DHe-Qm94OJ915E=",
   "https://media.istockphoto.com/id/169944295/photo/shopping-for-make-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=0aY4ON4wqLgPtYVkRCOAk6s1iHXhcgeUMggg2BQQYgg=",
   "https://plus.unsplash.com/premium_photo-1661726457110-c43a88d74567?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFrZSUyMHVwfGVufDB8fDB8fHww",
   
]

const Home = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bgIndex, setBgIndex] = useState(0);

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

  // Automatic slider for internet backgrounds every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(prev => (prev + 1) % internetBackgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setBgIndex(prev => (prev - 1 + internetBackgrounds.length) % internetBackgrounds.length);
  };
  const goToNext = () => {
    setBgIndex(prev => (prev + 1) % internetBackgrounds.length);
  };

  if (loading) return <div>Loading services...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="home-background">
      <h1 className="parlor-title" style={{
        textAlign: 'center',
        fontFamily: 'Playfair Display, serif',
        color: 'purple',
        fontWeight: 700,
        fontSize: '3.5rem',
        WebkitBackgroundClip: 'text',
        margin: '32px 0 16px 0',
        textShadow: '0 4px 24px rgba(218, 66, 218, 0.2)',
      }}>Welcome to Parlor</h1>
      <div className="background-img-container" style={{position:'relative'}}>
        {/* Only show internet images in the slider */}
        <div style={{position:'relative',width:'100%',height:'520px',overflow:'hidden',borderRadius:'16px',marginBottom:'32px'}}>
          <img src={internetBackgrounds[bgIndex]} alt="Beauty Parlor Inspiration" className="background-img internet-bg" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',objectFit:'cover',opacity:1,zIndex:1,transition:'opacity 0.5s'}} />
          {/* Slider navigation controls */}
          <button onClick={goToPrev} style={{position:'absolute',top:'50%',left:'16px',transform:'translateY(-50%)',zIndex:2,background:'rgba(255,255,255,0.7)',border:'none',borderRadius:'50%',width:'40px',height:'40px',fontSize:'24px',cursor:'pointer'}}>‹</button>
          <button onClick={goToNext} style={{position:'absolute',top:'50%',right:'16px',transform:'translateY(-50%)',zIndex:2,background:'rgba(255,255,255,0.7)',border:'none',borderRadius:'50%',width:'40px',height:'40px',fontSize:'24px',cursor:'pointer'}}>›</button>
        </div>
      </div>
      <div className="service-list">
        <h2 style={{ textAlign: 'center', width: '100%' }}>Beauty Services</h2>
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
    </div>
  );
};

export default Home;