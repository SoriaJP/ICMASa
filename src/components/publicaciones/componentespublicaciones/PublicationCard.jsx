export default function PublicationCard({articulo}){
  return(
    <div className="card has-background-info">
      <header className="card-header">
        <p className="card-header-title">{articulo.title}</p>
        <button class="card-header-icon"  aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div className="card-content">
        <div className="content">
          <p><strong>Author:</strong> {articulo.authors}</p>
          <p><strong>Journal:</strong> {articulo.journal}</p>
          <p><strong>Year:</strong> {articulo.date}</p>
          <p>{articulo.info}</p>
          <a href={articulo.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      </div>
    </div>
  );
}