import React from 'react';
import CabeceraInst from './body/compInstitucion/CabeceraInst';
import CargoPrincipal from './body/compInstitucion/CargoPrincipal';
import AccionesConsejoGobMobile from './body/compInstitucion/AccionesConsejoGobMobile';
import AccionesConsejoGobModal from './body/compInstitucion/AccionesConsejoGobModal';
import useWindowSize from '../hooks/useWindowSize';
import '../style/institucion.css';


function PaginaInstitucion() {

  const size = useWindowSize();

  return (
    <div className='pagina'>
          <CabeceraInst />
          <CargoPrincipal />
          {size.width < 800 ? <AccionesConsejoGobMobile /> : < AccionesConsejoGobModal />}
    </div>
  );
}

export default PaginaInstitucion