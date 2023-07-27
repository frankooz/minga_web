import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = ["show.jpg", "show1.jpg", "show2.jpg"];

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000); // Intervalo de 3 segundos (3000 milisegundos)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex justify-center">
      <div className="relative w-full sm:w-2/3 lg:w-1/2">
        <img
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Carousel;
