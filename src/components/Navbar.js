import { ChevronDown, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import ThemeToggle from "./ThemeToggle";

function Navbar() {
  // Utilisation du hook useState pour gérer l'état d'ouverture du menu
  const [isOpen, setIsOpen] = useState(false);
  // Utilisation du hook useState pour gérer l'état du menu déroulant "Formations"
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Utilisation du hook useLocation pour obtenir l'emplacement actuel
  const location = useLocation();

  return (
    <nav className="relative z-50 p-4 text-white bg-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          École de Formation
        </Link>

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
          {/* Onglets de navigation */}
          {["/", "/formations", "/apropos", "/contact"].map((path, index) => {
            // Labels correspondants aux chemins de navigation
            const labels = ["Accueil", "Formations", "À Propos", "Contact"];
            return (
              <li key={index} className="relative">
                {" "}
                {/* Clé unique pour chaque élément de la liste */}
                {path === "/formations" ? (
                  // Menu déroulant pour "Formations"
                  <div className="cursor-pointer">
                    <div className="flex items-center">
                      {/* Lien vers "Formations" */}
                      <Link
                        to={path}
                        className={`transition duration-300 hover:text-gray-400 ${
                          location.pathname === path ? "text-blue-500" : ""
                        }`}
                        onClick={() => {
                          setIsOpen(false); // Fermer le menu burger sur mobile
                          setIsDropdownOpen(false); // Fermer le menu déroulant
                        }}
                      >
                        {labels[index]}
                      </Link>
                      {/* Bouton pour ouvrir/fermer le menu déroulant */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Empêcher la propagation du clic
                          setIsDropdownOpen(!isDropdownOpen);
                        }}
                        className="focus:outline-none"
                      >
                        <ChevronDown
                          size={20}
                          className={`ml-1 transition-transform duration-300 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {/* Menu déroulant */}
                    {isDropdownOpen && (
                      <div className="absolute left-0 w-48 mt-2 bg-gray-800 rounded-lg shadow-lg animate-slideDown">
                        <Link
                          to="/inscription"
                          className="block px-4 py-3 text-sm text-white hover:bg-gray-700"
                          onClick={() => {
                            setIsOpen(false);
                            setIsDropdownOpen(false);
                          }}
                        >
                          Inscription
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  // Autres onglets
                  <Link
                    to={path}
                    className={`block md:inline transition duration-300 hover:text-gray-400 ${
                      location.pathname === path
                        ? "text-blue-500 border-b-2 border-blue-500"
                        : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {labels[index]}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        {/* * Bouton de bascule du mode sombre
        <ThemeToggle /> */}
      </div>
    </nav>
  );
}

export default Navbar;
