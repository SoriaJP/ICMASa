import React from 'react';
import "../../../style/publicaciones.css";

export default function ConicetCards({ investigador, isVisible, onToggle }) {
  return (
    <div className="card cards-autor  has-background-info-dark has-text-light">
      <header className="card-header is-flex is-justify-content-space-between is-align-items-center">
        <div className="media-content">
            <p className="title is-5" style={{paddingLeft:"25px"}}>{investigador.investigador}</p>
          </div>
        <button 
          className="card-header-icon" 
          aria-label="more options" 
          onClick={onToggle}
        >
          <span className="icon">
            <i className={`has-text-ligth fas fa-angle-${isVisible ? 'up' : 'down'}`} aria-hidden="true"></i>
          </span>
        </button>
      </header>
      {isVisible && (
        <div className="card-content">
          <div className="content">
            <p><strong>Tema:</strong> {investigador.tema}</p>
            <p><strong>Categoría:</strong> {investigador.categoria}</p>
          </div>
        </div>
      )}
    </div>
  );
}