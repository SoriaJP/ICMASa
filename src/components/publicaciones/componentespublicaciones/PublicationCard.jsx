import React from 'react';
import "../../../style/publicaciones.css";

export default function PublicationCard({ autor, isVisible, onToggle }) {
  return (
    <div className="card cards-autor has-background-info-dark has-text-light">
      <header className="card-header is-flex is-justify-content-space-between is-align-items-center">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src={autor.img}
                alt={autor.autor}
              />
            </figure>
          </div>
          <div className="media-content">
            <br/>
            <p className="title is-5">{autor.autor}</p>
          </div>
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
            <p><strong>Publicaciones:</strong> <a href={autor.url} target="_blank" rel="noopener noreferrer">https://scholar.google.com/{autor.autor}</a></p>
          </div>
        </div>
      )}
    </div>
  );
}