import React from "react";
import objetivos from "../../../assets/json/resumenobjetivo.json";
import '../../../style/Inicio.css';
import { useNavigate } from "react-router-dom";


export default function Objetivos(){

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/objetivos");
    };
    
    // Función para dividir el array en bloques de tamaño especificado
    const chunkArray = (arr, size) => {
        return arr.reduce((chunks, el, i) => {
            if (i % size === 0) {
                chunks.push([el]);
            } else {
                chunks[chunks.length - 1].push(el);
            }
            return chunks;
        }, []);
    };

    // Dividir objetivos en bloques de 3 elementos cada uno
    const objetivosChunks = objetivos ? chunkArray(objetivos, 3) : [];

    return (
        <div className="has-background-light">
            <div className="block block-objetivo">
                <h2 className="title is-2 has-text-success"><strong>Objetivos</strong></h2>
                <p className="title is-6 has-text-dark">Te invitamos a conocer nuestros objetivos.</p>
                <button className="button is-primary" onClick={handleButtonClick}>
                    saber +
                </button>
                <br />
                <br />
                {objetivosChunks.map((chunk, index) => (
                    <div className="columns" key={index}>
                        {chunk.map((item) => (
                            <div className="column" key={item.id}>
                                <div className="has-background-primary-20 block-objetivo-indvidual">
                                    {item.objetivo}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}