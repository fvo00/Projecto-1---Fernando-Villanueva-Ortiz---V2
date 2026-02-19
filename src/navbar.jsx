import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">Mi<span>Portafolio</span></Link>
        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/newsletter" className="nav-btn">Newsletter</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

