import React, { useState } from "react";
import { FaBook, FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import InscriptionImg from "../assets/img/inscription.jpg";
import InscriptionVideo from "../assets/videos/inscript.mp4";
// import BackgroundVideo from "../assets/videos/Accueil2.mp4";

function Inscription() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    formation: "",
    conditions: false,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regex patterns for validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]{9}$/; // Regex pour 10 chiffres

    // Check if all fields are filled and valid
    if (
      formData.nom &&
      formData.prenom &&
      formData.email &&
      formData.telephone &&
      formData.formation &&
      formData.conditions
    ) {
      // Validate email format
      if (!emailPattern.test(formData.email)) {
        setMessage("Veuillez entrer un email valide.");
        return;
      }

      // Validate phone number format
      if (!phonePattern.test(formData.telephone)) {
        setMessage("Veuillez entrer un numéro de téléphone valide.");
        return;
      }

      setMessage("Inscription réussie !");
    } else {
      setMessage("Veuillez remplir tous les champs correctement.");
    }
  };

  return (
    <div>
      {/* Header avec arriere plan en video */}
      <header className="relative w-full overflow-hidden h-96">
        <video
          className="absolute top-0 left-0 object-cover w-full h-full"
          src={InscriptionVideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">
            Inscrivez-vous dès maintenant !
          </h1>
        </div>
      </header>
      {/* fin header */}

      {/** Contenu principal */}
      <div className="flex items-center justify-center min-h-screen p-10 px-4 bg-gray-100 sm:px-6 lg:px-8">
        <main className="flex flex-col w-full p-10 bg-white rounded-lg shadow-lg sm:p-20 lg:flex-row">
          {/* Section de l'image à gauche */}
          <section className="flex items-center justify-center w-full pr-0 mb-8 lg:w-1/2 lg:pr-8 lg:mb-0">
            <img
              src={InscriptionImg}
              alt="Inscription"
              className="rounded-lg shadow-lg"
            />
          </section>

          {/* Section du formulaire à droite */}
          <section className="w-full pl-0 lg:w-1/2 lg:pl-8">
            <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-800">
              Inscription
            </h2>
            <p className="mb-8 text-center text-gray-600">
              Remplissez ce formulaire pour vous inscrire.
            </p>

            <form
              id="inscriptionForm"
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
                    name="nom"
                    placeholder="Votre nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="prenom"
                  className="block text-lg font-medium text-gray-700"
                >
                  Prénom :
                </label>
                <div className="flex items-center mt-2">
                  <FaUser className="absolute ml-3 text-gray-400" />
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    placeholder="Votre prénom"
                    value={formData.prenom}
                    onChange={handleChange}
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
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="telephone"
                  className="block text-lg font-medium text-gray-700"
                >
                  Téléphone :
                </label>
                <div className="flex items-center mt-2">
                  <FaPhone className="absolute ml-3 text-gray-400" />
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    placeholder="Ex: 0612345678"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="formation"
                  className="block text-lg font-medium text-gray-700"
                >
                  Formation souhaitée :
                </label>
                <div className="relative flex items-center mt-2">
                  <FaBook className="absolute ml-3 text-gray-400 " />
                  <select
                    id="formation"
                    name="formation"
                    value={formData.formation}
                    onChange={handleChange}
                    required
                    appearence-none
                    className="z-10 w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Sélectionnez une formation</option>
                    <option value="dev_web">Développement Web</option>
                    <option value="reseaux">Réseaux et Sécurité</option>
                    <option value="marketing">Marketing Digital</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="conditions"
                  name="conditions"
                  checked={formData.conditions}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                <label className="text-gray-700">
                  J&apos;accepte les{" "}
                  <button
                    type="button"
                    className="text-blue-500 hover:underline"
                    onClick={() => alert("Conditions générales")}
                  >
                    conditions générales
                  </button>
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="w-full py-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  S&apos;inscrire
                </button>
              </div>
            </form>

            <p
              id="message"
              className={`mt-4 text-center ${
                message.includes("réussie") ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Inscription;
