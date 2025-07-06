import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          <span className="text-red-500 bg-red-50 px-3 py-1 rounded-lg">Contáctanos</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-red-500 mb-4 flex justify-center">
              <Phone size={48} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Teléfono</h3>
            <p className="text-gray-600">+123-456-7890</p>
            <p className="text-gray-600">+111-222-3333</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-red-500 mb-4 flex justify-center">
              <Mail size={48} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Email</h3>
            <p className="text-gray-600">info@mcconstruccion.com</p>
            <p className="text-gray-600">contacto@mcconstruccion.com</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-red-500 mb-4 flex justify-center">
              <MapPin size={48} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Dirección</h3>
            <p className="text-gray-600">Buenos Aires, Argentina</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Asunto"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <textarea
                placeholder="Mensaje"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
              />
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
            
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52562.39445933249!2d-58.445!3d-34.6118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzQyLjUiUyA1OMKwMjYnNDIuMCJX!5e0!3m2!1ses!2sar!4v1635000000000!5m2!1ses!2sar"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;