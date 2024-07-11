import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/hedernavfooter/Header.jsx';
import NavBar from './components/hedernavfooter/NavBar.jsx';
import FooterII from './components/hedernavfooter/FooterII.jsx';
import PaginaInicio from '../src/components/PaginaInicio.jsx';
import PaginaInstitucion from '../src/components/PaginaInstitucion.jsx';
import LoadJson from '../src/contexts/LoadJson';
import miembros from '../src/assets/json/icmasa.json';

const router = ([
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

function App(){
  return (
    <LoadJson archJson={miembros}>
      <RouterProvider router={router} />
    </LoadJson>
  );
}
/**function App() {
  return (
    <LoadJson archJson={miembros}>
      <Router>
        <NavBar />
        <Header />
        <Routes>
          <Route path='/' element={<PaginaInicio />} />
          <Route path='institucion' element={<PaginaInstitucion />} />
        </Routes>
        <FooterII />
      </Router>
    </LoadJson>
  );
}*/

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
