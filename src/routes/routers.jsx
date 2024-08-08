import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts.jsx";
import PaginaInicio from "../components/home/PaginaInicio.jsx";
import PaginaInstitucion from "../components/Institucion/PaginaInstitucion.jsx";
import PaginaObjetivos from "../components/objetivos/PaginaObjetivos.jsx";
import PaginaVisionMision from "../components/visionmision/PaginaVisionMision.jsx";
import PaginaPublicaciones from "../components/publicaciones/PaginaPublicaciones.jsx";
import PaginaRecHumano from "../components/recursoshumanos/PaginaRecHumano.jsx";
import PaginaLaboratorio from "../components/laboratorio/PaginaLaboratorio.jsx";

const routers = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <PaginaInicio />,
            },
            {
                path: "institucion",
                element: <PaginaInstitucion />,
            },
            {
                path: "vision_mision",
                element: <PaginaVisionMision />,
            },
            {
                path: "objetivos",
                element: <PaginaObjetivos />,
            },
            {
                path: "recursoshumanos",
                element: <PaginaRecHumano />
            },
            {
                path: "publicaciones",
                element: <PaginaPublicaciones />
            },
            {
                path: "laboratorios",
                element: <PaginaLaboratorio />
            },
        ],
    },
],
{
    basename: "/ICMASa/",
}
    
);

export default routers;
