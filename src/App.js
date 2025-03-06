import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Composants importés
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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

      <main>
        {/* Suspense pour le chargement paresseux des pages */}
        <Suspense
          fallback={<div className="py-6 text-center">Chargement...</div>}
        >
          <Routes>
            {/* Page d'accueil */}
            <Route path="/" element={<Accueil />} />

            {/* Pages principales */}
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/contact" element={<Contact />} />

            {/* Page Formations avec sous-onglets */}
            <Route path="/formations" element={<Formations />}>
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
    </Router>
  );
}

export default App;
