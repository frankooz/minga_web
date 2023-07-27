import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Fotos from "./routes/Fotos";
import Integrantes from "./routes/Integrantes";
import Contacto from "./routes/Contacto";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fotos" element={<Fotos />} />
        <Route path="/Integrantes" element={<Integrantes />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
