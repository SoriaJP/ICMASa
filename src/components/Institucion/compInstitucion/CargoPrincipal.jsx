import { useState, useContext, useEffect } from "react";
import { LoadJson } from "../../../contexts/LoadJson";
import React from "react";
import '../../../style/Inicio.css';

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
        <div className="container-icmasa">
            <p className="title is-4 has-text-dark">Cargos principales</p>
            <div className="columns">
                <div className="column">
                    <div className="content has-background-primary-20 block-objetivo-indvidual">
                        <div>
                            <p className= {titleClass}>
                                Director: {miembros["presidente"]}
                            </p>
                            <p className= {titleClass}>
                                Subdirectora: {miembros["vicepresidente"]}
                            </p>
                            <p className= {titleClass}>
                                Secretario: {miembros["secretario"]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <p className="title is-4 has-text-dark">Consejo de gobierno</p>
            <div className="columns">
                <div className="column">
                    <p className="title is-6 has-text-dark" style={{textAlign:"center"}}>Miembros titulares</p>
                    <div className="content has-background-info-30 block-objetivo-indvidual">
                        <div>
                            <p className= {titleClass}>
                                {miembros["consejogob"]["miembrostitulares"]["miembro1"]}
                            </p>
                            <p className= {titleClass}>
                                {miembros["consejogob"]["miembrostitulares"]["miembro2"]}
                            </p>
                            <p className= {titleClass}>
                                {miembros["consejogob"]["miembrostitulares"]["miembro3"]}
                            </p>
                            <p className= {titleClass}>
                                {miembros["consejogob"]["miembrostitulares"]["miembro4"]}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <p className="title is-6 has-text-dark" style={{textAlign:"center"}}>Miembros suplentes</p>
                    <div className="content has-background-info-30 block-objetivo-indvidual">
                        <div>
                            <p className= {titleClass}>
                                {miembros["consejogob"]["miembrossuplentes"]["miembro1"]}
                            </p>
                            <p className= {titleClass}>
                                {miembros["consejogob"]["miembrossuplentes"]["miembro2"]}
                            </p>
                            <p className= {titleClass}>
                                {miembros["consejogob"]["miembrossuplentes"]["miembro3"]}
                            </p>
                            <p className= {titleClass}>
                                {miembros["consejogob"]["miembrossuplentes"]["miembro4"]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <p className="title is-4 has-text-dark margen-top">Representantes</p>
            <div className="columns">
                <div className="column">
                    <p className="title is-6 has-text-dark" style={{textAlign:"center"}}>Auxiliares de Investigación y Becarios</p>
                    <div className="content has-background-info-30 block-objetivo-indvidual">
                        <div>
                            <p className= {titleClass}>
                                <strong>Titular:</strong> {miembros["consejogob"]["representantes"]["auxiliares"]["titular"]}
                            </p>
                            <p className= {titleClass}>
                                <strong>Suplente:</strong> {miembros["consejogob"]["representantes"]["auxiliares"]["suplente"]}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <p className="title is-6 has-text-dark" style={{textAlign:"center"}}>Personal Técnico de Apoyo a la Investigación</p>
                    <div className="content has-background-info-30 block-objetivo-indvidual">
                        <div>
                            <p className= {titleClass}>
                            <strong>Titular:</strong> {miembros["consejogob"]["representantes"]["personaltecnico"]["titular"]}
                            </p>
                            <p className= {titleClass}>
                            <strong>Suplente:</strong> {miembros["consejogob"]["representantes"]["personaltecnico"]["suplente"]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}