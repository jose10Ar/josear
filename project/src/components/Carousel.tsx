import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Carousel: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Construcción Residencial',
      description: 'Casas modernas con los mejores materiales'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Remodelación de Cocinas',
      description: 'Espacios funcionales y elegantes'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Diseño de Baños',
      description: 'Baños modernos y funcionales'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Construcción Comercial',
      description: 'Oficinas y espacios comerciales'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Jardines y Exteriores',
      description: 'Paisajismo y diseño de exteriores'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Interiorismo Completo',
      description: 'Diseño interior personalizado'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Nuestros <span className="text-red-500 bg-red-50 px-3 py-1 rounded-lg">Proyectos</span>
        </h2>
        
        <div className="relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="min-w-full h-96 md:h-[600px] relative bg-cover bg-center flex items-center justify-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="relative z-10 text-center text-white px-6">
                    <h3 className="text-2xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                      {slide.title}
                    </h3>
                    <p className="text-lg md:text-xl drop-shadow-md">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-red-500 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-red-500 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-red-500 scale-125' 
                      : 'bg-white bg-opacity-50 hover:bg-opacity-80'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Info Section */}
          <div className="mt-12 text-center">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">
              Proyectos de Construcción y Remodelación
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Desde demoliciones hasta construcciones completas e interiorismo. Cada proyecto refleja 
              nuestro compromiso con la calidad y la satisfacción del cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;