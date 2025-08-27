import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  //Bloquear scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const close = () => setOpen(false);
    return (
      <nav className="nav">
        <div className="inner">
        <div className="navbar-logo">
        <Link to="/" onClick={close}><img src="parquearena_logo_blanco.png" alt="Logo Parque Arena" /></Link>
        </div>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Link to="/" onClick={close}><img src="menu-logo.png" alt="menu-logo" /></Link>
        </button>

          {/* Links (desktop visibles / móvil panel deslizante) */}
          <div className={`nav-links ${open ? "is-open" : ""}`}>
            <a href="#inicio" onClick={close}>Inicio</a>
            <a href="#panoramas" onClick={close}>Nuestros Espacios</a>
            <a href="#about" onClick={close}>Nosotros</a>
            <a href="#eventos" onClick={close}>Eventos & Panoramas</a>
            <a href="#contacto" onClick={close}>Contacto</a>
            <Link to="/contacto" className="btn-cotiza" onClick={close}>¡Organiza tus eventos AQUÍ!</Link>
          </div>
        </div>

      {/* Capa de fondo para cerrar el panel tocando fuera (móvil) */}
      {open && <div className="nav-backdrop" onClick={close} />}
      </nav>
    );
  }
  