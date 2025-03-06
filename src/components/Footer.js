import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-10 text-white bg-gray-900">
      <div className="container px-6 mx-auto md:px-12 lg:px-16">
        <div className="grid gap-8 text-center sm:grid-cols-2 md:grid-cols-3 md:text-left">
          {/* Liens utiles */}
          <div>
            <h3 className="pb-2 mb-4 text-lg font-semibold border-b border-gray-700">
              Liens utiles
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="transition hover:text-gray-400">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/inscription"
                  className="transition hover:text-gray-400"
                >
                  Inscription
                </Link>
              </li>
              <li>
                <Link
                  to="/formations"
                  className="transition hover:text-gray-400"
                >
                  Formations
                </Link>
              </li>
              <li>
                <Link to="/apropos" className="transition hover:text-gray-400">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="pb-2 mb-4 text-lg font-semibold border-b border-gray-700">
              Contact
            </h3>
            <p className="text-gray-400">Adresse: 15 Rue Hinda Diata</p>
            <p className="text-gray-400">Email: contact@gmail.com</p>
            <p className="text-gray-400">Téléphone: +242 06 123 4567</p>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="pb-2 mb-4 text-lg font-semibold border-b border-gray-700">
              Suivez-nous
            </h3>
            <div className="flex justify-center space-x-6 md:justify-start">
              <a
                href="https://facebook.com"
                className="transition hover:text-blue-500"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                className="transition hover:text-blue-400"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                className="transition hover:text-blue-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-4 mt-8 text-sm text-center text-gray-500 border-t border-gray-700">
        &copy; 2025 École de Formation. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;
