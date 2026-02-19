import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className="container animate">
      <div className="success-wrapper">
        <div className="success-header">
          <div className="floating-icon">🎁</div>
          <h1 className="hero-title">
            <span className="gradient-text">¡Suscripción Confirmada!</span>
          </h1>
          <p className="hero-subtitle">
            Bienvenido, Fernando Villanueva Ortiz te ha enviado un pack de bienvenida a tu correo.
          </p>
        </div>

        <div className="bonus-grid">
          <div className="bonus-card">
            <span className="bonus-tag">E-book</span>
            <h3>Guía de React Pro</h3>
            <p>Aprende los patrones que usamos en Digital Evolution S.A.</p>
          </div>
          <div className="bonus-card">
            <span className="bonus-tag">Código</span>
            <h3>Componentes UI</h3>
            <p>Acceso a mi librería privada de componentes minimalistas.</p>
          </div>
          <div className="bonus-card">
            <span className="bonus-tag">Descuento</span>
            <h3>Consultoría</h3>
            <p>20% de descuento en tu primera auditoría de código.</p>
          </div>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link to="/" className="btn-primary">Explorar más Proyectos</Link>
        </div>
      </div>
    </div>
  );
}

export default Success;