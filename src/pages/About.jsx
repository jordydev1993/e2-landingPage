import React from "react";

const About = () => {
  return (
    <div className="p-8 xl:p-20">
      <section className="mb-8">
        <h1 className="text-[40px] font-black">Sobre Nosotros</h1>
        <p className="text-xl text-gray-500">
          Somos una empresa dedicada a crear productos digitales de alta calidad, ayudando a nuestros clientes a alcanzar sus objetivos de negocio con soluciones intuitivas y efectivas.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-[32px] font-bold">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/team/team-member-1.jpg"
              alt="Miembro del equipo 1"
              className="w-32 h-32 object-cover rounded-full"
            />
            <h3 className="text-[20px] font-semibold mt-4">María Pérez</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/team/team-member-2.jpg"
              alt="Miembro del equipo 2"
              className="w-32 h-32 object-cover rounded-full"
            />
            <h3 className="text-[20px] font-semibold mt-4">Juan López</h3>
            <p className="text-gray-500">CTO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/team/team-member-3.jpg"
              alt="Miembro del equipo 3"
              className="w-32 h-32 object-cover rounded-full"
            />
            <h3 className="text-[20px] font-semibold mt-4">Ana García</h3>
            <p className="text-gray-500">CFO</p>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-[32px] font-bold">Nuestra Historia</h2>
        <p className="text-xl text-gray-500 mt-4">
          Fundada en 2010, nuestra empresa ha crecido de un pequeño equipo de entusiastas de la tecnología a una organización internacional con más de 120 empleados. A lo largo de los años, hemos trabajado en proyectos desafiantes y hemos dejado una marca en la industria con nuestras innovadoras soluciones.
        </p>
      </section>
      
      <section>
        <h2 className="text-[32px] font-bold">Nuestra Misión</h2>
        <p className="text-xl text-gray-500 mt-4">
          Nuestra misión es proporcionar soluciones tecnológicas de vanguardia que ayuden a las empresas a alcanzar sus objetivos de manera eficiente y efectiva. Nos comprometemos a la excelencia y la innovación en cada proyecto que emprendemos.
        </p>
      </section>
    </div>
  );
};

export default About;
