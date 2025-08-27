// SponsorsRibbon.jsx
export default function SponsorsRibbon() {
  const brands = [
    { name: "Vesti",  href: "#", src: "/sponsor1_vestilogoblanco.png" },
    { name: "Visual_Studio", href: "#", src: "sponsor2_visualstudio.png" },
    { name: "Coca_Cola",     href: "#", src: "sponsor3_logo_coca_cola_sin_azucar.png" },
    { name: "Escenarios_Saldia",    href: "#", src: "sponsor4_escenariossaldia.png" },
  ];

  // Duplicamos contenido para que la animación a -50% sea continua.
  const loop = [...brands, ...brands];
 
  return (
    <section id="partners" className="section sponsors sponsors-ribbon">
      <div className="section-inner-sponsor">
        <div className="section-head">
          <h2 className="section-title">PARTNERS</h2>
          <p className="section-kicker">CONOCE NUESTRAS MARCAS ASOCIADAS</p>
        </div>

        <div className="ribbon-wrap" aria-label="Marcas asociadas">
          {/* Pista 1 */}
          <div className="ribbon-track">
            {loop.map((b, i) => (
              <a
                key={`t1-${i}`}
                href={b.href}
                target="_blank"
                rel="noreferrer"
                className="ribbon-card"
                aria-label={b.name}
              >
                <img src={b.src} alt={b.name} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
