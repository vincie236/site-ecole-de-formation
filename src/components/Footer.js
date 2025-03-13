import {
  BookOpen,
  Facebook,
  Home,
  Info,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  UserPlus,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-10 text-white bg-gray-800 dark:bg-gray-900">
      <div className="container px-6 mx-auto md:px-12 lg:px-16">
        <div className="grid gap-8 text-center sm:grid-cols-2 md:grid-cols-3 md:text-left">
          {/* Liens utiles */}
          <div>
            <h3 className="pb-2 mb-4 text-lg font-semibold border-b border-gray-700">
              Liens utiles
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="flex items-center transition hover:text-gray-400"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/inscription"
                  className="flex items-center transition hover:text-gray-400"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Inscription
                </Link>
              </li>
              <li>
                <Link
                  to="/formations"
                  className="flex items-center transition hover:text-gray-400"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Formations
                </Link>
              </li>
              <li>
                <Link
                  to="/apropos"
                  className="flex items-center transition hover:text-gray-400"
                >
                  <Info className="w-5 h-5 mr-2" />À Propos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center transition hover:text-gray-400"
                >
                  <Mail className="w-5 h-5 mr-2" />
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
            <div className="space-y-2">
              <p className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                Adresse: 15 Rue Hinda Diata
              </p>
              <p className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                Email: contact@gmail.com
              </p>
              <p className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2" />
                Téléphone: +242 06 123 4567
              </p>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="pb-2 mb-4 text-lg font-semibold border-b border-gray-700">
              Suivez-nous
            </h3>
            <div className="flex justify-center space-x-6 md:justify-start">
              <a
                href="https://facebook.com"
                className="flex items-center transition hover:text-blue-500"
              >
                <Facebook className="w-5 h-5 mr-2" />
                Facebook
              </a>
              <a
                href="https://twitter.com"
                className="flex items-center transition hover:text-blue-400"
              >
                <Twitter className="w-5 h-5 mr-2" />
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                className="flex items-center transition hover:text-blue-300"
              >
                <Linkedin className="w-5 h-5 mr-2" />
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
