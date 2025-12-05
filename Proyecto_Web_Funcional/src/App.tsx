// Importamos los componentes que hemos creado
import Contentsection from './assets/components/Contentsection'
import Aside from './assets/components/Aside'
import Footer from './assets/components/Footer'
import './App.css'

// Componente principal de la aplicación
function App() {
  return (
    <>
      {/* Renderizamos el componente Contentsection */}
      <Contentsection />
      {/* Renderizamos el componente Aside */}
      <Aside />
      {/* Renderizamos el componente Footer */}
      <Footer />
    </>
  )
}

export default App
