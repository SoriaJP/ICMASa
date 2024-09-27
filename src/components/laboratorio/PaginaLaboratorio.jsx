import React, { useState } from 'react';

export default function PaginaLaboratorio() {
    const [activeTab, setActiveTab] = useState('basicas'); // Por defecto, "Áreas Básicas"

    const renderTableContent = () => {
        switch (activeTab) {
            case 'basicas':
                return (
                    <>
                        <tr>
                            <td>Laboratorio de Física I</td>
                            <td>Dra. Cecilia Pocovi</td>
                        </tr>
                        <tr>
                            <td>Laboratorio de Física II</td>
                            <td>Ing. Graciela Musso de Falú</td>
                        </tr>
                    </>
                );
            case 'tecnologias':
                return (
                    <>
                        <tr>
                            <td>Laboratorio de Hidráulica</td>
                            <td>Ing. Fernando Cazón</td>
                        </tr>
                        <tr>
                            <td>Laboratorio de Estructuras</td>
                            <td>Mag. Paul Kohan</td>
                        </tr>
                        <tr>
                            <td>Laboratorio de Materiales</td>
                            <td>Ing. Héctor Cardozo</td>
                        </tr>
                        <tr>
                            <td>Laboratorio de Geotecnia y Vías de de comunicación</td>
                            <td>Ing. Enmel T. Castro e Ing. Antonio Forns</td>
                        </tr>
                        <tr>
                            <td>Laboratorio de Ingeniería Sanitaria e Instalaciones de Edificios</td>
                            <td>Ing. Daniel Franco e Ing. Lazarte</td>
                        </tr>
                        <tr>
                            <td>Topografía</td>
                            <td>Agr. Carmen Quispe</td>
                        </tr>
                    </>
                );
            case 'cimne':
                return (
                    <>
                        <tr>
                            <td>Aula CIMNE - Laboratorio de Métodos Numéricos</td>
                            <td>Dr. Sergio Oller Aramayo</td>
                        </tr>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="pagina">
            <div className="container-icmasa">
                <p className="title is-4 has-text-dark">Laboratorios</p>
                <p className="subtitle is-6 has-text-dark">Los Laboratorios de la carrera de Ingeniería Civil se muestran en la siguiente tabla. La administración de los laboratorios de las Tecnologías aplicadas está a cargo del Instituto ICMASa.</p>
                <br/>
                <div className="columns is-vcentered">
                    <div className="column is-one-quarter has-background-light">
                        <div className="fixed-grid has-1-cols">
                            <div className="grid">
                                <div className="cell">
                                    <button 
                                        className={`button is-medium is-fullwidth ${activeTab === 'basicas' ? 'is-primary' : 'is-link'}`} 
                                        onClick={() => setActiveTab('basicas')}
                                    >
                                        Áreas Básicas
                                    </button>
                                </div>
                                <div className="cell">
                                    <button 
                                        className={`button is-medium is-fullwidth ${activeTab === 'tecnologias' ? 'is-primary' : 'is-link'}`} 
                                        onClick={() => setActiveTab('tecnologias')}
                                    >
                                        Tecnologías aplicadas
                                    </button>
                                </div>
                                <div className="cell">
                                    <button 
                                        className={`button is-medium is-fullwidth ${activeTab === 'cimne' ? 'is-primary' : 'is-link'}`} 
                                        onClick={() => setActiveTab('cimne')}
                                    >
                                        Red de Aulas CIMNE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="fixed-grid has-1-cols-desktop has-1-cols-mobile has-1-cols-tablet has-1-cols-fullhd has-1-cols-widescreen">
                            <div className="grid">
                                <table className="table table is-hoverable is-fullwidth has-background-primary-20">
                                    <thead>
                                        <tr>
                                            <th><abbr title="Laboratorio">Laboratorio</abbr></th>
                                            <th><abbr title="Coordinador">Coordinador</abbr></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderTableContent()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-icmasa">
                <p className="title is-6 has-text-dark"> Coordinador de los Laboratorios de Ingeniería Civil: Ing. Eduardo Daniel Palópoli</p>
            </div>

        </div>
    );
}
