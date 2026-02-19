import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';

function Projects() {
  const [proyectos, setProyectos] = useState([]);
  const [cargando, setCargando] = useState(true);
  
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todos');

  useEffect(() => {
    fetch('/data/projects.json')
      .then(res => res.json())
      .then(data => {
        setProyectos(data);
        setCargando(false);
      })
      .catch(err => console.error("Error cargando proyectos:", err));
  }, []);

  const proyectosFiltrados = proyectos.filter(proyecto => {
    const coincideBusqueda = proyecto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                             proyecto.tech.some(t => t.toLowerCase().includes(busqueda.toLowerCase()));
    
    const coincideCategoria = categoria === 'Todos' || proyecto.cat === categoria;

    return coincideBusqueda && coincideCategoria;
  });

  if (cargando) return <div className="container">Cargando proyectos de Fernando...</div>;

  return (
    <div className="container animate">
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="hero-title">Mis <span className="gradient-text">Proyectos</span></h2>
        <p className="hero-subtitle">Explora mi trabajo en Digital Evolution S.A.</p>
      </header>

      <div className="filter-section">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Buscar por nombre o tecnología (ej: React)..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filter">
          {['Todos', 'Web', 'Mobile', 'Data', 'Finanzas'].map(cat => (
            <button 
              key={cat}
              onClick={() => setCategoria(cat)}
              className={categoria === cat ? 'btn-primary small' : 'btn-outline small'}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {proyectosFiltrados.length > 0 ? (
          proyectosFiltrados.map(p => (
            <Card 
              key={p.id}
              image={p.img}
              title={p.nombre}
              category={p.cat}
              description={p.desc}
              tags={p.tech}
              actionText="Ver Proyecto"
            />
          ))
        ) : (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem' }}>
            <p>No se encontraron proyectos que coincidan con "{busqueda}"</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;