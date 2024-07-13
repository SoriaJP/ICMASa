import React from 'react';
import CabeceraInst from './body/compInstitucion/CabeceraInst';
import CargoPrincipal from './body/compInstitucion/CargoPrincipal';
import '../style/institucion.css';
import AccionesConsejoGob from './body/compInstitucion/AccionesConsejoGob';


function PaginaInstitucion() {
  return (
    <div className='pagina'>
          <CabeceraInst />
          <CargoPrincipal />
          <AccionesConsejoGob />
    </div>
  );
}

export default PaginaInstitucion