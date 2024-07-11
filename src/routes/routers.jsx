import React from 'react';
import { createBrowserRouter} from 'react-router-dom';
import Layout from './Layouts.jsx';
import PaginaInicio from '../components/PaginaInicio.jsx';
import PaginaInstitucion from '../components/PaginaInstitucion.jsx';

const routers = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
            <PaginaInicio />
        </Layout>
      ),
    },
    {
      path: "institucion",
      element: (
        <>
          <Layout>
            <PaginaInstitucion />
          </Layout>
        </>
      ),
    },
  ]);

  export default routers;