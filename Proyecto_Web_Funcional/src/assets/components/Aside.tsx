// Importamos los estilos CSS del componente Aside
import './Aside.css';

// Componente Aside: Muestra la sección lateral con el formulario de código postal
// y los enlaces para descargar la aplicación móvil
function Aside() {
  return (
    // Contenedor principal del aside con clase para estilos
    <aside className="contenedor-aside">
      {/* Contenido centrado del aside */}
      <div className="contenido-aside">
        {/* Título principal de la sección */}
        <h1 className="titulo-aside">
          Empieza tu compra<br />
          en Mercadona
        </h1>
        
        {/* Formulario para ingresar código postal */}
        <div className="formulario-codigo-postal">
          {/* Campo de entrada para el código postal */}
          <input 
            type="text" 
            placeholder="Código postal" 
            className="input-postal"
          />
          {/* Botón para enviar el código postal */}
          <button className="boton-entrar">ENTRAR</button>
        </div>

        {/* Texto alternativo para descargar la app */}
        <p className="texto-aside">
          O descarga la App y haz tu compra en<br />
          cualquier momento.
        </p>

        {/* Contenedor de botones de descarga de apps */}
        <div className="botones-app">
          {/* Enlace a Google Play Store */}
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src="/images/icons/GooglePlay.svg" alt="Google Play" className="insignia-app" />
          </a>
          {/* Enlace a Apple App Store */}
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src="/images/icons/AppStore.svg" alt="App Store" className="insignia-app" />
          </a>
        </div>
      </div>
    </aside>
  );
}

// Exportamos el componente para poder usarlo en otros archivos
export default Aside;