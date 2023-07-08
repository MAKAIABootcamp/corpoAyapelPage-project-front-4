import React, { useEffect, useState } from 'react';
import './whatToDo.scss';
import client from '../../../../sanity/client';

const WhatToDo = () => {
  const [activeIndex, setActiveIndex] = useState(0);




  const handleToHomeSpa = () => {
    console.log('voy a q homtospa');
    setActiveIndex(0);
  };

  const handleToCedroTour = () => {
    console.log('voy a q cedro');
    setActiveIndex(1);
  };

  const handleToBirdsTour = () => {
    console.log('voy a  bird');
    setActiveIndex(2);
  };

  const handleToNaturePhotography = () => {
    console.log('voy a photo');
    setActiveIndex(3);
  };

  const handleToManufactureOfUniforms = () => {
    console.log('voy a uni');
    setActiveIndex(4);
  };

  const handleToSaleOfArepas = () => {
    console.log('voy a arepa');
    setActiveIndex(5);
  };

  const toDo = [
    {
      title: 'Spa en casa',
      onClick: handleToHomeSpa,
      img: 'https://cdn-icons-png.flaticon.com/128/5114/5114466.png',
    },
    {
      title: 'Cedro Tour',
      onClick: handleToCedroTour,
      img: 'https://cdn-icons-png.flaticon.com/128/7151/7151868.png',
    },
    {
      title: 'Aves Tour',
      onClick: handleToBirdsTour,
      img: 'https://cdn-icons-png.flaticon.com/128/2153/2153145.png',
    },
    {
      title: 'Fotografía de naturaleza',
      onClick: handleToNaturePhotography,
      img: 'https://cdn-icons-png.flaticon.com/128/5910/5910022.png',
    },
    {
      title: 'Confección de uniformes',
      onClick: handleToManufactureOfUniforms,
      img: 'https://cdn-icons-png.flaticon.com/128/5047/5047342.png',
    },
    {
      title: 'Venta de Arepas',
      onClick: handleToSaleOfArepas,
      img: 'https://cdn-icons-png.flaticon.com/128/6914/6914717.png',
    },
  ];

  return (
    <>
      <section className="whatToDo__container">
        <ul>
          {toDo.map((todo, index) => (
            <div
              className={`whatToDo__list ${
                activeIndex === index ? 'active' : ''
              }`}
              key={index}
              onClick={todo.onClick}
            >
              <figure>
                <img src={todo.img} alt="" />
              </figure>
              <li>{todo.title}</li>
            </div>
          ))}
        </ul>
      </section>
    </>
  );
};

export default WhatToDo;
