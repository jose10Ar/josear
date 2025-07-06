import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Sucursales</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-red-500 transition-colors duration-300">Argentina</a>
              <a href="#" className="block hover:text-red-500 transition-colors duration-300">Brasil</a>
              <a href="#" className="block hover:text-red-500 transition-colors duration-300">Chile</a>
              <a href="#" className="block hover:text-red-500 transition-colors duration-300">Uruguay</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <a href="#home" className="block hover:text-red-500 transition-colors duration-300">Home</a>
              <a href="#services" className="block hover:text-red-500 transition-colors duration-300">Servicios</a>
              <a href="#portfolio" className="block hover:text-red-500 transition-colors duration-300">Portfolio</a>
              <a href="#contact" className="block hover:text-red-500 transition-colors duration-300">Contacto</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Servicios</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-red-500 transition-colors duration-300">Construcción</a>
              <a href="#" className="block hover:text-red-500 transition-colors duration-300">Demolición</a>
              <a href="#" className="block hover:text-red-500 transition-colors duration-300">Interiorismo</a>
              <a href="#" className="block hover:text-red-500 transition-colors duration-300">Remodelación</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-red-500 transition-colors duration-300">Facebook</a>
              <a href="#" className="block hover:text-red-500 transition-colors duration-300">Instagram</a>
              <a href="#" className="block hover:text-red-500 transition-colors duration-300">LinkedIn</a>
              <a href="#" className="block hover:text-red-500 transition-colors duration-300">YouTube</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 <span className="text-red-500">MC Construcción</span>. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;