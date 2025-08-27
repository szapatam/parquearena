import { useState } from "react";
import "./Contacto.css";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "", 
    mensaje: "",
  }); 

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Aquí podrás integrar envío (EmailJS, API, etc.)
    alert("¡Gracias! Pronto nos pondremos en contacto.");
  };

  return (
    <main id="contacto" style={{ paddingTop: "72px" }}>
      <section className="section contact-wrap">
        <div className="contact-card">
          <h1 className="contact-title">Contáctanos</h1>
          <p className="contact-subtitle">
            Cuéntanos tu evento y te enviaremos una cotización.
          </p>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-row">
              <label>Correo electrónico</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-row">
              <label>Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={onChange}
                placeholder="+56 9 1234 5678"
              />
            </div>

            <div className="form-row">
              <label>Asunto</label>
              <input
                type="text"
                name="asunto"
                value={form.asunto}
                onChange={onChange}
              />
            </div>

            <div className="form-row">
              <label>Mensaje</label>
              <textarea
                name="mensaje"
                rows="5"
                value={form.mensaje}
                onChange={onChange}
                placeholder="Cuéntanos fecha, lugar, tipo de evento, aforo, etc."
                required
              />
            </div>

            <button type="submit" className="btn-cotiza">
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
