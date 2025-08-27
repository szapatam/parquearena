import './styles.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Panoramas from './components/Panoramas';
import Events from './components/Events';
import About from './components/About';
import Sponsors from './components/Sponsors';
import SiteFooter from './components/SiteFooter';

export default function App(){
  return ( 
    <>
      <NavBar/>
      <Hero/>
      <Panoramas/>
      <About/>
      <Events/>
      <Sponsors/>
      <SiteFooter/>
    </>
  );
}
