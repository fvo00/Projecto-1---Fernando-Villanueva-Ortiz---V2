import React from 'react';

function Card({ image, title, category, description, tags, actionText, onAction }) {
  return (
    <div className="card project-card animate">
      {image && (
        <div className="card-image-wrapper">
          <img src={image} alt={title} className="project-img" />
          {category && (
            <div className="card-overlay">
              <span className="category-tag">{category}</span>
            </div>
          )}
        </div>
      )}
      
      <div className="card-body">
        {category && !image && <span className="skill-badge">{category}</span>}
        <h3 style={{ marginTop: '0.5rem' }}>{title}</h3>
        <p className="project-desc">{description}</p>
        
        {tags && (
          <div className="tech-stack">
            {tags.map((tag, index) => (
              <span key={index} className="tech-badge">{tag}</span>
            ))}
          </div>
        )}

        {actionText && (
          <button className="btn-primary" style={{ width: '100%', marginTop: '1.5rem' }} onClick={onAction}>
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;