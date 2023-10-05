import React, { useState, useEffect } from "react";
import client from "../../sanity/client";
import "./EconomicManagement.scss";

const EconomicManagement = ({BackGroundImage}) => {
  const [projectData, setProjectData] = useState(null);
  const [data, setData] = useState([]);
  const [mostrarContenido, setMostrarContenido] = useState({});

  useEffect(() => {
    client
      .fetch(
        `*[_type == "gestionEconomica"] {
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
        if (data.length >= 1) {
          const firstData = data[0];
          setProjectData(firstData);
        }
      })
      .catch(console.error);
  }, []);

  const handleMouseEnter = (dataId) => {
    setMostrarContenido({ ...mostrarContenido, [dataId]: true });
  };

  const handleMouseLeave = (dataId) => {
    setMostrarContenido({ ...mostrarContenido, [dataId]: false });
  };

  const titulo = projectData?.content;
  const parrafoCompleto = projectData?.textcontent || "";
  const parrafoCorto = `${parrafoCompleto.substring(0, 80)}...`;

  return (
    <>
      <div className="content" style={BackGroundImage}>
        {projectData &&
          projectData.mainImage && (
            <div
              className="content__img-Economic"
              // style={{
              //   backgroundImage: `url(${projectData.mainImage.asset.url})`,
              // }}
            >
              <div className="content-Economic">
                <h2>
                  {projectData.content} <span>{projectData.content2}</span>
                </h2>
                <h3>{projectData.subcontent}</h3>
                <p>{projectData.textcontent}</p>
                <p>{projectData.textcontent2}</p>
              </div>
              <section className="cardsContent">
                {data.map((item, index) => (
                  <div key={index}>
                    <div
                      className={`containerProject ${
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
    </>
  );
};

export default EconomicManagement;
