import React from 'react';
import "../../../style/publicaciones.css";

export default function TesistaCards({ investigador, isVisible, onToggle }) {
  return (
    <div className="card cards-autor has-background-info-30 has-text-light">
      <header className="card-header is-flex is-justify-content-space-between is-align-items-center">
        <div className="media-content">
          <p className="title is-5" style={{ paddingLeft: "25px" }}>{investigador.tesista}</p>
        </div>
        <button 
          className="card-header-icon" 
          aria-label="more options" 
          onClick={onToggle}
        >
          <span className="icon">
            <i className={`has-text-light fas fa-angle-${isVisible ? 'up' : 'down'}`} aria-hidden="true"></i>
          </span>
        </button>
      </header>
      {isVisible && (
        <div className="card-content">
          <div className="content">
            <p><strong>Título:</strong> {investigador.titulo}</p>
            <p><strong>Director/ra:</strong> {investigador.director}</p>
            {investigador.codirector && <p><strong>Co director/ra:</strong> {investigador.codirector}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
