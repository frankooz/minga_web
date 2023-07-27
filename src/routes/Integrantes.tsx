import Navbar from "../components/Navbar";
import ImageGallery from "../components/ImageGallery";
import Footer from "../components/Footer";

const Integrantes = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black">
        <ImageGallery />
      </div>
      <footer className="bg-black text-center text-white">
        <Footer />
      </footer>
    </>
  );
};

export default Integrantes;
