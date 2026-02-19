import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="logo">Fernando <span> Villanueva Ortiz</span></Link>
          <p>Desarrollador Frontend especializado en React. Parte del equipo fundador de Digital Evolution S.A.</p>
        </div>

        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/proyectos">Proyectos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/newsletter">Newsletter</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Contacto Directo</h4>
          <p>📍 Palma, Illes Balears</p>
          <p>📧 fernando@digitalevolution.com</p>
          <div className="social-icons">
           <span className="social-badge">
            <a href="https://github.com/fvo00/Projecto-1---Fernando-Villanueva-Ortiz---V2" target="_blank" rel="noreferrer">GitHub</a>
           </span>
            <span className="social-badge">
                <a href="https://app.netlify.com/teams/fvo00/projects" target="_blank" rel="noreferrer">Netlify</a>
            </span>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Fernando Villanueva Ortiz. Todos los derechos reservados.</p>
        <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>IAW - 2n ASIX - Digital Evolution S.A.</p>
      </div>
    </footer>
  );
}

export default Footer;