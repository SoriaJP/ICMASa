import React, { useState } from 'react';
import PublicationCard from "./componentespublicaciones/PublicationCard";
import autores from "../../assets/json/autores.json";
import "../../style/publicaciones.css";

export default function PaginaPublicaciones() {
  const [visibleId, setVisibleId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggle = (id) => {
    setVisibleId(visibleId === id ? null : id);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar los autores según el término de búsqueda
  const filteredAutores = autores.filter(autor =>
    autor.autor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pagina">
      <div className="container-icmasa" style={{paddingBottom:"0px"}}>
        <p className="title is-4 has-text-dark">Artículos</p>
        <p className="subtitle has-text-dark">Artículos publicados en revistas internacionales indexadas con revisión (JCR)</p>
        
        {/* Campo de búsqueda */}
        <div className="panel-block" style={{paddingLeft:"0px"}}>
            <p className="control has-icons-left">
            <input className="input content has-background-light has-text-dark" type="text" placeholder="Busqueda por autor" value={searchTerm} onChange={handleSearchChange}/>
                <span className="icon is-left">
                    <i className="fas fa-search has-text-dark" aria-hidden="true"></i>
                </span>
            </p>
        </div>
      </div>
      <div className='fixed-grid has-3-cols has-1-cols-mobile has-2-cols-tablet'>
        <div className='grid'> 
        {filteredAutores.map(autor => (
        <div className='cell'>
          <PublicationCard 
                key={autor.id} 
                autor={autor} 
                isVisible={visibleId === autor.id}
                onToggle={() => handleToggle(autor.id)}
          />    
        </div>
            ))}
        </div>
      </div>
    </div>
  );
}