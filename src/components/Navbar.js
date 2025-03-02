import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 text-white bg-gray-800">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo */}
        <h1 className="text-2xl font-bold">École de Formation</h1>

        {/* Menu Burger (Mobile) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:flex space-y-4 md:space-y-0 md:space-x-6 p-6 md:p-0 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"
          }`}
        >
          <li>
            <Link
              to="/"
              className="block md:inline transition duration-300 hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/inscription"
              className="block md:inline transition duration-300 hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Inscription
            </Link>
          </li>
          <li>
            <Link
              to="/apropos"
              className="block md:inline transition duration-300 hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              À Propos
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block md:inline transition duration-300 hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
