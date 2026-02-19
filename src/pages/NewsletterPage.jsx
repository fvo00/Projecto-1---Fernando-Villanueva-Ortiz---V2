import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Newsletter() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSuscripcion = (e) => {
    e.preventDefault();
    
    setTimeout(() => {
      navigate('/success');
    }, 500);
  };

  return (
    <div className="container animate">
      <div className="newsletter-wrapper">
        <div className="newsletter-info">
          <h2 className="hero-title" style={{ textAlign: 'left', fontSize: '2.5rem' }}>
            Únete a la <span className="gradient-text">Comunidad Dev</span>
          </h2>
          <p>Al suscribirte, Fernando Villanueva Ortiz te enviará contenido exclusivo cada semana para mejorar tus habilidades en React.</p>
          
          <ul className="benefit-list">
            <li>🚀 <strong>Tips de Performance:</strong> Haz que tus webs vuelen.</li>
            <li>📂 <strong>Recursos Gratis:</strong> Plantillas de Digital Evolution S.A.</li>
            <li>🔔 <strong>Alertas:</strong> Sé el primero en ver mis nuevos proyectos.</li>
          </ul>
        </div>

        <div className="newsletter-card">
          <div className="icon-badge">📩</div>
          <h3>Suscripción Gratuita</h3>
          <form onSubmit={handleSuscripcion}>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Tu mejor correo electrónico" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              ¡Quiero mis beneficios!
            </button>
          </form>
          <p className="privacy-text">Respetamos tu privacidad. Sin spam, solo valor.</p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;