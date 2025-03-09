import React from "react";
import { FaChartLine, FaShoppingCart, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import CommerceImage from "../../assets/images/formations/commerce.jpg";
import TemoignageJean from "../../assets/images/formations/temoignage-jean.jpg";
import TemoignageMarie from "../../assets/images/formations/temoignage-marie.jpg";

function Commerce() {
  return (
    <div className="px-6 py-16 bg-gray-50">
      {/* Section Introduction */}
      <section className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold">Commerce</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Le commerce est un secteur dynamique et en constante évolution. Nos
          formations vous préparent à maîtriser les stratégies de vente, de
          marketing et de gestion des produits pour exceller dans ce domaine.
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
            <FaShoppingCart className="mx-auto mb-4 text-4xl text-red-600 md:mx-0" />
            <h4 className="mb-4 text-2xl font-semibold">Marketing et Vente</h4>
            <p className="text-gray-700">
              Apprenez à concevoir des stratégies marketing efficaces et à gérer
              des campagnes de vente pour maximiser les revenus.
            </p>
          </div>
          <div className="mt-6 md:w-1/2 md:mt-0">
            <img
              src={CommerceImage}
              alt="Marketing et Vente"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Programme 2 : Texte à droite, Image à gauche */}
        <div className="flex flex-col items-center mb-12 md:flex-row">
          <div className="order-2 mt-6 md:w-1/2 md:order-1 md:mt-0">
            <img
              src={CommerceImage}
              alt="Gestion de Produits"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="order-1 text-center md:w-1/2 md:pl-8 md:text-left md:order-2">
            <FaChartLine className="mx-auto mb-4 text-4xl text-green-600 md:mx-0" />
            <h4 className="mb-4 text-2xl font-semibold">Gestion de Produits</h4>
            <p className="text-gray-700">
              Maîtrisez les techniques de gestion des produits, de la conception
              à la distribution, en passant par l'analyse de marché.
            </p>
          </div>
        </div>

        {/* Programme 3 : Texte à gauche, Image à droite */}
        <div className="flex flex-col items-center mb-12 md:flex-row">
          <div className="text-center md:w-1/2 md:pr-8 md:text-left">
            <FaUsers className="mx-auto mb-4 text-4xl text-blue-600 md:mx-0" />
            <h4 className="mb-4 text-2xl font-semibold">Relation Client</h4>
            <p className="text-gray-700">
              Développez vos compétences en gestion de la relation client pour
              fidéliser et satisfaire vos clients.
            </p>
          </div>
          <div className="mt-6 md:w-1/2 md:mt-0">
            <img
              src={CommerceImage}
              alt="Relation Client"
              className="rounded-lg shadow-md"
            />
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
              Responsable Marketing
            </h4>
            <p className="text-gray-700">
              Conception et mise en œuvre de stratégies marketing pour
              promouvoir les produits et services.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h4 className="mb-2 text-xl font-semibold">Chef de Produit</h4>
            <p className="text-gray-700">
              Gestion du cycle de vie des produits, de la conception à la
              commercialisation.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h4 className="mb-2 text-xl font-semibold">
              Responsable des Ventes
            </h4>
            <p className="text-gray-700">
              Management des équipes commerciales et développement des
              stratégies de vente.
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
              "La formation en commerce m'a permis de devenir responsable
              marketing dans une grande entreprise. Les cours sont très
              pratiques et adaptés aux besoins du marché."
            </blockquote>
            <p className="mt-4 font-semibold text-center">
              — Marie, Responsable Marketing
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src={TemoignageJean}
              alt="Jean"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <blockquote className="mt-4 text-gray-700">
              "Grâce à cette formation, j'ai pu développer des compétences en
              gestion de produits qui m'ont ouvert de nouvelles opportunités de
              carrière."
            </blockquote>
            <p className="mt-4 font-semibold text-center">
              — Jean, Chef de Produit
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

export default Commerce;
