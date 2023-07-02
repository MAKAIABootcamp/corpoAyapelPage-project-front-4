import React from "react";
import './CircleCard.scss'
const CircleCard = ({title, text, img, sector}) => {
  return (
    <section className="mainCircleCard">
      <section className="mainCircleCard__gestion">
        <h2>{sector}</h2>
      </section>  
      <section className="mainCircleCard__img">
    
        <figure>
          <img src={img} alt="" />
        </figure>
      </section>
      <section className="mainCircleCard__content">
        <span className="mainCircleCard__title">{title}</span>
        <p className="mainCircleCard__text">{text}</p>
      </section>
    </section>
  );
};

export default CircleCard;
