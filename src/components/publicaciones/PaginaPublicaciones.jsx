import PublicationCard from "./componentespublicaciones/PublicationCard";
import articulos from "../../assets/json/articulos.json";

export default function PaginaPublicaciones(){
    return(
        <div className="pagina">
            <div className="container-icmasa">
                <p className="title is-4 has-text-dark">Artículos</p>
                <p className="subtitle has-text-dark">artículos publicados en revistas internacionales indexadas con revisión (jcr)</p> 
            </div>
            <div className=" container-icmasa card">
                <header className="card-header">
                    <p className="card-header-title">Card header</p>
                    <button className="card-header-icon" aria-label="more options">
                        <span className="icon">
                            <i className="fas fa-angle-down" aria-hidden="false"></i>
                        </span>   
                    </button>
                </header>
            </div>
        </div>        
    );
}

/*

*/