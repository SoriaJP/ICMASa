import React from 'react';
import Inicio from './componenteshome/Inicio.jsx';
import Objetivos from './componenteshome/Objetivos.jsx';
import Organizacion from './componenteshome/Organizacion.jsx';

function PaginaInicio() {
  return (
    <>
          <Inicio />
          <Objetivos />
          <Organizacion />
    </>
  );
}

export default PaginaInicio