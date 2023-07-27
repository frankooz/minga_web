import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const Fotos = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black">
        <Carousel />
      </div>
      <footer className="bg-black text-center text-white">
        <Footer />
      </footer>
    </>
  );
};

export default Fotos;
