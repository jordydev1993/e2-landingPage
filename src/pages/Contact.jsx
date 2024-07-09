// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-[90vh] p-8">
      <h1 className="text-4xl font-bold">Contacto</h1>
      <form className="mt-8">
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Nombre" className="p-4 border rounded-xl" />
          <input type="text" placeholder="Apellido" className="p-4 border rounded-xl" />
          <input type="email" placeholder="Email" className="p-4 border rounded-xl" />
          <input type="text" placeholder="Asunto" className="p-4 border rounded-xl" />
          <button type="submit" className="py-2 px-6 bg-primary text-white rounded-xl">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
