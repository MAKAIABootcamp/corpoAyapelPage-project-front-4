import React, { useState, useEffect } from "react";
import client from "../../sanity/client";
import "./SocialManagement.scss";

const SocialManagement = ({BackGroundImage}) => {
  const [projectData, setProjectData] = useState(null);
  const [data, setData] = useState([]);
  const [mostrarContenido, setMostrarContenido] = useState(Array(3).fill(false));

  const handleMouseEnter = (index) => {
    const newMostrarContenido = [...mostrarContenido];
    newMostrarContenido[index] = true;
    setMostrarContenido(newMostrarContenido);
  };

  const handleMouseLeave = (index) => {
    const newMostrarContenido = [...mostrarContenido];
    newMostrarContenido[index] = false;
    setMostrarContenido(newMostrarContenido);
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

  console.log(data);
  console.log(projectData);

  return (
    <>
      <div className="content" style={BackGroundImage}>
        {projectData && projectData.mainImage && (
          <div
            className="content__img-Social"
            // style={{
            //   backgroundImage: `url(${projectData.mainImage.asset.url})`,
            // }}
          >
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
                key={index}
                className={`containerGestionSocial ${
                  mostrarContenido[index] ? "see" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
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
