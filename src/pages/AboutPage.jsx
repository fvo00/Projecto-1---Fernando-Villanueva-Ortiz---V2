import React from 'react';

function About() {
  return (
    <div className="container animate">
      <div className="about-grid">
        {/* COLUMNA IMAGEN/PERFIL */}
        <div className="about-sidebar">
          <div className="profile-frame">
            <img 
              src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Fernando Villanueva" 
              className="about-img"
            />
          </div>
          <div className="experience-badge">
            <h3>ASIX Dev</h3>
            <p>Especialista Frontend</p>
          </div>
        </div>

        {/* COLUMNA TEXTO */}
        <div className="about-main">
          <h2 className="hero-title"><span className="gradient-text">Sobre Mí</span></h2>
          <p className="about-text">
            ¡Hola! Soy <strong>Fernando Villanueva Ortiz</strong>. Mi pasión por la tecnología me llevó a cofundar 
            <strong> Digital Evolution S.A.</strong>, donde transformamos visiones complejas en interfaces 
            React intuitivas y potentes.
          </p>
          
          <div className="about-section">
            <h3>Mi Trayectoria</h3>
            <p>
              Actualmente cursando 2n de ASIX, me he especializado en el ecosistema de JavaScript, 
              enfocándome en cómo la arquitectura de componentes puede mejorar la escalabilidad 
              de los proyectos empresariales.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-item">
              <h4>🎯 Enfoque</h4>
              <p>Código limpio y mantenible.</p>
            </div>
            <div className="skill-item">
              <h4>🚀 Meta</h4>
              <p>Optimización máxima de performance.</p>
            </div>
          </div>

          <div className="quote-box">
            "La tecnología no es nada. Lo importante es que tengas fe en la gente, que sean básicamente buenas e inteligentes, y si les das herramientas, harán cosas maravillosas con ellas."
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;