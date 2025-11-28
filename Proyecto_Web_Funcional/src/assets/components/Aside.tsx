// Importamos los estilos CSS del componente Aside
import './Aside.css';

// Componente Aside: Muestra la sección lateral con el formulario de código postal
// y los enlaces para descargar la aplicación móvil
function Aside() {
  return (
    <aside className="contenedor-aside">
      <div className="contenido-aside">
        {/* Título con un solo salto de línea forzado */}
        <h1 className="titulo-aside">
          Empieza tu compra<br />en Mercadona
        </h1>
        
        {/* Formulario para ingresar código postal */}
        <div className="formulario-codigo-postal">
          <input 
            type="text" 
            placeholder="Código postal" 
            className="input-postal"
          />
          <button className="boton-entrar">ENTRAR</button>
        </div>

        {/* El CSS gestiona el salto del párrafo */}
        <p className="texto-aside">
          O descarga la App y haz tu compra en cualquier momento.
        </p>

        {/* Contenedor de botones de descarga de apps */}
        <div className="botones-app">
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src="/images/icons/GooglePlay.svg" alt="Google Play" className="insignia-app" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src="/images/icons/AppStore.svg" alt="App Store" className="insignia-app" />
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Aside;