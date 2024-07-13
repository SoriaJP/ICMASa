import { useEffect, useState } from "react";
import '../../../style/institucion.css';
import '../../../style/Inicio.css';

export default function AccionesConsejoGob(){

    const [visibleContent, setVisibleContent] = useState(null);
    const [backgroundActividades, setBackgroundActividades] = useState("content has-background-primary-20 block-objetivo-indvidual");

    const handleClick = (id) => {
        if (visibleContent === id) {
            setVisibleContent(null);
            setBackgroundActividades("content has-background-primary-20 block-objetivo-indvidual");
        } else {
            setVisibleContent(id);
            setBackgroundActividades("content has-background-info-30 block-objetivo-indvidual");
        }
    };

    return(
        <div className="container-icmasa">
            <p className="title is-4 has-text-dark margen-top"> <strong>Actividades del Consejo de Gobierno</strong> </p>
            <p className="has-text-dark">Este Consejo de Gobierno se encargará, directamente o a través de subcomisiones operativas designadas, de ejercer las siguientes actividades durante la gestión.</p>
            <br/>
            <div class={backgroundActividades} onClick={() => handleClick('content1')}>
                Subcomisión de Reglamento y Gestión Institucional
            </div>
            <div className="has-background-primary-20 block-objetivo-indvidual" id="content1" style={{ marginTop: "-15px", marginBottom: "24px", display: visibleContent === 'content1' ? 'block' : 'none' }}>
                    <p>Será prioritario para esta Subcomisión hacer que el ICMASa se transforme en un Instituto de Doble Dependencia UNSa-CONICET para funcionar como una Unidad Ejecutora. Esto permitirá reunir los Investigadores de la Escuela de Ingeniería Civil bajo una misma área estratégica, potenciando así las capacidades de dichos investigadores.</p>
            </div>

            <div class={backgroundActividades} onClick={() => handleClick('content2')}>
                Subcomisión de Reglamento y Gestión Institucional
            </div>
            <div className="has-background-primary-20 block-objetivo-indvidual" id="content2" style={{ marginTop: "-15px", display: visibleContent === 'content2' ? 'block' : 'none' }}>
                    <p>Será prioritario para esta Subcomisión hacer que el ICMASa se transforme en un Instituto de Doble Dependencia UNSa-CONICET para funcionar como una Unidad Ejecutora. Esto permitirá reunir los Investigadores de la Escuela de Ingeniería Civil bajo una misma área estratégica, potenciando así las capacidades de dichos investigadores.</p>
            </div>
            
        </div>
    );
}

