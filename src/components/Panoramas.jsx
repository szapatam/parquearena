import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const items = [
  {
    title: 'ARENA',
    desc: 'NUESTRO SALÓN PRINCIPAL',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
    url: '#'
  },
  {
    title: 'TERRAZA JARDÍN',
    desc: 'ejemplo subtitulo',
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Memorial_Derechos_Humanos_en_Parque_Isla_Caut%C3%ADn%2C_Temuco.jpg',
    url: '#'
  },
  {
    title: 'SALA MULTIUSO',
    desc: 'ejemplo subtitulo',
    img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop',
    url: '#'
  },
  {
    title: 'PISCINA',
    desc: 'ejemplo subtitulo',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    url: '#'
  }
];

export default function Panoramas(){
  return (
    <section id="panoramas" className="section panos">
      <div className="section-inner">
        <div className="section-head">
          <h2 className="section-title">NUESTROS ESPACIOS</h2>
          <p className="section-kicker">ejemplo subtitulo</p>
        </div>

        <div className='full-bleed'>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{ 768:{ slidesPerView:2 }, 1200:{ slidesPerView:4 } }}
          style ={{ padding: '0 8px', width: '100%' }}
        >
          {items.map((it, i)=>(
            <SwiperSlide key={i}>
              <div className="slide">
                <img src={it.img} alt={it.title}/>
                <div className="overlay">
                  <div>
                    <h3 className="title">{it.title}</h3>
                    <p className="desc">{it.desc}</p>
                    <a className="cta" href={it.url}>HAZ CLIC Y DESCUBRE</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>

      {/* flecha al siguiente bloque
      <a href="#eventos" className="down" aria-label="Bajar a eventos">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </a> */}
    </section>
  );
}
