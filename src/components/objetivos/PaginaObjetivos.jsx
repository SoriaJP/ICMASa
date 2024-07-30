import { Link } from 'react-router-dom';
import '../../style/Inicio.css';

export default function PaginaObjetivos(){
    return(
        <div className="pagina">
            <div className='block'>
                <div className='container-icmasa'>
                    <p className='title is-4 has-text-dark'>Objetivos Estratégicos del ICMASa</p>
                    <p className='has-text-dark' style={{textAlign:"justify"}}>La declaración cualitativa y cuantitativa de los objetivos futuros que se propone alcanzar constituye las bases y posteriores líneas rectoras que harán posible la <Link to='/vision_mision'><strong>visión</strong></Link> y <Link to='/vision_mision'><strong>misiones</strong></Link>.</p>
                </div>
            </div>
            <div className='container-icmasa'>
                <div className="fixed-grid has-1-cols-mobile">
                    <div className='grid'>
                        <div className="cell box has-background-primary-20 block-objetivo-indvidual">
                            <div className='content' id="estrategicos">
                                <p className='title is-4'>Objetivos Estratégicos</p>
                                <p className='sutitle'>En un plazo de 10 años</p>
                                <hr/>
                                <dl style={{paddingLeft:"15px"}}>
                                    <li>Promover mediante apoyo público y privado la investigación que se realice en todas las áreas de la Ingeniería Civil para que sus resultados sean de utilidad a la sociedad en general.</li>
                                    <li>Sumar capacidades humanas para capitalizar de la mejor manera posible sus logros y hacer que los mismos sean a su vez el motor de nuevos emprendimientos científicos.</li>
                                    <li>Hacer visible a nivel nacional e internacional su potencialidad en las distintas áreas de la Mecánica, Estructuras, Fluidos, Hidráulica, Transporte en general, Geotecnia, Energía, etc.</li>
                                    <li>Aunar esfuerzos transversales entre investigadores e instituciones para resolverlos problemas interdisciplinarios de la Ingeniería Civil.</li>
                                    <li>Promover la colaboración y convenios con otras universidades, organismos de investigación, industria, administración en general y otros centros de investigación públicos y privados.</li>
                                    <li>Promover la internacionalización de la cooperación con investigadores e instituciones externas públicas y/o privadas.</li>
                                    <li>Evaluar y validar la investigación realizada por sus miembros incentivando y fomentando su competencia, motivando la responsabilidad y el crecimiento individual de cada persona.</li>
                                    <li>Fomentar la formación continuada y la diseminación interna y externa del conocimiento para hacer posible a la colaboración entre investigadores.</li>
                                </dl>
                            </div>
                        </div>
                        <div className=" cell box has-background-info-30 block-objetivo-indvidual">
                            <div className='content' id="operativos">
                                <p className='title is-4'>Objetivos Operativos</p>
                                <p>La garantía de cumplimiento de los objetivos operativos descansa, en gran medida, en la capacidad de los investigadores y la forma en que se organiza internamente el <strong>ICMASa</strong> para cada proyecto o iniciativa en particular.</p>
                                <hr/>
                                <dl style={{paddingLeft:"15px"}}>
                                    <li>Promover la participación en proyectos competitivos de la propia Universidad, proyectos nacionales e internacionales, como motor de la investigación básica para alcanzar la excelencia en el conocimiento.</li>
                                    <li>Participar en convenios de investigación con la industria y otras empresas privadas, donde aplicar los conocimientos básicos con la finalidad de concretar la transferencia del conocimiento al medio.</li>
                                    <li>Promover la generación de patentes sobre ideas consolidadas que resultan de la investigación genuina del ICMASa, estableciendo así un importante patrimonio material que ayude en la financiación del Instituto.</li>
                                    <li>Promover la diseminación del conocimiento consolidado en forma de:
                                        <ul>
                                            <li>Libros, capítulos de libros, monografías e informes de trabajos científicos realizados.</li>
                                            <li>Artículos en revistas nacionales e internacionales de prestigio, teniendo en cuenta la calificación de las mismas a través de estándares reconocidos internacionalmente.</li>
                                            <li>Asistencia y participación activa mediante ponencias y publicaciones en foros de discusión como congresos, jornadas, seminarios, etc.</li>
                                        </ul>
                                    </li>
                                    <li>Promover la colaboración y convenios con otras universidades, organismos de investigación, industria, administración en general y otros centros de investigación públicos y privados.</li>
                                    <li>Promover la internacionalización de la cooperación con investigadores e instituciones externas públicas y/o privadas.</li>
                                    <li>Evaluar y validar la investigación realizada por sus miembros incentivando y fomentando su competencia, motivando la responsabilidad y el crecimiento individual de cada persona.</li>
                                    <li>Fomentar la formación continuada y la diseminación interna y externa del conocimiento para hacer posible a la colaboración entre investigadores.</li>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-icmasa' id="acciones">
                <div className='box has-background-warning-70 block-objetivo-indvidual'>
                    <div className='content has-text-dark'>
                        <p className='title is-4 has-text-dark'>Acciones</p>
                        <p className='sutitle'>acciones para alcanzar los objetivos</p>
                        <hr/>
                        <p >Mediante el diseño de procedimientos estratégicos debidamente aceptados por la Facultad de Ingeniería de la Universidad Nacional de Salta, se establece a continuación las acciones a corto plazo (2 años) que harán posible alcanzar los objetivos previamente formulados.</p>
                        <p>El principal objetivo de la Dirección del ICMASa será institucionalizar la entidad con la finalidad de potenciar el desarrollo de actividades académicas propias de la ingeniería civil en los siguientes ámbitos:</p>
                        <dl style={{paddingLeft:"30px"}}>
                            <li>Promover la investigación y el desarrollo de los miembros de la Escuela de Ingeniería Civil, formado por el profesorado con grado de Doctor en Ingeniería, Magister en Ingeniería, Especialistas en Ingeniería, Ingenieros, doctorandos y estudiantes de postgrado en general.</li>
                            <li>Promover el desarrollo de Cursos de Postgrado y Actualización Profesional.</li>
                            <li>Prestación de servicios a instituciones públicas y privadas que requieran certificación oficial de trabajos de laboratorio en general.</li>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}