import React, { useState } from 'react';
import TesisFinalizadasCards from './componentes/TesisFinalizadasCards';
import ConicetCards from './componentes/ConicetCard';
import TesistaCards from './componentes/TesistaCards';
import conicet from "../../assets/json/conicet.json";
import investigadores from "../../assets/json/tesisFinalizadas.json";
import tesistas from "../../assets/json/tesisenproceso.json";
import "../../style/publicaciones.css";

export default function PaginaRecHumano() {
  const [visibleId, setVisibleId] = useState(null);
 
  const handleToggle = (id) => {
    setVisibleId(visibleId === id ? null : id);
  };

  return (
    <div className="pagina">
      <div className="container-icmasa">
        <p className="title is-4 has-text-dark" id="tesisfinalizadas">Tesis Doctorales Finalizadas </p>
      </div>
      <div className='fixed-grid has-3-cols has-1-cols-mobile has-2-cols-tablet'>
        <div className='grid'> 
        {investigadores.map(investigador => (
        <div className='cell'>
          <TesisFinalizadasCards 
                key={investigador.id} 
                investigador={investigador} 
                isVisible={visibleId === investigador.id}
                onToggle={() => handleToggle(investigador.id)}
          />    
        </div>
            ))}
        </div>
      </div>
      <br/>
      <div className="container-icmasa">
        <p className="title is-4 has-text-dark" id="invconicet">Investigadores de CONICET </p>
      </div>
      <div className='fixed-grid has-3-cols has-1-cols-mobile has-2-cols-tablet'>
        <div className='grid'> 
        {conicet.map(investigador => (
        <div className='cell'>
          <ConicetCards 
                key={investigador.id} 
                investigador={investigador} 
                isVisible={visibleId === investigador.id}
                onToggle={() => handleToggle(investigador.id)}
          />    
        </div>
            ))}
        </div>
      </div>
      <br/>
      <div className="container-icmasa">
        <p className="title is-4 has-text-dark" id="tesistas">Tesis Doctorales en EJECUCIÓN </p>
      </div>
      <div className='fixed-grid has-3-cols has-1-cols-mobile has-2-cols-tablet'>
        <div className='grid'> 
        {tesistas.map(tesista => (
        <div className='cell'>
          <TesistaCards 
                key={tesista.id} 
                investigador={tesista} 
                isVisible={visibleId === tesista.id}
                onToggle={() => handleToggle(tesista.id)}
          />    
        </div>
            ))}
        </div>
      </div>
    </div>
  );
}