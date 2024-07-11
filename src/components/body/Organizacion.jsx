import React from "react";
import { useState, useEffect, useContext } from "react";
import { LoadJson } from "../../contexts/LoadJson";
import '../../style/Inicio.css';


export default function Organizacion(){

    const [titleClass, setTitleClass] = useState("title is-4");
    const miembros = useContext(LoadJson);

    const handleResize = () => {
        if (window.innerWidth < 786) {
            setTitleClass("title is-5");
        } else {
            setTitleClass("title is-4");
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
        <div className="has-background-light">
            <div className="block block-objetivo">
                <h2 className="title is-2 has-text-success"><strong>Organización</strong></h2>
                <p className="title is-6 has-text-dark">ICMASa es dirigido por un Consejo de Gobierno, un Director y un Subdirector. </p>
                <button className="button is-primary">
                    miembros
                </button>
                <br />
                <br />
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
                                <p className="title is-6">
                                    <strong>Consejo de gobierno</strong>: 6 (seis) miembros, con sus respectivos suplentes.
                                </p>         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}