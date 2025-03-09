import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Composants importés
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Importez ScrollToTopButton
//import ThemeToggle from "./components/ThemeToggle";

// Chargement paresseux des pages
const Accueil = lazy(() => import("./pages/Accueil"));
const Apropos = lazy(() => import("./pages/Apropos"));
const Contact = lazy(() => import("./pages/Contact"));
const Inscription = lazy(() => import("./pages/Inscription"));
const Formations = lazy(() => import("./pages/formations/Formations"));
const Informatique = lazy(() => import("./pages/formations/Informatique"));
const Gestion = lazy(() => import("./pages/formations/Gestion"));
const Commerce = lazy(() => import("./pages/formations/Commerce"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      {/* Navbar : visible sur toutes les pages */}
      <Navbar />

      {/* Bouton de bascule du mode sombre
      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div> */}

      <main>
        {/* Suspense pour le chargement paresseux des pages */}
        <Suspense
          fallback={<div className="py-6 text-center">Chargement...</div>}
        >
          <Routes>
            {/* Page d'accueil */}
            <Route
              path="/"
              element={
                <PageTransition>
                  <Accueil />
                </PageTransition>
              }
            />

            {/* Pages principales */}
            <Route
              path="/inscription"
              element={
                <PageTransition>
                  <Inscription />
                </PageTransition>
              }
            />
            <Route
              path="/apropos"
              element={
                <PageTransition>
                  <Apropos />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />

            {/* Page Formations avec sous-onglets */}
            <Route
              path="/formations"
              element={
                <PageTransition>
                  <Formations />
                </PageTransition>
              }
            >
              <Route path="informatique" element={<Informatique />} />
              <Route path="gestion" element={<Gestion />} />
              <Route path="commerce" element={<Commerce />} />
            </Route>

            {/* Page d'erreur 404 pour les routes non définies */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer : visible sur toutes les pages */}
      <Footer />

      {/* Bouton "Retour en haut" */}
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
