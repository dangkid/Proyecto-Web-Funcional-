import { Routes, Route } from "react-router-dom";
import { Header } from "./assets/components/Header";
import Contentsection from "./assets/components/Contentsection";
import Aside from "./assets/components/Aside";
import Footer from "./assets/components/Footer";
import "./App.css";
import "./index.css";



function Inicio() {
  return (
    <>
      <Aside />
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
      
      <Footer />
    </>
  );
}

export default App;
