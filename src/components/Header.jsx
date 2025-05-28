import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full bg-gradient-to-b from-black to-blue-900 px-4 py-7 text-xl font-black">
      
      {/* Menú para computadoras/tablets */}
      <nav className="hidden md:flex text-white items-center w-full justify-evenly">
        <a href="#quienes-somos" className="hover:text-blue-400 transition duration-300">
          Quienes somos
        </a>
        <a href="#productos" className="hover:text-blue-400 transition duration-300">
          Productos
        </a>

        {/* Logo central */}
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

      {/* Menú móvil */}
      <div className="md:hidden flex justify-between items-center relative z-20">
        <a href="/" rel="noopener noreferrer">
          <img src="/public/LogoO&O_solo_transparent.png" alt="Logo Studio" className="h-14 w-14 object-contain"/>
        </a>

        <button
          className="text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menú flotante en móviles */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-900 text-white text-lg flex flex-col divide-y divide-white shadow-lg z-10 md:hidden">
          <a href="#quienes-somos" className="py-3 px-6 text-center hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Quienes somos</a>
          <a href="#productos" className="py-3 px-6 text-center hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Productos</a>
          <a href="#agendar-cita" className="py-3 px-6 text-center hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Agendar cita</a>
          <a href="#ubicacion" className="py-3 px-6 text-center hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Ubicación</a>
        </div>
      )}
    </header>
  );
}

export default Header;
