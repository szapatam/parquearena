import { useState } from "react";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFycXVlfGVufDB8fDB8fHww", alt: "Piscina del recinto" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Parque_Florestal_-_Santiago_-_Chile_%2814764391608%29.jpg", alt: "Salón multiuso del recinto" },
  { src: "https://live.staticflickr.com/7012/6723903583_f1a773d9b6_b.jpg", alt: "Terraza y áreas verdes" },
];

export default function About() {
  const [index, setIndex] = useState(0);
  const go = (d) => setIndex((index + d + IMAGES.length) % IMAGES.length);

  return (
    <section id="about" className="section about">
      <div className="about__inner">
        {/* --------- Texto --------- */}
        <div className="about__text">
          <h2 className="about__title">
            PRIVILEGIADA <span className="about__accent">UBICACIÓN</span><br />
            ALREDEDOR DEL PARQUE<br /> ARAUCANO
          </h2>

          <p className="about__lead">
            Estamos emplazados en el Parque Arauco, Las Condes. Un espacio de gran
            extensión con áreas recreativas, deportivas y culturales para la comunidad.
            Cerca de hoteles, centros comerciales y el polo empresarial de Santiago.
            Estamos emplazados en el Parque Arauco, Las Condes. Un espacio de gran
            extensión con áreas recreativas, deportivas y culturales para la comunidad.
            Cerca de hoteles, centros comerciales y el polo empresarial de Santiago.
            Estamos emplazados en el Parque Arauco, Las Condes. Un espacio de gran
            extensión con áreas recreativas, deportivas y culturales para la comunidad.
            Cerca de hoteles, centros comerciales y el polo empresarial de Santiago.
          </p>

          <ul className="about__features">
            <li className="about__feature">
              <span className="about__ico" aria-hidden="true">
                {/* Olas / piscina */}
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 12c1.5 0 2-.75 3-1.5s1.5-1.5 3-1.5s2 .75 3 1.5s1.5 1.5 3 1.5s2-.75 3-1.5s1.5-1.5 3-1.5v2c-1.5 0-2 .75-3 1.5s-1.5 1.5-3 1.5s-2-.75-3-1.5s-1.5-1.5-3-1.5s-2 .75-3 1.5s-1.5 1.5-3 1.5z"/></svg>
              </span>
              <span className="about__lbl">Amplia piscina</span>
            </li>
            <li className="about__feature">
              <span className="about__ico" aria-hidden="true">
                {/* Quincho */}
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="m12 3l8 5v2H4V8zm-6 7h12v9H6z"/></svg>
              </span>
              <span className="about__lbl">Quinchos</span>
            </li>
            <li className="about__feature">
              <span className="about__ico" aria-hidden="true">
                {/* Sala multiuso */}
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 5h18v2H3zm2 4h14v10H5z"/></svg>
              </span>
              <span className="about__lbl">Sala multiuso</span>
            </li>
            <li className="about__feature">
              <span className="about__ico" aria-hidden="true">
                {/* Juegos infantiles */}
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6M6 22v-2l6-6l6 6v2z"/></svg>
              </span>
              <span className="about__lbl">Juegos infantiles</span>
            </li>
            <li className="about__feature">
              <span className="about__ico" aria-hidden="true">
                {/* Lavandería */}
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M4 3h16v18H4zM7 6h10v2H7zM8 12a4 4 0 1 0 8 0"/></svg>
              </span>
              <span className="about__lbl">Lavandería</span>
            </li>
            <li className="about__feature">
              <span className="about__ico" aria-hidden="true">
                {/* Lavandería */}
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M4 3h16v18H4zM7 6h10v2H7zM8 12a4 4 0 1 0 8 0"/></svg>
              </span>
              <span className="about__lbl">Otros</span>
            </li>
            
          </ul>
        </div>

        {/* --------- Galería --------- */}
        <div className="about__gallery" role="region" aria-label="Galería del recinto">
          <div className="about__frame">
            <img
              src={IMAGES[index].src}
              alt={IMAGES[index].alt}
              className="about__mainimg"
            />
            <button
              className="about__nav about__nav--prev"
              onClick={() => go(-1)}
              aria-label="Imagen anterior"
            >
              ‹
            </button>
            <button
              className="about__nav about__nav--next"
              onClick={() => go(1)}
              aria-label="Imagen siguiente"
            >
              ›
            </button>
          </div>
            
          <div className="about__thumbs" role="tablist">
            {IMAGES.map((it, i) => (
              <button
                key={it.src}
                className={`about__thumb ${i === index ? "is-active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Ver imagen ${i + 1}`}
                aria-selected={i === index}
                role="tab"
              >
                <img src={it.src} alt="" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
