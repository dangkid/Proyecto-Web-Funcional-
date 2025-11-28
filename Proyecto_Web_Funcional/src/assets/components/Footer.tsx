// Importamos los estilos CSS del componente Footer
import './Footer.css';

// Componente Footer: Muestra el pie de página con información de la empresa,
// enlaces importantes, redes sociales y datos de contacto
function Footer() {
  return (
    // Etiqueta semántica footer para el pie de página
    <footer className="contenedor-footer">
      {/* Contenido principal del footer dividido en secciones */}
      <div className="contenido-footer">
        
        {/* Sección 1: Enlaces para clientes */}
        <div className="seccion-footer">
          <h3>Cliente</h3>
          <ul>
            <li><a href="#supermercados">Supermercados</a></li>
            <li><a href="#consejos">Consejos</a></li>
            <li><a href="#factura">Factura cliente</a></li>
          </ul>
        </div>

        {/* Sección 2: Enlaces para trabajadores */}
        <div className="seccion-footer">
          <h3>Trabajador</h3>
          <ul>
            <li><a href="#trabaja">Trabaja con nosotros</a></li>
          </ul>
        </div>

        {/* Sección 3: Enlaces para proveedores */}
        <div className="seccion-footer">
          <h3>Proveedor</h3>
          <ul>
            <li><a href="#factura-me">Factura-Me</a></li>
            <li><a href="#portal">Portal Trinidad</a></li>
          </ul>
        </div>

        {/* Sección 4: Enlaces sobre la sociedad y la empresa */}
        <div className="seccion-footer">
          <h3>Sociedad</h3>
          <ul>
            <li><a href="#actualidad">Actualidad</a></li>
            <li><a href="#prensa">Sala de prensa</a></li>
            <li><a href="#conoce">Conoce Mercadona</a></li>
            <li><a href="#portugal">Mercadona en Portugal</a></li>
            <li><a href="#planeta">Cuidemos el Planeta</a></li>
          </ul>
        </div>

        {/* Sección 5: Información de contacto y redes sociales */}
        <div className="seccion-footer contacto">
          {/* Icono de teléfono */}
          <div className="icono-telefono">📞</div>
          {/* Número de teléfono principal */}
          <h2 className="numero-telefono">800 500 220</h2>
          {/* Contenedor de iconos de redes sociales */}
          <div className="iconos-sociales">
            {/* aria-label ayuda a la accesibilidad para lectores de pantalla */}
            <a href="mailto:info@mercadona.com" aria-label="Email">✉️</a>
            <a href="#facebook" aria-label="Facebook">f</a>
            <a href="#twitter" aria-label="Twitter">𝕏</a>
            <a href="#youtube" aria-label="YouTube">▶️</a>
            <a href="#instagram" aria-label="Instagram">📷</a>
            <a href="#linkedin" aria-label="LinkedIn">in</a>
          </div>
        </div>
      </div>

      {/* Parte inferior del footer con copyright y enlaces legales */}
      <div className="footer-inferior">
        {/* Texto de copyright */}
        <p>© Mercadona S.A. A46103834. Todos los derechos reservados.</p>
        {/* Enlaces a páginas legales */}
        <div className="enlaces-footer">
          <a href="#accesibilidad">Accesibilidad</a>
          <a href="#privacidad">Política de privacidad</a>
          <a href="#cookies">Política de cookies</a>
          <a href="#terminos">Términos y condiciones</a>
        </div>
      </div>
    </footer>
  );
}

// Exportamos el componente para poder usarlo en otros archivos
export default Footer;
