export default function PaginaLaboratorio(){
    return(
        <div className="pagina">
            <div className="container-icmasa">
                <p className="title is-4 has-text-dark">Laboratorios</p>
                <p className="is-6 has-text-dark">ALaboratorios
                Los Laboratorios de la carrera de Ingeniería Civil se muestran en la siguiente tabla. La administración de los laboratorios de las Tecnologías aplicadas está a cargo del Instituto ICMASa.</p>
            </div>
            <div className="container-icmasa">
                <table className="table is-narrow is-hoverable">
                    <thead>
                        <tr>
                            <th><abbr></abbr></th>
                            <th><abbr title="Laboratorio">Laboratorio</abbr></th>
                            <th><abbr title="Coordinador">Coordinador</abbr></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="is-primary">
                            <td><strong className="has-text-dark">Áreas Básicas</strong></td>
                            <td>Laboratorio de Física I</td>
                            <td>Dra. Cecilia Pocovi</td>
                        </tr>
                        <tr className="is-primary">
                            <td></td>
                            <td>Laboratorio de Física II</td>
                            <td>Ing. Graciela Musso de Falú</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="is-primary">
                            <td><strong className="has-text-dark">Tecnologías aplicadas</strong></td>
                            <td>Laboratorio de Hidráulica</td>
                            <td>Ing. Fernando Cazón</td>
                        </tr>
                        <tr className="is-primary">
                            <td></td>
                            <td>Laboratorio de Estructuras</td>
                            <td>Mag. Paul Kohan</td>
                        </tr>
                        <tr className="is-primary">
                            <td></td>
                            <td>Laboratorio de Materiales</td>
                            <td>Ing. Héctor Cardozo</td>
                        </tr>
                        <tr className="is-primary">
                            <td></td>
                            <td>Laboratorio de Geotecnia y Vías de de comunicación</td>
                            <td>Ing. Enmel T. Castro e Ing. Antonio Forns</td>
                        </tr>
                        <tr className="is-primary">
                            <td></td>
                            <td>Laboratorio de Ingeniería Sanitaria e Instalaciones de Edificios</td>
                            <td>Ing. Daniel Franco e Ing. Lazarte</td>
                        </tr>
                        <tr className="is-primary">
                            <td></td>
                            <td>Topografía</td>
                            <td>Agr. Carmen Quispe</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="is-link">
                            <td>Red de <strong>Aulas CIMNE</strong></td>
                            <td>Aula CIMNE - Laboratorio de Métodos Numéricos</td>
                            <td>Dr. Sergio Oller Aramayo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container-icmasa">
                <p className="title is-6 has-text-dark"> Coordinador de los Laboratorios de Ingeniería Civil: Ing. Eduardo Daniel Palópoli</p>
            </div>
        </div>
    );
}