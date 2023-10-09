import React, { useState, useEffect } from "react";
import client from "../../sanity/client";
import "./SocialManagement.scss";

const SocialManagement = ({ BackGroundImage }) => {
  const [projectData, setProjectData] = useState(null);
  const [data, setData] = useState([]);
  const [mostrarContenido, setMostrarContenido] = useState(Array(3).fill(false));
  const [isMobile, setIsMobile] = useState(false); // Variable para detectar dispositivo móvil

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      const newMostrarContenido = [...mostrarContenido];
      newMostrarContenido[index] = true;
      setMostrarContenido(newMostrarContenido);
    }
  };

  const handleMouseLeave = (index) => {
    if (!isMobile) {
      const newMostrarContenido = [...mostrarContenido];
      newMostrarContenido[index] = false;
      setMostrarContenido(newMostrarContenido);
    }
  };

  const handleClick = (index) => {
    if (isMobile) {
      setMostrarContenido((prevState) => {
        const newMostrarContenido = [...prevState];
        newMostrarContenido[index] = !prevState[index];
        return newMostrarContenido;
      });
    }
  };

  useEffect(() => {
    client
      .fetch(
        `*[_type == "gestionSocial"] {
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
        if (data.length >= 3) {
          const firstData = data[2];
          setProjectData(firstData);
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

  return (
    <>
      <div className="content" style={BackGroundImage}>
        {projectData && projectData.mainImage && (
          <div className="content__img-Social">
            <div className="content-Social">
              <h2>
                {projectData.content} <span>{projectData.content2}</span>
              </h2>
              <h3>{projectData.subcontent}</h3>
              <p>{projectData.textcontent}</p>
              <p>{projectData.textcontent2}</p>
            </div>
            <section className="cardsContent-Soc">
              {data.map((item, index) => (
                <div key={index}>
                  <div
                    className={`containerGestionSocial ${
                      mostrarContenido[index] ? "see" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    onClick={() => handleClick(index)}
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
          </div>
        )}
      </div>

      <div className="contentnone">
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
              <div
                key={index}
                className={`containerGestionSocial ${
                  mostrarContenido[index] ? "see" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => handleClick(index)}
              >
                <div className="title">{item.titleContent}</div>
                <div className="contentText">
                  {mostrarContenido[index]
                    ? item.textContent
                    : `${item.textContent.substring(0, 50)}...`}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SocialManagement;
