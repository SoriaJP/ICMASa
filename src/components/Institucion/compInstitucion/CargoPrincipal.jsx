import { useState, useContext, useEffect } from "react";
import { LoadJson } from "../../../contexts/LoadJson";
import React from "react";
import '../../../style/Inicio.css';
import '../../../style/institucion.css';

export default function CargoPrincipal(){

    const [titleClass, setTitleClass] = useState("title is-4");
    const miembros = useContext(LoadJson);

    const handleResize = () => {
        if (window.innerWidth < 786) {
            setTitleClass("title is-6");
        } else {
            setTitleClass("title is-5");
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize(); // Llamar a la función inicialmente para establecer la clase correcta
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return(
        <div className='container-icmasa'>
            <div className='box has-background-primary-20 block-objetivo-indvidual'>
                <div className='content full-width-content'>
                        <p className='title is-4' style={{textAlign:"center"}}>Cargos Principales</p>
                        <hr style={{color:"white"}}/>
                        <p className= {titleClass}>Director: {miembros["presidente"]}</p>
                            <p className= {titleClass}>Subdirectora: {miembros["vicepresidente"]}</p>
                            <p className= {titleClass}>Secretario: {miembros["secretario"]}</p>
                </div>
            </div>
            <p className="title is-4 has-text-dark" style={{marginTop:"20px"}}>Consejo de gobierno</p>
                <div className="fixed-grid has-1-cols-mobile">
                    <div className='grid'>
                        <div className="cell box has-background-info-30 block-objetivo-indvidual">
                            <div className='content full-width-content'>
                                <p className='title is-4'style={{textAlign:"center"}}>Miembros titulares</p>
                                <hr/>
                                <p className= {titleClass}>{miembros["consejogob"]["miembrostitulares"]["miembro1"]}</p>
                                <p className= {titleClass}>{miembros["consejogob"]["miembrostitulares"]["miembro2"]}</p>
                                <p className= {titleClass}>{miembros["consejogob"]["miembrostitulares"]["miembro3"]}</p>
                                <p className= {titleClass}>{miembros["consejogob"]["miembrostitulares"]["miembro4"]}</p>
                            </div>
                        </div>
                        <div className=" cell box has-background-info-30 block-objetivo-indvidual">
                            <div className='content full-width-content'>
                                <p className='title is-4'style={{textAlign:"center"}}>Miembros suplentes</p>
                                <hr/>
                                <p className= {titleClass}>{miembros["consejogob"]["miembrossuplentes"]["miembro1"]}</p>
                                <p className= {titleClass}>{miembros["consejogob"]["miembrossuplentes"]["miembro2"]}</p>
                                <p className= {titleClass}>{miembros["consejogob"]["miembrossuplentes"]["miembro3"]}</p>
                                <p className= {titleClass}>{miembros["consejogob"]["miembrossuplentes"]["miembro4"]}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}