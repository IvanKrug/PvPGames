import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-pvp-azul-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src="/path-to-logo.png" alt="Logo" className="h-10" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-indigo-300">Home</Link>
          <Link to="/about" className="text-white hover:text-indigo-300">About Us</Link>
          <Link to="/contact" className="text-white hover:text-indigo-300">Contact</Link>
        </div>
        <div className="hidden md:flex">
          <Link to="/login" className="text-white hover:text-indigo-300">Iniciar Sesión</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block text-white hover:text-indigo-300 py-2">Home</Link>
          <Link to="/about" className="block text-white hover:text-indigo-300 py-2">About Us</Link>
          <Link to="/contact" className="block text-white hover:text-indigo-300 py-2">Contact</Link>
          <Link to="/login" className="block text-white hover:text-indigo-300 py-2">Iniciar Sesión</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
