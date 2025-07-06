import React from 'react';
import { Home, Wrench, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Home size={48} />,
      title: 'Servicio Integral',
      description: 'Transformamos espacios de principio a fin: demolemos lo viejo, construimos lo nuevo y diseñamos el interior perfecto.'
    },
    {
      icon: <Wrench size={48} />,
      title: 'Fundamental',
      description: 'Complementamos tu diseño profesional, construcción de calidad e interiorismo.'
    },
    {
      icon: <Users size={48} />,
      title: 'Cliente Satisfecho',
      description: 'Seguimiento profesional, supervisión constante. Tu proyecto terminado exactamente como lo imaginaste siempre.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Por Qué <span className="text-red-500 bg-red-50 px-3 py-1 rounded-lg">Elegirnos</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-red-500 mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;