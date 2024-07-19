import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts.jsx";
import PaginaInicio from "../components/PaginaInicio.jsx";
import PaginaInstitucion from "../components/PaginaInstitucion.jsx";

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
        ],
    },
],
{
    basename: "/ICMASa/" ,
}
    
);

export default routers;
