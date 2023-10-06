import React, { useState, useEffect } from "react";
import client from "../../sanity/client";
import "./CardWhatWeDo.scss";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const EnvironmentalManagement = ({ BackGroundImage }) => {
  const [projectData, setProjectData] = useState(null);
  const [data, setData] = useState([]);
  const [listContent, setListContent] = useState([]);
  const [mostrarContenido, setMostrarContenido] = useState([]);
  const [clickeado, setClickeado] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "gestionAmbiental"] {
        titleContent,
        textContent,
      }`
      )
      .then((data) => {
        setData(data);
      })
      .catch(console.error);
  }, []);


  useEffect(() => {
    client
      .fetch(
        `*[_type == "gestion"] {
          content,
          content2,
          subcontent,
          textcontent,
          textcontent2,
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`
      )
      .then((data) => {
        if (data.length >= 2) {
          const secondData = data[1];
          setProjectData(secondData);
        }
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    // Detectar si estamos en un dispositivo móvil
    const isMobileDevice = window.innerWidth <= 768; // Ajusta el ancho máximo según tu criterio
    setIsMobile(isMobileDevice);

    // Agregar un listener para detectar cambios en el tamaño de la ventana
    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 768; // Ajusta el ancho máximo según tu criterio
      setIsMobile(isMobileDevice);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleClick = (index) => {
    setClickeado((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });

    setTimeout(() => {
      setMostrarContenido((prevState) => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
      });
    }, 900);
  };

  const handleMouseEnter = (index) => {
    setMostrarContenido((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseLeave = (index) => {
    setMostrarContenido((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <>
      <div className="content" style={BackGroundImage}>
        {projectData && projectData.mainImage && (
          <div className="content__img-Ambiental">
            <div className="content-Ambiental">
              <h2>
                {projectData.content} <span>{projectData.content2}</span>
              </h2>
              <h3>{projectData.subcontent}</h3>
              <p>{projectData.textcontent}</p>
              <p>{projectData.textcontent2}</p>
            </div>
            <section className="cardsContent-Env">
              {data.map((item, index) => (
                <div key={index}>
                  <div
                    className={`containerGestionAmbiental ${
                      clickeado[index] ? "see" : ""
                    }`}
                    // onClick={() => handleClick(index)} // Usar onClick en lugar de onMouseEnter
                    onClick={() => handleClick(index)}
                    onMouseEnter={() => !isMobile && handleMouseEnter(index)}
                    onMouseLeave={() => !isMobile && handleMouseLeave(index)}
                  >
                    <div className="title">{item.titleContent}</div>
                    <div className="contentText">
                      {mostrarContenido[index]
                        ? item.textContent
                        : `${item.textContent.substring(0, 50)}...`}
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {listContent.length > 0 && (
              <ul className="listContent">
                {listContent.map((item, index) => (
                  <li key={index} className="listItem">
                    <span className="listDot"></span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <div className="contentnone">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {projectData && (
            <div
              className="contentnone__img"
              style={{
                backgroundImage: `url(${projectData.mainImage.asset.url})`,
              }}
            >
              <div className="textAmbiental">
                <h2>
                  {projectData.content} <span>{projectData.content2}</span>
                </h2>
                <h3>{projectData.subcontent}</h3>
                <p>{projectData.textcontent}</p>
                <p>{projectData.textcontent2}</p>
              </div>

              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`containerGestionAmbiental ${
                      clickeado[index] ? "see" : ""
                    }`}
                    onClick={() => handleClick(index)} // Usar onClick en lugar de onMouseEnter
                  >
                    <div className="title">{item.titleContent}</div>
                    <div className="contentText">
                      {mostrarContenido[index]
                        ? item.textContent
                        : `${item.textContent.substring(0, 50)}...`}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default EnvironmentalManagement;
