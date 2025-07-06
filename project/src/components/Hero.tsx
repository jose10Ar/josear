import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80)'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Construimos <span className="text-red-500">Tus Sueños</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Desde demoliciones hasta construcciones completas e interiorismo. 
          Tu proyecto en manos expertas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Ver Proyectos
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            Contactar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;