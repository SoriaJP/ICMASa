import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts.jsx";
import PaginaInicio from "../components/home/PaginaInicio.jsx";
import PaginaInstitucion from "../components/Institucion/PaginaInstitucion.jsx";
import PaginaObjetivos from "../components/objetivos/PaginaObjetivos.jsx";
import PaginaVisionMision from "../components/visionmision/PaginaVisionMision.jsx";
import PaginaPublicaciones from "../components/publicaciones/PaginaPublicaciones.jsx";

const routers = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/ICMASa",
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
                path: "publicaciones",
                element: <PaginaPublicaciones />
            },
        ],
    },
],
{
    basename: "/ICMASa/",
}
    
);

export default routers;
