import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ nombre: '', email: '', asunto: 'General', mensaje: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      console.log("Mensaje de Fernando enviado:", formData);
      setStatus('success');
    }, 1500);
  }

  return (
    <div className="container animate">
      <div className="contact-grid">
        
        <div className="contact-info">
          <h2 className="hero-title" style={{ textAlign: 'left', fontSize: '2.5rem' }}>
            ¿Tienes un <span className="gradient-text">Proyecto?</span>
          </h2>
          <p className="hero-subtitle" style={{ margin: '1rem 0' }}>
            Estoy disponible para nuevos desafíos en el área de desarrollo Frontend y consultoría técnica.
          </p>

          <div className="info-cards">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h4>Ubicación</h4>
                <p>Palma, Illes Balears</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <h4>Email Profesional</h4>
                <p>f.villanueva@digitalevolution.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">⏰</span>
              <div>
                <h4>Horario de Atención</h4>
                <p>Lunes a Viernes: 09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {status === 'success' ? (
            <div className="success-message animate">
              <div style={{ fontSize: '3rem' }}>✉️</div>
              <h3>¡Mensaje Recibido!</h3>
              <p>Gracias Fernando, nos pondremos en contacto contigo en menos de 24 horas.</p>
              <button className="btn-outline" onClick={() => setStatus('idle')}>Enviar otro mensaje</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card glass-form">
              <div className="form-group">
                <label>Nombre Completo</label>
                <input 
                  type="text" 
                  placeholder="Tu nombre aquí..."
                  required 
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Correo Electrónico</label>
                <input 
                  type="email" 
                  placeholder="email@ejemplo.com"
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Asunto</label>
                <select 
                  value={formData.asunto}
                  onChange={(e) => setFormData({...formData, asunto: e.target.value})}
                  className="custom-select"
                >
                  <option value="General">Consulta General</option>
                  <option value="Proyecto">Nuevo Proyecto</option>
                  <option value="Empresa">Digital Evolution S.A.</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>

              <div className="form-group">
                <label>Mensaje</label>
                <textarea 
                  rows="4" 
                  placeholder="Cuéntame sobre tu idea..."
                  required 
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" disabled={status === 'sending'} style={{ width: '100%' }}>
                {status === 'sending' ? 'Enviando...' : 'Enviar Propuesta'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;