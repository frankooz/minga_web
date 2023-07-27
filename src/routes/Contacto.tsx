import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Contacto = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black">
        <Contact />
      </div>
      <footer className="bg-black text-center text-white">
        <Footer />
      </footer>
    </>
  );
};

export default Contacto;
