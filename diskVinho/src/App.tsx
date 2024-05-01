import './App.css'
import BaixarApp from './components/BaixarApp'
import Banner from './components/Banner'
import BannerFooter from './components/BannerFooter'
import CategoriaVinho from './components/CategoriaVinho'
import Opcoes from './components/Opcoes'
import Home from './pages/Home'
import Nav from './pages/Nav'
import FooterPagina from './pages/FooterPagina'

function App() {
  

  return (
    <>
      <Banner/>
      <Nav/>
      <Home/>
      <CategoriaVinho/>
      <Opcoes/>
      <BaixarApp/>
      <BannerFooter/>
      <FooterPagina/>
    </>
  )
}

export default App
