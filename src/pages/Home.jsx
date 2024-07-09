
// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Works from '../components/Works';
import Reviews from '../components/Reviews';
import Services from '../components/Services';

const Home = () => {
  return (
    <div>
      <Hero />
      <Clients />
      <Works />
      <Reviews />
      <Services />
    </div>
  );
};

export default Home;



