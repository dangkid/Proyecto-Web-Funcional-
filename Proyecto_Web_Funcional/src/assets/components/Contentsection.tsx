// Importamos los estilos CSS del componente Contentsection
import './Contentsection.css';

// Componente Contentsection: Muestra las secciones de "Compra online" y "Nueva tienda online"
function Contentsection() {
  return (
    <section className="contenedor-contentsection">
      {/* Primera sección: Compra online */}
      <div className="seccion-contenido">
        <div className="texto-contenido">
          <h2 className="titulo-contenido">Compra online</h2>
          <p className="descripcion-contenido">
            Recibe tu pedido en casa con la misma calidad y frescura de siempre.
          </p>
        </div>
        <div className="imagen-contenido">
          <img 
            src="/images/banner/compra-online.jpeg" 
            alt="Compra online en Mercadona" 
            className="img-contenido"
          />
        </div>
      </div>

      {/* Segunda sección: Nueva tienda online */}
      <div className="seccion-contenido invertido">
        <div className="imagen-contenido">
          <img 
            src="/images/banner/nueva-tienda.jpeg" 
            alt="Nueva tienda online" 
            className="img-contenido"
          />
        </div>
        <div className="texto-contenido">
          <h2 className="titulo-contenido">Nueva tienda online en algunas zonas</h2>
          <p className="descripcion-contenido">
            Por el momento, la nueva app y web está disponible en Valencia, Barcelona, Madrid y 
            otras poblaciones. Introduce tu código postal arriba para ver si repartimos en tu 
            zona. Si aún no llegamos, ¡apúntate y te avisamos!
          </p>
          <a href="#avisame" className="enlace-avisame">Avísame</a>
        </div>
      </div>
    </section>
  );
}

export default Contentsection;