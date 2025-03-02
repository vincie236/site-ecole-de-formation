import React from "react";

const APropos = () => {
  return (
    <div className="text-gray-900 bg-gray-50">
      {/* Titre de la page */}
      <header className="py-16 text-center text-white bg-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold">
          À propos de notre école de formation
        </h1>
      </header>

      {/* Section À propos */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold">
          Qui sommes-nous ?
        </h2>
        <p className="mb-4 text-lg sm:text-xl">
          Notre école de formation est dédiée à fournir un enseignement de
          qualité dans plusieurs domaines professionnels. Nous croyons fermement
          que la connaissance et l&apos;acquisition de compétences pratiques
          sont la clé pour réussir dans le monde moderne.
        </p>
        <p className="text-lg sm:text-xl">
          Nous mettons tout en œuvre pour offrir une formation qui répond aux
          exigences du marché de l&apos;emploi et qui prépare nos étudiants à
          relever les défis du futur. Que vous soyez un étudiant, un
          professionnel ou une personne cherchant à se perfectionner, nous avons
          la formation qu&apos;il vous faut.
        </p>
      </section>

      {/* Section Notre équipe */}
      <section className="px-6 py-16 bg-gray-100">
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-center">
          Notre équipe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Membre 1 */}
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Membre de l'équipe"
              className="w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold">Joseph MBOUNDJI</h3>
            <p>Directeur de la formation</p>
          </div>
          {/* Membre 2 */}
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Membre de l'équipe"
              className="w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold">Marie LOUPANGOU</h3>
            <p>Responsable pédagogique</p>
          </div>
          {/* Membre 3 */}
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Membre de l'équipe"
              className="w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold">Jolly KETA</h3>
            <p>Formateur en développement informatique</p>
          </div>
        </div>
      </section>

      {/* Section Mission */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold">
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
          intéressé par la gestion, le développement informatique ou toute autre
          compétence clé, nous avons les ressources et l&apos;expertise pour
          vous aider à atteindre vos objectifs.
        </p>
      </section>

      {/* Section Nos valeurs */}
      <section className="px-6 py-16 bg-gray-100">
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-center">
          Nos valeurs
        </h2>
        <ul className="text-lg sm:text-xl list-disc list-inside space-y-2">
          <li>Excellence académique</li>
          <li>Engagement et professionnalisme</li>
          <li>Innovation et curiosité</li>
          <li>Responsabilité et éthique</li>
        </ul>
      </section>

      {/* Section Pourquoi nous choisir ? */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold">
          Pourquoi nous choisir ?
        </h2>
        <p className="text-lg sm:text-xl">
          Notre école se distingue par son approche pédagogique innovante et son
          équipe dédiée à la réussite de chaque étudiant. Nous offrons des
          formations sur mesure, adaptées à vos besoins et au rythme de votre
          apprentissage. De plus, nous mettons un point d&apos;honneur à
          accompagner chaque étudiant dans sa réussite grâce à un suivi
          personnalisé.
        </p>
      </section>
    </div>
  );
};

export default APropos;
