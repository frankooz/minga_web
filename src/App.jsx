import Header from "./components/Header"
import { Hero } from "./components/Hero"
import Fotos from './components/Fotos';
import Integrantes from "./components/Integrantes";
import { About } from "./components/About";
import { Videos } from "./components/Videos";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <Integrantes/>
      <Videos />
      <Fotos />
      <Footer/>
    </div>
    
  )
}
export default App