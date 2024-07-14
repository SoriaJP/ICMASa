import { useState } from "react";
import '../../../style/institucion.css';
import '../../../style/Inicio.css';
import data from '../../../assets/json/actividadesgobierno.json';

export default function AccionesConsejoGobModal() {
    const [visibleContent, setVisibleContent] = useState(null);
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleModalOpen = (item) => {
        setModalContent(item);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <div className="container-icmasa">
            <p className="title is-4 has-text-dark margen-top"><strong>Actividades del Consejo de Gobierno</strong></p>
            <p className="has-text-dark">Este Consejo de Gobierno se encargará, directamente o a través de subcomisiones operativas designadas, de ejercer las siguientes actividades durante la gestión.</p>
            <br />
            <div className="fixed-grid">
                <div className="grid">
                    {data.map((item) => (
                        <div className="cell" key={item.id}>
                            <div
                                className={'content block-objetivo-indvidual has-background-primary-20 cursor-pointer'}
                                onClick={() => handleModalOpen(item)}
                            >
                                {item.titulo}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div className={`modal ${isModalOpen ? 'is-active' : ''}`}>
                    <div className="modal-background" onClick={handleModalClose}></div>
                    <div className="modal-card">
                        <header className="modal-card-head has-background-primary-20">
                            <p className="modal-card-title">{modalContent.titulo}</p>
                        </header>
                        <section className="modal-card-body has-background-light has-text-dark">
                            <div dangerouslySetInnerHTML={{ __html: modalContent.contenido }} />
                        </section>
                        <footer className="modal-card-foot has-background-primary-20">
                            <button className="button is-info" onClick={handleModalClose}>Close</button>
                        </footer>
                    </div>
                </div>
            )}
        </div>
    );
}
