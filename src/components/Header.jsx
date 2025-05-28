import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Íconos de menú y cerrar

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-b from-black to-blue-900 px-4 py-7 text-xl font-black">
      
      {/* Menú en Computadoras y Tablets (Diseño Original) */}
      <nav className="hidden md:flex text-white items-center w-full justify-evenly">
        <a href="#quienes-somos" className="hover:text-blue-400 transition duration-300">
          Quienes somos
        </a>
        <a href="#productos" className="hover:text-blue-400 transition duration-300">
          Productos
        </a>

        {/* Logo en el centro */}
        <a href="/" rel="noopener noreferrer">
          <img src="/public/LogoO&O_solo_transparent.png" alt="Logo Studio" className="h-20 w-20 object-contain"/>
        </a>

        <a href="#agendar-cita" className="hover:text-blue-400 transition duration-300">
          Agendar cita
        </a>
        <a href="#ubicacion" className="hover:text-blue-400 transition duration-300">
          Ubicación
        </a>
      </nav>

      {/* Botón de menú hamburguesa en móviles */}
      <div className="md:hidden flex justify-between items-center">
        {/* Logo más pequeño en móviles */}
        <a href="/" rel="noopener noreferrer">
          <img src="/public/LogoO&O_solo_transparent.png" alt="Logo Studio" className="h-14 w-14 object-contain"/>
        </a>

        {/* Botón de menú */}
        <button
          className="text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />} {/* Cambia entre ☰ y ✖ */}
        </button>
      </div>

      {/* Menú desplegable en móviles */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-blue-900 text-lg">
          <a href="#quienes-somos" className="hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Quienes somos</a>
          <a href="#productos" className="hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Productos</a>
          <a href="#agendar-cita" className="hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Agendar cita</a>
          <a href="#ubicacion" className="hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Ubicación</a>
        </div>
      )}

    </header>
  );
}

export default Header;
