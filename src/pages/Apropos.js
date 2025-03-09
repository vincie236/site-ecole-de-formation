import React from "react";
import { Link } from "react-router-dom"; // Importez Link pour la navigation
import BackgroundVideo from "../assets/videos/Accueil2.mp4";

// Importation des images
import temoignageAlice from "../assets/images/formations/temoignage-alice.jpg";
import temoignageBob from "../assets/images/formations/temoignage-bob.jpg";
import temoignageJean from "../assets/images/formations/temoignage-jean.jpg";

const APropos = () => {
  return (
    <div>
      {/* Header avec arriere plan en video */}
      <header className="relative w-full overflow-hidden h-96">
        <video
          className="absolute top-0 left-0 object-cover w-full h-full"
          src={BackgroundVideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">A propos de nous</h1>
        </div>
      </header>
      {/* fin header */}

      <div className="text-gray-900 bg-gray-50">
        {/* Section À propos */}
        <section className="px-6 py-16 mx-auto max-w-7xl">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            Qui sommes-nous ?
          </h2>
          <p className="mb-4 text-lg sm:text-xl">
            Notre école de formation est dédiée à fournir un enseignement de
            qualité dans plusieurs domaines professionnels. Nous croyons
            fermement que la connaissance et l&apos;acquisition de compétences
            pratiques sont la clé pour réussir dans le monde moderne.
          </p>

          {/* Conteneur pour centrer le bouton */}
          <div className="flex justify-center">
            <Link
              to="/formations" // Remplacez par le chemin de votre page Formations
              className="px-6 py-2 text-lg font-semibold text-white transition duration-300 bg-blue-700 rounded-lg hover:bg-blue-800"
            >
              Nos formations
            </Link>
          </div>

          {/* Ajout d'un espace avant le second paragraphe */}
          <p className="mt-6 text-lg sm:text-xl">
            Nous mettons tout en œuvre pour offrir une formation qui répond aux
            exigences du marché de l&apos;emploi et qui prépare nos étudiants à
            relever les défis du futur. Que vous soyez un étudiant, un
            professionnel ou une personne cherchant à se perfectionner, nous
            avons la formation qu&apos;il vous faut.
          </p>
        </section>

        {/* Section Notre équipe */}
        <section className="px-6 py-16 bg-gray-100">
          <h2 className="mb-6 text-2xl font-semibold text-center sm:text-3xl">
            Notre équipe
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Membre 1 */}
            <div className="p-6 text-center transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Membre de l'équipe"
                className="w-32 h-32 mb-4 rounded-full es-auto"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold">Joseph MBOUNDJI</h3>
              <p>Directeur de la formation</p>
            </div>
            {/* Membre 2 */}
            <div className="p-6 text-center transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <img
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="Membre de l'équipe"
                className="w-32 h-32 mx-auto mb-4 rounded-full"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold">Marie LOUPANGOU</h3>
              <p>Responsable pédagogique</p>
            </div>
            {/* Membre 3 */}
            <div className="p-6 text-center transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="Membre de l'équipe"
                className="w-32 h-32 mx-auto mb-4 rounded-full"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold">Jolly KETA</h3>
              <p>Formateur en développement informatique</p>
            </div>
          </div>
        </section>

        {/* Section Mission */}
        <section className="px-6 py-16 mx-auto max-w-7xl">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            Notre mission
          </h2>
          <p className="mb-4 text-lg sm:text-xl">
            Notre mission est de former les professionnels de demain en leur
            offrant un apprentissage pratique et adapté aux besoins du marché.
            Nous croyons que l&apos;éducation ne doit pas seulement être
            théorique, mais qu&apos;elle doit aussi préparer les étudiants à
            appliquer leurs connaissances dans des situations réelles.
          </p>
          <p className="text-lg sm:text-xl">
            Nous accompagnons chaque étudiant dans sa réussite en offrant un
            soutien personnalisé tout au long de leur parcours. Que vous soyez
            intéressé par la gestion, le développement informatique ou toute
            autre compétence clé, nous avons les ressources et l&apos;expertise
            pour vous aider à atteindre vos objectifs.
          </p>
        </section>

        {/* Section Nos valeurs */}
        <section className="relative px-6 py-16 overflow-hidden bg-gray-100">
          <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm"></div>
          <h2 className="relative z-10 mb-6 text-2xl font-semibold text-center sm:text-3xl">
            Nos valeurs
          </h2>
          <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Carte 1 : Excellence académique */}
            <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg bg-opacity-90 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-center text-blue-700">
                Excellence académique
              </h3>
              <p className="mt-2 text-center text-gray-700">
                Nous visons l&apos;excellence dans tous les aspects de
                l&apos;enseignement et de l&apos;apprentissage.
              </p>
            </div>

            {/* Carte 2 : Engagement et professionnalisme */}
            <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg bg-opacity-90 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-center text-blue-700">
                Engagement et professionnalisme
              </h3>
              <p className="mt-2 text-center text-gray-700">
                Nous nous engageons à fournir un environnement professionnel et
                respectueux pour tous.
              </p>
            </div>

            {/* Carte 3 : Innovation et curiosité */}
            <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg bg-opacity-90 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-center text-blue-700">
                Innovation et curiosité
              </h3>
              <p className="mt-2 text-center text-gray-700">
                Nous encourageons l&apos;innovation et la curiosité pour
                stimuler la créativité et la résolution de problèmes.
              </p>
            </div>

            {/* Carte 4 : Responsabilité et éthique */}
            <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg bg-opacity-90 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-center text-blue-700">
                Responsabilité et éthique
              </h3>
              <p className="mt-2 text-center text-gray-700">
                Nous agissons avec intégrité et responsabilité dans toutes nos
                actions.
              </p>
            </div>
          </div>
        </section>

        {/* Section Pourquoi nous choisir ? */}
        <section className="px-6 py-16 mx-auto max-w-7xl">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-lg sm:text-xl">
            Notre école se distingue par son approche pédagogique innovante et
            son équipe dédiée à la réussite de chaque étudiant. Nous offrons des
            formations sur mesure, adaptées à vos besoins et au rythme de votre
            apprentissage. De plus, nous mettons un point d&apos;honneur à
            accompagner chaque étudiant dans sa réussite grâce à un suivi
            personnalisé.
          </p>
        </section>

        {/* Section Témoignages */}
        <section className="relative px-6 py-16 overflow-hidden bg-gray-100">
          <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm"></div>
          <h2 className="relative z-10 mb-6 text-2xl font-semibold text-center sm:text-3xl">
            Témoignages
          </h2>
          <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Témoignage 1 */}
            <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg bg-opacity-90 hover:shadow-xl">
              <blockquote className="text-gray-700">
                "Grâce à cette formation, j'ai pu décrocher un emploi dans le
                domaine du développement web. Les cours sont très pratiques et
                adaptés aux besoins du marché."
              </blockquote>
              <p className="mt-4 font-semibold text-center">
                — Jean, Développeur Web
              </p>
              <img
                src={temoignageJean}
                alt="Jean, développeur Web"
                className="w-32 h-32 mx-auto mb-4 rounded-full"
              />
            </div>

            {/* Témoignage 2 */}
            <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg bg-opacity-90 hover:shadow-xl">
              <blockquote className="text-gray-700">
                "La formation en gestion m'a permis de monter en compétences et
                de prendre des responsabilités dans mon entreprise."
              </blockquote>
              <p className="mt-4 font-semibold text-center">
                — Alice, Chef de projet
              </p>
              <img
                src={temoignageAlice}
                alt="Alice, Chef de projet"
                className="w-32 h-32 mx-auto mb-4 rounded-full"
              />
            </div>

            {/* Témoignage 3 */}
            <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg bg-opacity-90 hover:shadow-xl">
              <blockquote className="text-gray-700">
                "Les formateurs sont très compétents et à l'écoute. Je
                recommande cette école à tous ceux qui veulent se reconvertir."
              </blockquote>
              <p className="mt-4 font-semibold text-center">— Bob, Étudiant</p>
              <img
                src={temoignageBob}
                alt="Bob, Étudiant"
                className="w-32 h-32 mx-auto mb-4 rounded-full"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default APropos;
