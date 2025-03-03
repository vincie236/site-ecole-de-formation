import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-6 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          {["/", "/inscription", "/apropos", "/contact"].map((path, index) => {
            const labels = ["Accueil", "Inscription", "À Propos", "Contact"];
            return (
              <li key={index}>
                <Link
                  to={path}
                  className={`block md:inline transition duration-300 hover:text-gray-400 ${
                    location.pathname === path ? "text-blue-500" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {labels[index]}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
