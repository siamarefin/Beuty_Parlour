import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Booking from './pages/Booking';
import Contact from './pages/Contact';




function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" style={{
            fontFamily: 'Cinzel, Playfair Display, serif',
            fontWeight: 900,
            fontSize: '2.2rem',
            background: 'linear-gradient(90deg, #FFD700 0%, #FFB300 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '2px',
            textShadow: '0 4px 16px rgba(255,215,0,0.18), 0 1px 4px rgba(0,0,0,0.10)',
            padding: '0 12px',
          }}>Chadni Beauty Parlor</Link>
          <div className="navbar-links">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;