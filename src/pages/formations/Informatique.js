import React from "react";
import { FaCode, FaNetworkWired, FaRobot, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// filepath: /Users/user/Documents/GitHub/Projets-react/site-ecole-de-formation/src/pages/formations/Informatique.js
import AiImage from "../../assets/images/formations/ai.jpg";
import CybersecurityImage from "../../assets/images/formations/cybersecurity.jpg";
import DevWebImage from "../../assets/images/formations/dev-web.jpg";
import ReseauImage from "../../assets/images/formations/reseau.jpg";
import TemoignageAlice from "../../assets/images/formations/temoignage-alice.jpg";
import TemoignageBob from "../../assets/images/formations/temoignage-bob.jpg";

function Informatique() {
  return (
    <div className="px-6 py-16 bg-gray-50">
      {/* Section Introduction */}
      <section className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold">Informatique</h2>
        <p className="max-w-2xl mx-auto text-lg">
          L'informatique est au cœur de la transformation numérique. Nos
          formations vous préparent à maîtriser les technologies de pointe et à
          exceller dans des métiers passionnants et en constante évolution.
        </p>
      </section>

      {/* Section Programmes de Formation avec Disposition Alternée */}
      <section className="mb-12">
        <h3 className="mb-6 text-3xl font-semibold text-center">
          Nos Programmes
        </h3>

        {/* Programme 1 : Texte à gauche, Image à droite */}
        <div className="flex flex-col items-center mb-12 md:flex-row">
          <div className="text-center md:w-1/2 md:pr-8 md:text-left">
            <FaCode className="mx-auto mb-4 text-4xl text-blue-600 md:mx-0" />
            <h4 className="mb-4 text-2xl font-semibold">Développement Web</h4>
            <p className="text-gray-700">
              Apprenez à créer des sites web dynamiques et des applications
              modernes avec les dernières technologies (HTML, CSS, JavaScript,
              React, Node.js).
            </p>
          </div>
          <div className="mt-6 md:w-1/2 md:mt-0">
            <img
              src={DevWebImage}
              alt="Développement Web"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Programme 2 : Texte à droite, Image à gauche */}
        <div className="flex flex-col items-center mb-12 md:flex-row">
          <div className="order-2 mt-6 md:w-1/2 md:order-1 md:mt-0">
            <img
              src={ReseauImage}
              alt="Réseaux et Sécurité"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="order-1 text-center md:w-1/2 md:pl-8 md:text-left md:order-2">
            <FaNetworkWired className="mx-auto mb-4 text-4xl text-green-600 md:mx-0" />
            <h4 className="mb-4 text-2xl font-semibold">Réseaux et Sécurité</h4>
            <p className="text-gray-700">
              Maîtrisez la gestion des infrastructures réseaux et la
              sécurisation des systèmes informatiques.
            </p>
          </div>
        </div>

        {/* Programme 3 : Texte à gauche, Image à droite */}
        <div className="flex flex-col items-center mb-12 md:flex-row">
          <div className="text-center md:w-1/2 md:pr-8 md:text-left">
            <FaShieldAlt className="mx-auto mb-4 text-4xl text-red-600 md:mx-0" />
            <h4 className="mb-4 text-2xl font-semibold">Cybersécurité</h4>
            <p className="text-gray-700">
              Spécialisez-vous dans la protection des données et la lutte contre
              les cybermenaces.
            </p>
          </div>
          <div className="mt-6 md:w-1/2 md:mt-0">
            <img
              src={CybersecurityImage}
              alt="Cybersécurité"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Programme 4 : Texte à droite, Image à gauche */}
        <div className="flex flex-col items-center mb-12 md:flex-row">
          <div className="order-2 mt-6 md:w-1/2 md:order-1 md:mt-0">
            <img
              src={AiImage}
              alt="Intelligence Artificielle"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="order-1 text-center md:w-1/2 md:pl-8 md:text-left md:order-2">
            <FaRobot className="mx-auto mb-4 text-4xl text-purple-600 md:mx-0" />
            <h4 className="mb-4 text-2xl font-semibold">
              Intelligence Artificielle
            </h4>
            <p className="text-gray-700">
              Explorez les algorithmes d'IA, le machine learning et les
              applications innovantes.
            </p>
          </div>
        </div>
      </section>

      {/* Section Débouchés Professionnels */}
      <section className="mb-12">
        <h3 className="mb-6 text-3xl font-semibold text-center">
          Débouchés Professionnels
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h4 className="mb-2 text-xl font-semibold">
              Développeur Full-Stack
            </h4>
            <p className="text-gray-700">
              Conception et développement d'applications web et mobiles.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h4 className="mb-2 text-xl font-semibold">
              Administrateur Systèmes et Réseaux
            </h4>
            <p className="text-gray-700">
              Gestion et maintenance des infrastructures informatiques.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h4 className="mb-2 text-xl font-semibold">
              Expert en Cybersécurité
            </h4>
            <p className="text-gray-700">
              Protection des systèmes et données contre les cyberattaques.
            </p>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="mb-12">
        <h3 className="mb-6 text-3xl font-semibold text-center">Témoignages</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src={TemoignageAlice}
              alt="Alice"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <blockquote className="mt-4 text-gray-700">
              "Grâce à cette formation, j'ai pu décrocher un poste de
              développeur web dans une grande entreprise. Les cours sont très
              pratiques et adaptés aux besoins du marché."
            </blockquote>
            <p className="mt-4 font-semibold text-center">
              — Alice, Diplômée en Développement Web
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src={TemoignageBob}
              alt="Bob"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <blockquote className="mt-4 text-gray-700">
              "La spécialisation en cybersécurité m'a permis de travailler sur
              des projets passionnants et de contribuer à la protection des
              données sensibles."
            </blockquote>
            <p className="mt-4 font-semibold text-center">
              — Bob, Expert en Cybersécurité
            </p>
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="py-16 text-center text-white bg-gray-800">
        <h2 className="mb-4 text-3xl font-semibold">Prêt à commencer ?</h2>
        <p className="mb-6 text-lg">
          Rejoignez-nous dès aujourd&apos;hui et bénéficiez d&apos;une formation
          de qualité.
        </p>
        <Link to="/inscription">
          <button className="px-6 py-2 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-500">
            Inscrivez-vous maintenant
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Informatique;
