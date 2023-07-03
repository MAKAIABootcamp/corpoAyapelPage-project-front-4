import React, { useEffect, useState } from "react";
import './CircleCard.scss'
import client from "../../sanity/client";
const CircleCard = ({title, text, img, sector}) => {
  const [allPostData, setAllPostData] = useState(null)
  useEffect(() => {
    client
      .fetch(
        `*[_type == "proyectos"] {
        gestion,
        content,
        name,
        mainImage{
          asset->{
            _id,
            url
          }
        }
      }`
      )
      .then((data) => setAllPostData(data))
      .catch(console.error)
  }, [])
  console.log(allPostData)
  
  return (
    <>
    {allPostData && allPostData.map((data, index) => (
    <section className="mainCircleCard" key={index}>

      
        <section className="mainCircleCard__gestion">
          <h2>{data.gestion}</h2>
        </section>
        <section className="mainCircleCard__img">
          <figure>
            <img src={data.mainImage.asset.url} alt="" />
          </figure>
        </section>
        <section className="mainCircleCard__content">
          <span className="mainCircleCard__title">{data.name}</span>
          <p className="mainCircleCard__text">{data.content}</p>
        </section>
      
  </section>
  ))}
  </>
  );
};

export default CircleCard;
