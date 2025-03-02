import React, { useState } from "react";

const Contact = () => {
  // Définition des états pour gérer les champs du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sujet: "",
    message: "",
  });

  // Fonction pour mettre à jour les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fonction pour envoyer le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux ajouter la logique pour envoyer les données (par exemple avec une API)
    console.log(formData);
    // Réinitialiser le formulaire après soumission
    setFormData({
      name: "",
      email: "",
      sujet: "",
      message: "",
    });
    alert("Votre message a été envoyé avec succès!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <main className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
        <section className="contact-container">
          <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
            Nous contacter
          </h2>
          <p className="mb-8 text-center text-gray-600">
            Remplissez ce formulaire et nous vous répondrons rapidement.
          </p>

          <form id="contactForm" onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="nom"
                className="block text-lg font-medium text-gray-700"
              >
                Nom :
              </label>
              <input
                type="text"
                id="nom"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email :
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre_email@domaine.com"
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="sujet"
                className="block text-lg font-medium text-gray-700"
              >
                Sujet :
              </label>
              <input
                type="text"
                id="sujet"
                name="sujet"
                value={formData.sujet}
                onChange={handleChange}
                placeholder="Sujet de votre message"
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Votre message :
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message"
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full py-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
  );
};

export default Contact;
