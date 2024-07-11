import React from "react";
import '../../style/Inicio.css';
import icmasa from "../../assets/icmasa.jpg";

function Cuadrado(){
    return(
        <div>

        </div>
    );
}

export default function Inicio(){
    return(
        <div className="inicio-container">
            <section className="box-custom-inicio has-text-light">
                <p className="title is-4"><strong>ICMASa</strong></p>
                <p style={{fontSize: "0.8rem", textAlign:"justify"}}>El Instituto de Ingeniería Civil y Medio Ambiente Salta (ICMASa) fue creado, en el ámbito de la Facultad de Ingeniería de la Universidad Nacional de Salta, mediante Resolución del Consejo Superior Nº 163/96. Inició sus actividades con el sistema actual de gobierno el 28 de abril de 2000.</p>
            </section>
        </div>
    );
}