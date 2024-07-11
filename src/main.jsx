import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/hedernavfooter/Header.jsx';
import NavBar from './components/hedernavfooter/NavBar.jsx';
import FooterII from './components/hedernavfooter/FooterII.jsx';
import PaginaInicio from '../src/components/PaginaInicio.jsx';
import PaginaInstitucion from '../src/components/PaginaInstitucion.jsx';
import LoadJson from '../src/contexts/LoadJson';
import miembros from '../src/assets/json/icmasa.json';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Header />
        <PaginaInicio />
        <FooterII />
      </>
    ),
  },
  {
    path: "institucion",
    element: (
      <>
        <NavBar />
        <Header />
        <PaginaInstitucion />
        <FooterII />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <LoadJson archJson={miembros}>
    <RouterProvider router={router} />
  </LoadJson>
  </>
)
