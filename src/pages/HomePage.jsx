import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState(null);
  const [typing, setTyping] = useState('');
  const nombreCompleto = "Fernando Villanueva Ortiz";

  useEffect(() => {
  
    let i = 0;
    const timer = setInterval(() => {
      setTyping(nombreCompleto.substring(0, i));
      i++;
      if (i > nombreCompleto.length) clearInterval(timer);
    }, 100);

    
    fetch('/data/HomeData.json')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error("Error cargando homeData:", err));

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container animate">
      
     
      <section className="hero-split">
        <div className="hero-content">
          <h1 className="hero-title">
            Hola, soy <br />
            <span className="gradient-text">{typing}</span>
          </h1>
          <p className="hero-subtitle">
            Desarrollador Frontend & Cofundador de <strong>Digital Evolution S.A.</strong><br />
            Especializado en crear experiencias digitales modernas con React.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">Ver Portafolio</button>
            <Link to="/about" className="btn-outline">Saber más</Link>          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800" 
            alt="Fernando Villanueva - Workspace" 
            className="hero-main-img"
          />
          <div className="hero-badge">IAW - 2n ASIX</div>
        </div>
      </section>


      <section style={{ marginTop: '8rem' }}>
        <h2 className="section-title">Mis <span className="gradient-text">Servicios</span></h2>
        <p style={{ textAlign: 'center', color: 'var(--text-dim)', marginBottom: '3rem' }}>
          Soluciones a medida desarrolladas bajo los estándares de Digital Evolution S.A.
        </p>
        
        <div className="projects-grid">
          {data?.servicios.map(s => (
            <Card 
              key={s.id}
              image={s.img} 
              title={`${s.icono} ${s.titulo}`}
              description={s.desc}
              category="Especialidad"
              actionText="Detalles"
            />
          ))}
        </div>
      </section>

    
      <section style={{ marginTop: '8rem', marginBottom: '4rem' }}>
        <h2 className="section-title">Clientes <span className="gradient-text">Felices</span></h2>
        <div className="projects-grid">
          {data?.testimonios.map(t => (
            <div key={t.id} className="card testimonial-card">
              <div className="testimonial-header">
                <img src={t.avatar} alt={t.autor} className="avatar-img" />
                <div className="testimonial-meta">
                  <h4>{t.autor}</h4>
                  <small>{t.cargo}</small>
                </div>
              </div>
              <p className="testimonial-text">"{t.texto}"</p>
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;