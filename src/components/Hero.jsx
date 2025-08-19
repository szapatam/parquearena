export default function Hero() {
    return (
      <section id="inicio" className="section-full hero">
        {/* Usa /public/hero.mp4. Si no tienes video aún, añade cualquier mp4 con ese nombre */}
        <video autoPlay muted loop playsInline>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
  
        <div className="content">
          <img src="parquearena_logo_blanco.png" alt="Parque Arena Logo" />
          <p className="sub">EL LUGAR DE LOS GRANDES EVENTOS</p>
        </div>
  
        {/* Flecha que baja al siguiente bloque
        <a className="down" href="#panoramas" aria-label="Bajar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </a>
         */}
      </section>
    );
  }
  