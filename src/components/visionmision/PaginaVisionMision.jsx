import '../../style/Inicio.css';

export default function PaginaVisionMision(){
    return(
        <div className="pagina">
            <div className="block" id="sectionvision">
                <div className="container-icmasa">
                    <div className="box has-background-primary-20 block-objetivo-indvidual">
                        <div className='content'>
                        <p className='title is-4'>VISIÓN</p>
                        <hr/>
                        <p>
                            El Instituto de Ingeniería ICMASa, compuesto por miembros de la Escuela de Ingeniería Civil y del CONICET, 
                            es un motor de investigación de calidad en Ingeniería Civil. Con una fuerte inserción en el ámbito científico nacional 
                            e internacional, busca unir esfuerzos de profesores e investigadores para promover la investigación y el desarrollo de 
                            forma transversal y multidisciplinaria.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block" id="sectionmision">
                <div className="container-icmasa">
                    <div className="box has-background-info-30 block-objetivo-indvidual">
                        <div className='content'>
                            <p className='title is-4'>Misiones</p>
                            <hr/>
                            <dl style={{paddingLeft:"15px"}}>
                                <li>Reunir capacidades y proyectar una visibilidad destacada en la comunidad científica nacional e internacional en Ingeniería Civil.</li>
                                <li>Profundizar en líneas de investigación básica y aplicada para alcanzar la excelencia.</li>
                                <li>Promover el conocimiento y formar recursos humanos, incentivando sus capacidades individuales.</li>
                                <li>Fomentar la cooperación y el intercambio de conocimiento científico y técnico.</li>
                                <li>Colaborar con universidades, organismos de investigación, la industria y otros centros públicos y privados.</li>
                                <li>Responder a las demandas sociales y difundir el conocimiento generado a través de foros como congresos, seminarios, conferencias, y publicaciones especializadas.</li>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}