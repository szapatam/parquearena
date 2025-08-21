/* SiteFooter.jsx */
export default function SiteFooter() {
    return (
      <footer id="contacto" className="footer">
        <div className="footer-inner">
          {/* IZQUIERDA: Título + Mapa */}
          <div className="foot-col foot-col--map">
            <h3 className="foot-title">ESTAMOS UBICADOS</h3>
  
            <div className="map-card" aria-label="Ubicación en Google Maps">
              <iframe
                title="Mapa ParqueArena"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={
                  "https://www.google.com/maps?q=CentroParque%2C%20Pdte%20Riesco%205330%2C%20Las%20Condes&output=embed"
                }
              />
            </div>
          </div>
  
          {/* CENTRO: Contáctanos + redes + copy */}
          <div className="foot-col foot-col--info">
            <h3 className="foot-title">CONTÁCTANOS</h3>
            <ul className="foot-list">
              <li><span className="foot-dot" /> info@centroparque.cl</li>
              <li><span className="foot-dot" /> +56 (2) 26908800</li>
              <li><span className="foot-dot" /> Pdte. Riesco 5330, Las Condes, Santiago</li>
            </ul>
  
            <div className="socials">
              <a href="#" aria-label="Instagram" className="soc-btn">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM17.8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="soc-btn">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path fill="currentColor" d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93v5.68H9.35V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.41-1.85 3.65 0 4.33 2.4 4.33 5.52v6.22zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm-1.78 13.02h3.56V9H3.56v11.45Z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="soc-btn">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path fill="currentColor" d="M13.5 22v-8h2.7l.4-3h-3.1V8.3c0-.9.3-1.5 1.6-1.5h1.7V4.1c-.8-.1-1.7-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.2V11H7.8v3h2.9v8h2.8Z"/>
                </svg>
              </a>
            </div>
  
            <p className="foot-copy">
              © {new Date().getFullYear()} Centro Parque. Todos los derechos reservados.
            </p>
          </div>
  
          {/* DERECHA: Solo logo */}
          <div className="foot-col foot-col--brand">
            {/* En Vite, archivos en /public se referencian con ruta absoluta */}
            <img src="/parquearena_logo.png" alt="Parque Arena" className="foot-brand" />
          </div>
        </div>
      </footer>
    );
  }
  