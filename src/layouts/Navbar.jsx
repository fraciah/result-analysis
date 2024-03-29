import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./layout.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
  
    //listen for scroll events
    window.addEventListener('scroll', handleScroll);
  
    //cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <nav className={`navbar sticky-top navbar-expand-lg bg-white py-1 border-bottom ${scrolled ? 'scrolled-navbar' : ''}`}>
      <div className="container-fluid">
        <div className="logo-container">
          <img src={logo} className="img-fluid" alt="logo"/>
        </div>
        <button style={{border:'none', outline: 'none', boxShadow: 'none'}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isOpen} aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link me-4 fw-semibold" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/students" className="nav-link me-4 fw-semibold" onClick={() => setIsOpen(false)}>Students</Link>
            </li>
            <li className="nav-item">
              <Link to="/teachers" className="nav-link me-4 fw-semibold" onClick={() => setIsOpen(false)}>Teachers</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;