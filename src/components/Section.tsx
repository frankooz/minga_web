import { useState } from "react";

type ButtonName = "todos" | "julio" | "agosto";

const Section = () => {
  const [selectedButton, setSelectedButton] = useState<ButtonName>("todos");

  const handleButtonClick = (buttonName: ButtonName) => {
    setSelectedButton(buttonName);
  };

  const renderImages = () => {
    let imagesToShow: string[] = [];

    if (selectedButton === "todos") {
      imagesToShow = ["agosto.jpg", "hero.jpg"];
    } else if (selectedButton === "julio") {
      imagesToShow = ["hero.jpg"];
    }

    return (
      <div className="grid gap-10 justify-center h-auto md:grid-cols-2 lg:grid-cols-3">
        {imagesToShow.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${index + 1}`}
            className="w-full h-auto m-2 cursor-pointer transform hover:opacity-50 transition-all duration-500"
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-black font-bold">
      <section className="flex justify-center">
        <ul className="flex gap-10 text-xl mt-2">
          <li>
            <button
              className={`border rounded px-2 py-1 ${
                selectedButton === "todos"
                  ? "bg-blue-300 text-white"
                  : "bg-transparent text-white"
              }`}
              onClick={() => handleButtonClick("todos")}
            >
              Todos
            </button>
          </li>
          <li>
            <button
              className={`border rounded px-2 py-1 ${
                selectedButton === "julio"
                  ? "bg-blue-300 text-white"
                  : "bg-transparent text-white"
              }`}
              onClick={() => handleButtonClick("julio")}
            >
              Verano
            </button>
          </li>
        </ul>
      </section>
      <div className="flex justify-center">{renderImages()}</div>
    </div>
  );
};

export default Section;
