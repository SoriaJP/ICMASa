import { useState } from "react";
import ReactMarkdown from 'react-markdown';
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
        <div className="container-icmasa">
            <p className="title is-4 has-text-dark margen-top"><strong>Actividades del Consejo de Gobierno</strong></p>
            <p className="has-text-dark">Este Consejo de Gobierno se encargará, directamente o a través de subcomisiones operativas designadas, de ejercer las siguientes actividades durante la gestión.</p>
            <br />
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
                        className="has-background-white has-text-dark block-objetivo-indvidual"
                        id={`content${item.id}`}
                        style={{ marginTop: "-25px", marginBottom: "30px", display: visibleContent === `content${item.id}` ? 'block' : 'none' }}
                    >
                        <ReactMarkdown>{item.contenido}</ReactMarkdown>
                    </div>
                </div>
            ))}
        </div>
    );
}

