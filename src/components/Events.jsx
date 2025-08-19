const items = [
    {
      title: 'GOOLFY CENTROPARQUE',
      date: 'Mes de julio',
      img: 'https://weezevent.com/wp-content/uploads/2023/05/12154322/ideas-tema-fiesta.jpg',
      url: '#'
    },
    {
      title: 'KIDS ZONE',
      date: 'Mes de julio',
      img: 'https://media.istockphoto.com/id/661151102/es/foto/discoteca-fiesta-con-confeti.jpg?s=612x612&w=0&k=20&c=wesFLall611TET5-yxf-c4g-fTW5qRtfYismWniNAqM=',
      url: '#'
    },
    {
      title: 'FIESTA HOY ES HOY',
      date: '29 de agosto',
      img: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1600&auto=format&fit=crop',
      url: '#'
    },
  ];
  
  export default function Events(){
    return (
      <section id="eventos" className="section events">
        <div className="section-inner">
          <div className="section-head">
            <h2 className="section-title">PRÓXIMOS EVENTOS</h2>
            <p className="section-kicker">COMPRA TUS ENTRADAS PARA LOS PRÓXIMOS EVENTOS</p>
          </div>
  
          <div className="cards">
            {items.map((it, i)=>(
              <article className="card-e" key={i}>
                <div className="thumb">
                  <img src={it.img} alt={it.title}/>
                  <span className="ribbon">{it.date.toUpperCase()}</span>
                </div>
                <div className="body">
                  <h3>{it.title}</h3>
                  <div>
                    <a class="cta" href={it.url}>MÁS INFORMACIÓN</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
  
        {/* flecha a la siguiente sección
        <a href="#about" className="down" aria-label="Bajar a descripción">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </a>
         */}
      </section>
    );
  }
  