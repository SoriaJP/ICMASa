import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import routers from './routes/routers';
import LoadJson from '../src/contexts/LoadJson';
import miembros from '../src/assets/json/icmasa.json';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <LoadJson archJson={miembros}>
    <RouterProvider router={routers} />
  </LoadJson>
  </>
)
