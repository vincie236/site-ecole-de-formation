import React from "react";
import { FaChartLine, FaLaptopCode, FaShoppingCart } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import CommerceImage from "../../assets/images/formations/commerce.jpg";
import GestionImage from "../../assets/images/formations/gestion.jpg";
import InformatiqueImage from "../../assets/images/formations/informatique.jpg";

function Formations() {
  return (
    <div className="px-6 py-16 bg-gray-50">
      <h1 className="mb-6 text-4xl font-bold text-center">Nos Formations</h1>

      {/* Introduction */}
      <section className="max-w-2xl mx-auto mb-12 text-center">
        <p className="text-lg">
          Découvrez nos formations de qualité, conçues pour répondre aux besoins
          du marché et vous préparer à des carrières passionnantes. Choisissez
          la spécialité qui correspond à vos aspirations.
        </p>
      </section>

      {/* Cartes des Spécialités */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Carte Informatique */}
        <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
          <FaLaptopCode className="mx-auto mb-4 text-6xl text-blue-600" />
          <img
            src={InformatiqueImage}
            alt="Informatique"
            className="object-cover w-full h-48 mb-4 rounded-lg"
          />
          <h2 className="mb-4 text-2xl font-semibold text-center">
            Informatique
          </h2>
          <p className="mb-4 text-gray-700">
            Maîtrisez les technologies de pointe et devenez un expert en
            développement, réseaux, cybersécurité et intelligence artificielle.
          </p>
          <Link
            to="/formations/informatique"
            className="block w-full px-4 py-2 text-center text-white transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-blue-500"
          >
            En savoir plus
          </Link>
        </div>

        {/* Carte Gestion */}
        <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
          <FaChartLine className="mx-auto mb-4 text-6xl text-green-600" />
          <img
            src={GestionImage}
            alt="Gestion"
            className="object-cover w-full h-48 mb-4 rounded-lg"
          />
          <h2 className="mb-4 text-2xl font-semibold text-center">Gestion</h2>
          <p className="mb-4 text-gray-700">
            Développez vos compétences en management, finance et stratégie pour
            diriger des équipes et prendre des décisions éclairées.
          </p>
          <Link
            to="/formations/gestion"
            className="block w-full px-4 py-2 text-center text-white transition-colors duration-300 bg-green-600 rounded-lg hover:bg-green-500"
          >
            En savoir plus
          </Link>
        </div>

        {/* Carte Commerce */}
        <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
          <FaShoppingCart className="mx-auto mb-4 text-6xl text-red-600" />
          <img
            src={CommerceImage}
            alt="Commerce"
            className="object-cover w-full h-48 mb-4 rounded-lg"
          />
          <h2 className="mb-4 text-2xl font-semibold text-center">Commerce</h2>
          <p className="mb-4 text-gray-700">
            Apprenez les stratégies de vente, de marketing et de gestion des
            produits pour exceller dans le secteur du commerce.
          </p>
          <Link
            to="/formations/commerce"
            className="block w-full px-4 py-2 text-center text-white transition-colors duration-300 bg-red-600 rounded-lg hover:bg-red-500"
          >
            En savoir plus
          </Link>
        </div>
      </div>

      {/* Contenu des sous-onglets */}
      <Outlet />
    </div>
  );
}

export default Formations;
