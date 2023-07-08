import React, { useState } from 'react';
import './navbarPageAyapel.scss';

const NavbarPageAyapel = ({activeIndexNavbar, setActiveIndexNavbar}) => {

  const handleToComponentFromNavbar = ({ index }) => {
    console.log('voy a cambiar de componente');
    setActiveIndexNavbar(index);
  };

  const navbar = ['¿Qué Hacer en Ayapel?', 'Ubicación', 'Datos Importantes', 'Flora y Fauna'];

  return (
    <>
      <section className="navPageAyapel__container">
        <nav>
          <ul>
            {navbar.map((nav, index) => (
              <>
                <li
                  key={index}
                  onClick={() => handleToComponentFromNavbar({ index })}
                  className={activeIndexNavbar === index ? 'active' : ''}
                >
                  {nav}
                </li>
                <span>|</span>
              </>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
};
export default NavbarPageAyapel