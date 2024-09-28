import React from 'react';
import '../../style/hedernavfooter.css';
import unsa from '../../assets/unsaII.png';
import cimne from '../../assets/cimneiber-1.png';
import ingenieria from '../../assets/Ingenieria.png';


export default function FooterII(){
    return(
        <footer className="footer fixed-footer"> 
            <div className="content has-text-centered"> 
                <p className='has-text-light'>Todos los derechos reservados © ICMASa</p> 
            </div> 
            <div className="columns"> 
                {/*<!-- Column 1 -->*/}
                <div className="column">
                <h4 className="bd-footer-title has-text-weight-medium has-text-justify"> 
                        <p className='has-tex-light'><strong>Enlaces</strong></p>
                    </h4> 
                    {/*<!-- Column 3 lists with links -->*/}
                        <figure className="image is-128x128">
                            <a href="https://www.unsa.edu.ar/" target="_blank" rel="noopener noreferrer">
                                <img src={unsa} alt="UNSa" />
                            </a>
                        </figure>
                        <figure className="is-128x50">
                            <a href="https://ing.unsa.edu.ar/" target="_blank" rel="noopener noreferrer">
                                <img src={ingenieria} alt="Facultad de Ingeniería" />
                            </a>
                        </figure>
                    <br/>
                        <figure className="image is-128x128">
                            <a href="https://cimne-iber.com.ar/" target="_blank" rel="noopener noreferrer">
                                <img src={cimne} alt="Cimne-Iber" />
                            </a>
                        </figure> 
                </div> 
                {/*<!-- Column 2 -->*/}
                <div className="column">
                    {/*<!-- Heading is left aligned, medium weight -->*/}
                    <h4 className="bd-footer-title  
                    has-text-weight-medium 
                    has-text-right has-text-left-mobile"> 
                        <p><strong>Dirección</strong></p>
                    </h4> 
                        {/*<!-- footer content -->*/}
                    <p className="bd-footer-link  has-text-right has-text-info has-text-left-mobile"> 
                        Universidad Nacional de Salta
                        <br />                            
                        Facultad de Ingeniería
                        <br />                            
                        Av. Bolivia N° 5150
                        <br />                            
                        Salta (4400) – ARGENTINA
                        <br />                           
                        <br />
                        <strong>Teléfono</strong>
                        <br />
                        +54 387 4258616
                    </p> 
                </div> 
            </div> 
            <div className="content has-text-centered"> 
                <p className='has-text-light'>Universidad Nacional de Salta – Facultad Ingeniería</p> 
            </div> 
        </footer> 
    );
}