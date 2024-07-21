import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts.jsx";
import PaginaInicio from "../components/home/PaginaInicio.jsx";
import PaginaInstitucion from "../components/Institucion/PaginaInstitucion.jsx";
import PaginaObjetivos from "../components/objetivos/PaginaObjetivos.jsx";

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
                path: "objetivos",
                element: <PaginaObjetivos />,
            },
        ],
    },
],
{
    basename: "/ICMASa/",
}
    
);

export default routers;
