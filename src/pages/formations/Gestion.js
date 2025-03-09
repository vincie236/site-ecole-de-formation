import React from "react";
import { FaChartLine, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import GestionImage from "../../assets/images/formations/gestion.jpg";
import TemoignageJean from "../../assets/images/formations/temoignage-jean.jpg";
import TemoignageMarie from "../../assets/images/formations/temoignage-marie.jpg";

function Gestion() {
  return (
    <div className="px-6 py-16 bg-gray-50">
      {/* Section Introduction */}
      <section className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold">Gestion</h2>
        <p className="max-w-2xl mx-auto text-lg">
          La gestion est essentielle pour le succès des entreprises. Nos
          formations vous préparent à maîtriser les compétences en management,
          finance, et stratégie.
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
            <FaChartLine className="mx-auto mb-4 text-4xl text-blue-600 md:mx-0" />
            <h4 className="mb-4 text-2xl font-semibold">
              Management Stratégique
            </h4>
            <p className="text-gray-700">
              Apprenez à élaborer des stratégies efficaces pour diriger des
              équipes et atteindre les objectifs de l'entreprise.
            </p>
          </div>
          <div className="mt-6 md:w-1/2 md:mt-0">
            <img
              src={GestionImage}
              alt="Management Stratégique"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Programme 2 : Texte à droite, Image à gauche */}
        <div className="flex flex-col items-center mb-12 md:flex-row">
          <div className="order-2 mt-6 md:w-1/2 md:order-1 md:mt-0">
            <img
              src={GestionImage}
              alt="Finance d'Entreprise"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="order-1 text-center md:w-1/2 md:pl-8 md:text-left md:order-2">
            <FaUsers className="mx-auto mb-4 text-4xl text-green-600 md:mx-0" />
            <h4 className="mb-4 text-2xl font-semibold">
              Finance d'Entreprise
            </h4>
            <p className="text-gray-700">
              Maîtrisez les outils financiers pour prendre des décisions
              éclairées et optimiser la performance de l'entreprise.
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
              src={TemoignageMarie}
              alt="Marie"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <blockquote className="mt-4 text-gray-700">
              "La formation en gestion m'a permis de devenir une manager
              efficace et de contribuer au succès de mon entreprise."
            </blockquote>
            <p className="mt-4 font-semibold text-center">— Marie, Manager</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src={TemoignageJean}
              alt="Jean"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <blockquote className="mt-4 text-gray-700">
              "Grâce à cette formation, j'ai pu développer des compétences en
              finance qui m'ont ouvert de nouvelles opportunités de carrière."
            </blockquote>
            <p className="mt-4 font-semibold text-center">
              — Jean, Analyste Financier
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

export default Gestion;
