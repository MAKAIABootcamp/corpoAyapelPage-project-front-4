import React, { useState } from 'react';
import './navbarPageAyapel.scss';

const NavbarPageAyapel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToWhatToDo = () => {
    console.log('voy a q hacer');
    setActiveIndex(0);
  };

  const handleToLocation = () => {
    console.log('voy a q hacer');
    setActiveIndex(1);
  };

  const handleImportantsData = () => {
    console.log('voy a  datos');
    setActiveIndex(2);
  };

  const handleToFloraAndFauna = () => {
    console.log('voy a flora');
    setActiveIndex(3);
  };

  const navbar = [
    {
      title: '¿Qué Hacer en Ayapel?',
      onClick: handleToWhatToDo,
    },
    {
      title: 'Ubicación',
      onClick: handleToLocation,
    },
    {
      title: 'Datos Importantes',
      onClick: handleImportantsData,
    },
    {
      title: 'Flora y Fauna',
      onClick: handleToFloraAndFauna,
    },
  ];

  return (
    <>
      <section className="navPageAyapel__container">
        <nav>
        
          
            <ul>
              {navbar.map((nav, index) => (
                <>
                <li
                  key={index}
                  onClick={nav.onClick}
                  className={activeIndex === index ? 'active' : ''}
                >
                  {nav.title}
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

export default NavbarPageAyapel;
