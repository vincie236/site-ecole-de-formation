import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-center md:text-left">
          {/* Liens utiles */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b pb-2 border-gray-700">
              Liens utiles
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-400 transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/inscription"
                  className="hover:text-gray-400 transition"
                >
                  Inscription
                </Link>
              </li>
              <li>
                <Link to="/apropos" className="hover:text-gray-400 transition">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b pb-2 border-gray-700">
              Contact
            </h3>
            <p className="text-gray-400">Adresse: 15 Rue Hinda Diata</p>
            <p className="text-gray-400">Email: contact@gmail.com</p>
            <p className="text-gray-400">Téléphone: +242 06 123 4567</p>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b pb-2 border-gray-700">
              Suivez-nous
            </h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://facebook.com"
                className="hover:text-blue-500 transition"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-blue-400 transition"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-blue-300 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; 2025 École de Formation. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;
