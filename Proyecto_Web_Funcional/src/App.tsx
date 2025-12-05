/**
 * App principal - Réplica de Mercadona
 * 
 * Trabajo realizado por:
 * - Adriana: Header, Navbar con rutas y Hero section (formulario código postal)
 * - Oliver: Aside, ContentSection y Footer con estilos responsivos
 */

import { Routes, Route } from "react-router-dom";
import { Header } from "./assets/components/Header";
import Aside from './assets/components/Aside';
import Contentsection from './assets/components/Contentsection';
import Footer from './assets/components/Footer';
import "./App.css";
import "./index.css";

function Inicio() {
  return (
    <>
      <section className="hero">
        <div className="hero-image" />
        <div className="hero-content">
          <h1 className="hero-title">Empieza tu compra en Mercadona</h1>
          <p className="hero-subtitle">Introduce tu código postal y dependiendo de tu ciudad accederás a la nueva compra online o a la web clásica.</p>
          <form className="hero-form">
            <input className="hero-input" placeholder="Código postal" />
            <button className="hero-button" type="button">Entrar</button>
          </form>
        </div>
      </section>
      <Contentsection />
    </>
  );
}
function Conocenos() {
  return (
    <section className="page">
      <h2>Conócenos</h2>
      <p>Información sobre la empresa.</p>
    </section>
  );
}

function Supermercados() {
  return (
    <section className="page">
      <h2>Supermercados</h2>
      <p>Listado de supermercados.</p>
    </section>
  );
}

function Trabaja() {
  return (
    <section className="page">
      <h2>Trabaja con nosotros</h2>
      <p>Ofertas de empleo.</p>
    </section>
  );
}

function Atencion() {
  return (
    <section className="page">
      <h2>Atención al cliente</h2>
      <p>Contacta con nosotros.</p>
    </section>
  );
}

function NotFound() {
  return (
    <section className="page notfound">
      <img
        className="notfound-img"
        src="/images/404.png"
        alt="Página no encontrada"
      />
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/supermercados" element={<Supermercados />} />
          <Route path="/trabaja" element={<Trabaja />} />
          <Route path="/atencion" element={<Atencion />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Aside />
      <Footer />
    </>
  );
}

export default App;
