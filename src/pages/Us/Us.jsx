import React, { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight} from "react-icons/fa";
import "./Us.scss";

const Us = () => {
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      imgUrl: "https://res.cloudinary.com/dgnwqr93n/image/upload/q_100/v1689218720/Corpoayapel_julio_2016-73_ipfty4.webp",
      desc: " CorpoAyapel, fue fundada el 25 de febrero de 2003 en el municipio de Ayapel, por un grupo de 20 personas que querían trabajar por mejorar la calidad de vida de los habitantes de este municipio.   ",
      name: "Historia",
    },
    
    {
      id: 2,
      imgUrl:
        "https://res.cloudinary.com/dgnwqr93n/image/upload/q_100/v1689218723/Corpoayapel_julio_2016-130_gt7c7s.webp",
      desc: " Inicialmente nos orientamos al desarrollo de proyectos ambientales, al considerar la Ciénaga de Ayapel no solo una riqueza ambiental de gran importancia, sino también, la principal fuente de recursos e ingresos para los habitantes de la región, de allí deriva nuestro nombre “Corporación para el Desarrollo Integral de la Ciénaga de Ayapel”, Corpoayapel. Durante esta primera etapa del proceso, no se cumplieron a cabalidad los objetivos planteados, por falta de compromiso y disciplina de la comunidad seleccionada (pescadores y agricultores).",
      name: "Historia",
    },


    {
      id: 3,
      imgUrl:
        "https://res.cloudinary.com/dgnwqr93n/image/upload/q_100/v1689218725/Corpoayapel_julio_2016-102_u94ceb.webp",
      desc: "Basados en la experiencia y teniendo en cuenta que la comunidad que se buscaba beneficiar, no tenía resueltas necesidades básicas como la salud y la educación, se dio un nuevo rumbo a la Corporación, haciendo énfasis en 3 líneas de acción: Salud, Educación y Medio Ambiente. Se focalizaron los recursos, en el corregimiento El Cedro con el ánimo de obtener un mayor impacto al cubrir una población de manera integral. Una vez se consolidaron los programas y proyectos que se realizaron en El Cedro, se amplió la cobertura a otras comunidades del municipio, a través de alianzas estratégicas.",
      name: "Historia",
    },
    {
      id: 4,
      imgUrl: "https://res.cloudinary.com/dgnwqr93n/image/upload/q_100/v1689218732/_MG_9583_l5q61w.webp",
      desc: "Se focalizaron los recursos y las actividades en el corregimiento El Cedro, perteneciente a Ayapel, con el ánimo de obtener un mayor impacto al cubrir una población de manera integral. Una vez consolidados los programas y proyectos que realizamos en El Cedro, hemos ampliado la cobertura a otras comunidades del municipio.",
      name: "Historia",
    },
    {
      id:5,
      imgUrl:"https://res.cloudinary.com/dgnwqr93n/image/upload/q_100/v1689218737/_MG_6583_xgbcqn.webp",
      desc: "  Desde el año 2015 hemos tenido una rápida expansión a partir de una reestructuración organizacional. Empezamos por incorporar el concepto de Desarrollo Sostenible y a partir de esto definimos nuestras tres líneas de trabajo: ambiental, social y económica. También definimos tres condiciones para aumentar el alcance y el impacto de nuestras acciones: desarrollar todos los programas y proyectos en alianza con entidades expertas, dar una solución integral a los problemas de todo el territorio y medir el impacto de nuestras acciones.",
      name: "Historia",
    },
  ];

  return (
    <div className="container">
      <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
      <div id="slide" ref={slideRef }>
        {data.map((item) => (
          <div
            key={item.id }
            className="item"
            style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.436), rgba(0, 0, 0, 0.436)), url(${item.imgUrl})`,  backgroundRepeat: "no-repeat",backgroundSize: "cover", backgroundPosition: "center", }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.desc}</div>
              
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}>
          <FaAngleLeft/>
        </button>
        <button id="next" onClick={handleClickNext}>
          <FaAngleRight/>
        </button>
      </div>
    </div>
  );
};

export default Us;