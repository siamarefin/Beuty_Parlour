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
          <Link to="/" className="navbar-logo">Beauty Parlor</Link>
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