
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="p-8 xl:p-20">
      <section className="mb-8">
        <h1 className="text-[40px] font-black">Contáctanos</h1>
        <p className="text-xl text-gray-500">
          Estamos aquí para ayudarte. Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-[32px] font-bold">Información de Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
          <div className="flex items-center">
            <FaPhoneAlt className="text-3xl p-2 bg-secondary text-primary box-content rounded-xl" />
            <div>
              <h3 className="text-[20px] font-semibold">Teléfono</h3>
              <p className="text-gray-500">+54 123 456 789</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-3xl p-2 bg-secondary text-primary box-content rounded-xl" />
            <div>
              <h3 className="text-[20px] font-semibold">Email</h3>
              <p className="text-gray-500">info@example.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-3xl p-2 bg-secondary text-primary box-content rounded-xl" />
            <div>
              <h3 className="text-[20px] font-semibold">Dirección</h3>
              <p className="text-gray-500">Av. Siempre Viva 123, Córdoba, Argentina</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-[32px] font-bold">Envíanos un Mensaje</h2>
        <form className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700">Nombre</label>
              <input type="text" className="w-full mt-2 p-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full mt-2 p-2 border rounded-lg" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Mensaje</label>
            <textarea className="w-full mt-2 p-2 border rounded-lg h-32"></textarea>
          </div>
          <button className="mt-4 px-4 py-2 bg-primary text-white rounded-full">Enviar</button>
        </form>
      </section>
      
      <section>
        <h2 className="text-[32px] font-bold">Nuestra Ubicación</h2>
        <div className="mt-4">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509647!2d144.9537353155046!3d-37.81627944202139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a36a0641bda2!2sAv.%20Siempre%20Viva%20123%2C%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses-419!2sar!4v1651180201746!5m2!1ses-419!2sar"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="border rounded-lg"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;

