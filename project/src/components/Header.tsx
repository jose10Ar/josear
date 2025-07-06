import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-gray-800">
          <span className="text-red-500">MC </span>Construcción
        </a>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
            Home
          </a>
          <a href="#featured" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
            Quienes Somos
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
            Portfolio
          </a>
          <a href="#contact" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
            Contacto
          </a>
        </nav>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-red-500 transition-colors duration-300"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <a href="#home" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
                Home
              </a>
              <a href="#featured" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
                Quienes Somos
              </a>
              <a href="#portfolio" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
                Portfolio
              </a>
              <a href="#contact" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
                Contacto
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;