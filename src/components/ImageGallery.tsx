import { Suspense } from "react";

const ImageGallery = () => {
  const images = [
    { imageUrl: "eze.jpg", description: "Ezequiel Beltramella - Saxo Tenor" },
    { imageUrl: "goio.jpg", description: "Goio Ibañez - Guitarra" },
    { imageUrl: "nati.jpg", description: "Natalia Otaranto - Voz" },
    { imageUrl: "leo.jpg", description: "Leo Ventura - Sexo Soprano" },
    { imageUrl: "luqui.jpg", description: "Lucas de la Torre - Trompeta" },
    { imageUrl: "nahue.jpg", description: "Nahuel Stefano - Bajo" },
    { imageUrl: "talo.jpg", description: "Talo Ibañez - Teclado" },
    { imageUrl: "toto.jpg", description: "Nestor Segura - Voz" },
    { imageUrl: "frank.jpg", description: "Franco Poblete - Clarinete" },
    { imageUrl: "cache.jpg", description: "Juan Pablo De Haart - Timbales" },
    // Agrega más imágenes y descripciones si lo deseas
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {images.map((imageData, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <Suspense fallback={<div>Cargando...</div>}>
            <img
              src={imageData.imageUrl}
              alt={`Image ${index + 1}`}
              className="w-full h-auto rounded-md"
              loading="lazy"
            />
          </Suspense>
          <p className="text-white text-center mt-2">{imageData.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
