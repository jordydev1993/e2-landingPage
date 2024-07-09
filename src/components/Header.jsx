// src/components/Header.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuContext } from '../contexts/MenuContext';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';

const Header = () => {
  const { showMenu, setShowMenu } = useContext(MenuContext);

  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
      <div className="xl:w-1/6 text-center -mt-4">
<<<<<<< HEAD
        <a href="/" className="text-2xl font-bold relative p-1 bg-white">
=======
        <a href="#" className="text-2xl font-bold relative p-1 bg-white">
>>>>>>> 85c60de07607060d06e6755924203e37dcb36ed0
          Power<span className="text-primary text-5xl">.</span>
        </a>
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? 'left-0' : '-left-full'
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <Link to="/" onClick={() => setShowMenu(false)}>Home</Link>
        <Link to="/about" onClick={() => setShowMenu(false)}>Nosotros</Link>
        <Link to="/products" onClick={() => setShowMenu(false)}>Productos</Link>
        <Link to="/contact" onClick={() => setShowMenu(false)}>Contacto</Link>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
