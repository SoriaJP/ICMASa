import React from 'react';
import CabeceraInst from './compInstitucion/CabeceraInst';
import CargoPrincipal from './compInstitucion/CargoPrincipal';
import AccionesConsejoGobMobile from './compInstitucion/AccionesConsejoGobMobile';
import AccionesConsejoGobModal from './compInstitucion/AccionesConsejoGobModal';
import useWindowSize from '../../hooks/useWindowSize';
import '../../style/institucion.css';


function PaginaInstitucion() {

  const size = useWindowSize();

  return (
    <div className='pagina'>
          <CabeceraInst />
          <CargoPrincipal />
          {size.width < 800 ? <AccionesConsejoGobMobile /> : <AccionesConsejoGobModal />}
    </div>
  );
}

export default PaginaInstitucion