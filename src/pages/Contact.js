import React, { useState } from "react";
import ContactImg from "../assets/img/contact.jpg";
import BackgroundVideo from "../assets/videos/texto.mp4"; // Assurez-vous d'avoir une vidéo dans ce chemin

import {
  FaUser,
  FaEnvelope,
  FaRegFileAlt,
  FaCommentDots,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sujet: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux ajouter la logique pour envoyer les données (par exemple avec une API)
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      sujet: "",
      message: "",
    });
    alert("Votre message a été envoyé avec succès!");
  };

  return (
    <div>
      {/* Header avec arriere plan en video */}
      <header className="relative w-full h-96 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={BackgroundVideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Contactez-nous</h1>
        </div>
      </header>
      {/* fin header */}
      <div className="p-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gray-100">
        <main className="w-full p-10 sm:p-20 bg-white rounded-lg shadow-lg flex flex-col lg:flex-row">
          <section className="w-full lg:w-1/2 pr-0 lg:pr-8 flex items-center justify-center mb-8 lg:mb-0">
            <img
              src={ContactImg}
              alt="Contact"
              className="rounded-lg shadow-lg"
            />
          </section>
          <section className="w-full lg:w-1/2 pl-0 lg:pl-8">
            <h2 className="mb-6 text-4xl font-bold text-center text-gray-800">
              Nous contacter
            </h2>
            <p className="mb-8 text-center text-gray-600">
              Remplissez ce formulaire et nous vous répondrons rapidement.
            </p>

            <form
              id="contactForm"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="relative">
                <label
                  htmlFor="nom"
                  className="block text-lg font-medium text-gray-700"
                >
                  Nom :
                </label>
                <div className="flex items-center mt-2">
                  <FaUser className="absolute ml-3 text-gray-400" />
                  <input
                    type="text"
                    id="nom"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email :
                </label>
                <div className="flex items-center mt-2">
                  <FaEnvelope className="absolute ml-3 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre_email@domaine.com"
                    required
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="sujet"
                  className="block text-lg font-medium text-gray-700"
                >
                  Sujet :
                </label>
                <div className="flex items-center mt-2">
                  <FaRegFileAlt className="absolute ml-3 text-gray-400" />
                  <input
                    type="text"
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    placeholder="Sujet de votre message"
                    required
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700"
                >
                  Votre message :
                </label>
                <div className="flex items-center mt-2">
                  <FaCommentDots className="absolute ml-3 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message"
                    required
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="w-full py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Envoyer
                </button>
              </div>

              <p
                id="contact-container"
                className="mt-4 text-center text-green-500 message"
              ></p>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contact;
