import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      // Check if all fields are filled
      const formData = new FormData(form.current);
      if (
        !formData.get("user_name") ||
        !formData.get("user_email") ||
        !formData.get("message")
      ) {
        alert("Please fill in all fields before sending the message.");
        return;
      }

      emailjs
        .sendForm(
          "service_3fvwy4s", // Replace with your EmailJS service ID
          "template_kiwze6f", // Replace with your EmailJS template ID
          form.current,
          "WfzR-TL4SnszWgV2d" // Replace with your EmailJS user ID
        )
        .then((result) => {
          console.log(result.text);
          // Mostrar el mensaje "Mensaje Enviado" al enviar el formulario
          const messageSentElement = document.getElementById("messageSent");
          if (messageSentElement) {
            messageSentElement.style.display = "block";
          }
          // Reiniciar el formulario después de enviarlo
          form.current!.reset();
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className="bg-black">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto p-6 bg-blue-200 rounded-lg shadow-lg"
      >
        {/* Resto del formulario */}
        <div className="mb-4">
          <h1 className="flex items-center justify-center font-bold">
            Envianos un Mensaje!
          </h1>
          <label htmlFor="user_name" className="block mb-2 text-lg font-bold">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className="w-full p-2 border rounded"
            placeholder="Tu nombre"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="user_email" className="block mb-2 text-lg font-bold">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className="w-full p-2 border rounded"
            placeholder="Tu Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-lg font-bold">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="w-full p-2 border rounded"
            placeholder="Tu mensaje"
          ></textarea>
        </div>
        <div className="text-center">
          <input
            type="submit"
            value="Send"
            name="submit" // Add the name attribute to the submit button
            className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 cursor-pointer"
          />
        </div>
        {/* Mostrar el mensaje "Mensaje Enviado" al enviar el formulario */}
        <p
          id="messageSent"
          className="text-green-500 text-center font-bold mb-4"
          style={{ display: "none" }}
        >
          Mensaje Enviado !!
        </p>
      </form>
    </div>
  );
};

export default Contact;
