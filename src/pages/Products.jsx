<<<<<<< HEAD
import React from "react";

const Products = () => {
  return (
    <div className="p-8 xl:p-20">
      <section className="mb-8">
        <h1 className="text-[40px] font-black">Nuestros Productos</h1>
        <p className="text-xl text-gray-500">
          Descubre nuestra gama de productos diseñados para satisfacer todas tus necesidades. Desde soluciones tecnológicas hasta productos innovadores, tenemos todo lo que necesitas.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-[32px] font-bold">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/products/product-1.jpg"
              alt="Producto 1"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-[20px] font-semibold mt-4">Producto 1</h3>
            <p className="text-gray-500">Descripción breve del producto 1, destacando sus características principales y beneficios.</p>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-full">Más Información</button>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/products/product-2.jpg"
              alt="Producto 2"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-[20px] font-semibold mt-4">Producto 2</h3>
            <p className="text-gray-500">Descripción breve del producto 2, destacando sus características principales y beneficios.</p>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-full">Más Información</button>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/products/product-3.jpg"
              alt="Producto 3"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-[20px] font-semibold mt-4">Producto 3</h3>
            <p className="text-gray-500">Descripción breve del producto 3, destacando sus características principales y beneficios.</p>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-full">Más Información</button>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-[32px] font-bold">Categorías de Productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
          <div className="flex flex-col items-center">
            <h3 className="text-[20px] font-semibold mt-4">Categoría 1</h3>
            <p className="text-gray-500">Descripción breve de la categoría 1 y los tipos de productos que incluye.</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-[20px] font-semibold mt-4">Categoría 2</h3>
            <p className="text-gray-500">Descripción breve de la categoría 2 y los tipos de productos que incluye.</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-[20px] font-semibold mt-4">Categoría 3</h3>
            <p className="text-gray-500">Descripción breve de la categoría 3 y los tipos de productos que incluye.</p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-[32px] font-bold">Nuestras Ventajas</h2>
        <p className="text-xl text-gray-500 mt-4">
          Nos comprometemos a ofrecer productos de alta calidad, diseñados para satisfacer las necesidades de nuestros clientes. Con una amplia gama de opciones y un enfoque en la innovación, garantizamos la satisfacción en cada compra.
        </p>
      </section>
    </div>
  );
};

export default Products;
=======
// src/pages/Products.jsx
import React from 'react';

const Products = () => {
  return (
    <section className="min-h-[90vh] p-8">
      <h1 className="text-4xl font-bold">Productos</h1>
      <p className="text-xl text-gray-500 mt-4">
        Lista de productos que ofrecemos.
      </p>
    </section>
  );
};

export default Products;
>>>>>>> 85c60de07607060d06e6755924203e37dcb36ed0
