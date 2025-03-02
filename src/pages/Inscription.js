import React, { useState } from "react";

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
    const phonePattern = /^[0-9]{10}$/; // Adjust phone number pattern as needed

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-xl">
        <main>
          <section className="form-container">
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
                  name="nom"
                  placeholder="Votre nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="prenom"
                  className="block text-lg font-medium text-gray-700"
                >
                  Prénom :
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  placeholder="Votre prénom"
                  value={formData.prenom}
                  onChange={handleChange}
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
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="telephone"
                  className="block text-lg font-medium text-gray-700"
                >
                  Téléphone :
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  placeholder="Ex: 06 12 34 56"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="formation"
                  className="block text-lg font-medium text-gray-700"
                >
                  Formation souhaitée :
                </label>
                <select
                  id="formation"
                  name="formation"
                  value={formData.formation}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Sélectionnez une formation</option>
                  <option value="dev_web">Développement Web</option>
                  <option value="reseaux">Réseaux et Sécurité</option>
                  <option value="marketing">Marketing Digital</option>
                </select>
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
