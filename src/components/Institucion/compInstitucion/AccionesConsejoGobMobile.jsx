import { useState } from "react";
import '../../../style/institucion.css';
import '../../../style/Inicio.css';
import data from '../../../assets/json/actividadesgobierno.json';

export default function AccionesConsejoGobMobile() {
    const [visibleContent, setVisibleContent] = useState(null);

    const handleClick = (id) => {
        if (visibleContent === id) {
            setVisibleContent(null);
        } else {
            setVisibleContent(id);
        }
    };

    return (
        <div className="container-icmasa" id="section-actividades">
            <p className="title is-4 has-text-dark margen-top"><strong>Actividades del Consejo de Gobierno</strong></p>
            <p className="has-text-dark" style={{marginBottom:"24px"}}>Este Consejo de Gobierno se encargará, directamente o a través de subcomisiones operativas designadas, de ejercer las siguientes actividades durante la gestión.</p>
            {data.map((item) => (
                <div key={item.id}>
                    <div
                        className={`content block-objetivo-indvidual ${visibleContent === `content${item.id}` ? 'has-background-info-30 cursor-pointer' : 'has-background-primary-20 cursor-pointer'}`}
                        style={{marginBottom:"30px"}}
                        onClick={() => handleClick(`content${item.id}`)}
                    >
                        {item.titulo}
                    </div>
                    <div
                        className={`has-background-white has-text-dark block-objetivo-indvidual ${visibleContent === `content${item.id}` ? "mobile-card-body-display" :"mobile-card-body-undisplay" }`}
                        id={`content${item.id}`}
                        style={{ marginTop: "-25px", marginBottom: "30px"}}
                    >
                        {item.contenido}
                    </div>
                </div>
            ))}
        </div>
    );
}

