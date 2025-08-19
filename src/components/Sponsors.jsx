/* Sponsors.jsx */
export default function Sponsors() {
    // Usa tus logos en /public/logos o /src/assets/logos
    const brands = [
      { name: "Passline",  href: "#", src: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/RedBullEnergyDrink.svg/1200px-RedBullEnergyDrink.svg.png" },
      { name: "Undurraga", href: "#", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png" },
      { name: "Nanuc",     href: "#", src: "https://cdn.worldvectorlogo.com/logos/logo-spotify.svg" },
      { name: "IDE Co",    href: "#", src: "https://www.temuco.cl/wp-content/uploads/2022/02/Logo-mun-tco-w500-300x195.png" },
      { name: "Fedetur",   href: "#", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJc_9WAZocqmIhx9ZOhVXOxoPrfTer3R38w&s" },
      { name: "Condes",    href: "#", src: "https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png" },
    ];
  
    return (
      <section id="partners" className="section sponsors">
        <div className="section-inner-sponsor">
          <div className="section-head">
            <h2 className="section-title">PARTNERS</h2>
            <p className="section-kicker">CONOCE NUESTRAS MARCAS ASOCIADAS</p>
          </div>
  
          <ul className="logos">
            {brands.map((b, i) => (
              <li key={i} className="logo-card">
                {/* Si no quieres link, reemplaza <a> por <div> */}
                <a href={b.href} target="_blank" rel="noreferrer" aria-label={b.name}>
                  <img className="logo" src={b.src} alt={b.name} loading="lazy" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  