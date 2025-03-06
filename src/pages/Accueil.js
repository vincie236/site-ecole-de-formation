import { motion } from "framer-motion";
import React from "react";
import { FaBusinessTime, FaLaptopCode, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import BackgroundVideo from "../assets/videos/Accueil.mp4";

function Accueil() {
  // Paramètres du carrousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="text-gray-900 bg-gray-50">
      {/* Header avec vidéo en arrière-plan */}
      <motion.header
        className="relative flex items-center justify-center h-screen overflow-hidden text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Vidéo en arrière-plan */}
        <video
          className="absolute top-0 left-0 object-cover w-full h-full"
          src={BackgroundVideo}
          autoPlay
          loop
          muted
        />
        {/* Overlay sombre pour améliorer la lisibilité du texte */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Contenu superposé (texte et bouton) */}
        <div className="relative z-20 px-4">
          <h1 className="mb-4 text-4xl font-bold sm:text-6xl">
            Bienvenue dans notre école de formation !
          </h1>
          <p className="max-w-2xl mx-auto mb-6 text-lg sm:text-xl">
            Nous vous offrant une éducation de qualité pour un avenir
            prometteur.
          </p>
          <Link to="/inscription">
            <button className="px-6 py-2 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-500">
              Commencer maintenant
            </button>
          </Link>
        </div>
      </motion.header>

      {/* À propos */}
      <section className="px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-semibold">À propos de nous</h2>
        <p className="mb-4 text-lg">
          Nous vous offrons une éducation de qualité adaptée aux exigences du
          marché.
        </p>
        <p className="text-lg">
          Nos formations sont conçues pour répondre aux besoins des étudiants et
          des professionnels.
        </p>
      </section>

      {/* Nos spécialités */}
      <section className="px-6 py-16 bg-gray-100">
        <h2 className="mb-6 text-3xl font-semibold text-center">
          Nos spécialités
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <FaLaptopCode className="mx-auto mb-2 text-4xl text-blue-600" />
            <Link to="/formations/informatique">
              <h3 className="mb-2 text-xl font-semibold">Informatique</h3>
              <p>
                Apprenez les compétences techniques essentielles pour exceller
                dans le domaine du numérique, du développement logiciel à
                l'administration des systèmes et réseaux. Vous serez formé pour
                résoudre des problèmes complexes et innover dans des projets
                technologiques.
              </p>
            </Link>
          </div>
          <div className="text-center">
            <FaBusinessTime className="mx-auto mb-2 text-4xl text-green-600" />
            <Link to="/formations/gestion">
              <h3 className="mb-2 text-xl font-semibold">Gestion</h3>
              <p>
                Développez vos compétences en gestion d'entreprise, stratégie,
                et leadership. Nos formations couvrent la gestion de projet, les
                finances, et le management, vous préparant à diriger des équipes
                et à prendre des décisions stratégiques dans un environnement
                professionnel dynamique.
              </p>
            </Link>
          </div>
          <div className="text-center">
            <FaShoppingCart className="mx-auto mb-2 text-4xl text-red-600" />
            <Link to="/formations/commerce">
              <h3 className="mb-2 text-xl font-semibold">Commerce</h3>
              <p>
                Maîtrisez les stratégies de vente, de marketing et de gestion
                des produits pour exceller dans le secteur du commerce. Apprenez
                à analyser le marché, gérer les relations client, et concevoir
                des stratégies efficaces pour stimuler la croissance des
                entreprises.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Événements */}
      <section className="px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-semibold">Événements à venir</h2>
        <Slider {...settings}>
          <div className="grid place-items-center">
            <img
              src="/images/sport.jpg"
              alt="Journée Sportive"
              className="object-cover w-full h-64 mb-4"
            />
            <h3 className="text-xl font-semibold">Journée Sportive</h3>
            <p className="text-lg">
              Participez à notre journée sportive pour promouvoir la santé et la
              cohésion entre étudiants.
            </p>
          </div>
          <div className="grid place-items-center">
            <img
              src="/images/women_day.jpg"
              alt="Célébration du 8 mars"
              className="object-cover w-full h-64 mb-4"
            />
            <h3 className="text-xl font-semibold">Célébration du 8 mars</h3>
            <p className="text-lg">
              Venez célébrer la Journée Internationale de la Femme avec des
              conférences et des discussions enrichissantes.
            </p>
          </div>
          <div className="grid place-items-center">
            <img
              src="/images/tech.jpg"
              alt="La femme au cœur de la technologie"
              className="object-cover w-full h-64 mb-4"
            />
            <h3 className="text-xl font-semibold">
              La femme au cœur de la technologie
            </h3>
            <p className="text-lg">
              Un événement qui met en lumière les femmes pionnières dans le
              domaine de la technologie.
            </p>
          </div>
          <div className="grid place-items-center">
            <img
              src="/images/hackaton.jpg"
              alt="Hackathon étudiant"
              className="object-cover w-full h-64 mb-4"
            />
            <h3 className="text-xl font-semibold">Hackathon étudiant</h3>
            <p className="text-lg">
              Participez à notre hackathon pour résoudre des défis
              technologiques et montrer vos compétences en développement
              logiciel. Un concours stimulant pour les passionnés de
              technologie.
            </p>
          </div>
          <div className="grid place-items-center">
            <img
              src="/images/conference.jpg"
              alt="Conférence sur l'entrepreneuriat"
              className="object-cover w-full h-64 mb-4"
            />
            <h3 className="text-xl font-semibold">
              Conférence sur l'entrepreneuriat
            </h3>
            <p className="text-lg">
              Rejoignez-nous pour une conférence inspirante avec des
              entrepreneurs à succès qui partageront leurs secrets pour réussir
              dans le monde des affaires.
            </p>
          </div>
        </Slider>
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

export default Accueil;
