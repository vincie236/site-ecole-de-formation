import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  // Utilisation du hook useState pour gérer l'état d'ouverture du menu
  const [isOpen, setIsOpen] = useState(false);
  // Utilisation du hook useLocation pour obtenir l'emplacement actuel
  const location = useLocation();

  return (
    <nav className="relative z-50 p-4 text-white bg-gray-800">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo */}
        <h1 className="text-2xl font-bold">École de Formation</h1>

        {/* Menu Burger (Mobile) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {/* Affiche l'icône X si le menu est ouvert, sinon affiche l'icône Menu */}
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-6 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden md:flex"
          }`} // Affiche le menu si isOpen est vrai, sinon le cache
        >
          {/* Boucle sur les chemins de navigation pour créer les liens du menu */}
          {["/", "/inscription", "/formations", "/apropos", "/contact"].map(
            (path, index) => {
              // Labels correspondants aux chemins de navigation
              const labels = [
                "Accueil",
                "Inscription",
                "Formations",
                "À Propos",
                "Contact",
              ];
              return (
                <li key={index}>
                  {" "}
                  {/* Clé unique pour chaque élément de la liste */}
                  <Link
                    to={path}
                    className={`block md:inline transition duration-300 hover:text-gray-400 ${
                      // Ajoute une classe spéciale si le chemin actuel correspond au chemin du lien
                      location.pathname === path ? "text-blue-500" : ""
                    }`}
                    // Ferme le menu après avoir cliqué sur un lien
                    onClick={() => setIsOpen(false)}
                  >
                    {labels[index]} {/* Affiche le label correspondant */}
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
