import { useState, useEffect } from "react";
import client from "../../sanity/client";
import "./EconomicManagement.scss";

const EconomicManagement = () => {
  const [projectData, setProjectData] = useState(null);
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});

  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [mostrarContenido2, setMostrarContenido2] = useState(false);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "gestionEconomica"] {
        titleContent,
        textContent,
      }`
      )
      .then((data) => {
        if (data.length >= 1) {
          setData(data[0]);
        }
        if (data.length >= 2) {
          setData2(data[1]);
        }
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

  const handleMouseEnter = () => {
    setMostrarContenido(true);
  };

  const handleMouseLeave = () => {
    setMostrarContenido(false);
  };

  const handleMouseEnter2 = () => {
    setMostrarContenido2(true);
  };

  const handleMouseLeave2 = () => {
    setMostrarContenido2(false);
  };

  const titulo = data?.titleContent;
  const parrafoCompleto = data?.textContent || "";
  const parrafoCorto = `${parrafoCompleto.substring(0, 80)}...`;

  const titulo2 = data2.titleContent;
  const parrafoCompleto2 = data2?.textContent || "";
  const parrafoCorto2 = `${parrafoCompleto2.substring(0, 50)}...`;

  return (
    <>
      <div className="content">
        {projectData &&
          projectData.mainImage && ( // Verificar projectData.mainImage
            <div
              className="content__img-Economic"
              style={{
                backgroundImage: `url(${projectData.mainImage.asset.url})`,
              }}
            >
              <div className="content-Economic">
                <h2>
                  {projectData.content} <span>{projectData.content2}</span>
                </h2>
                <h3>{projectData.subcontent}</h3>
                <p>{projectData.textcontent}</p>
              <p>{projectData.textcontent2}</p>
              </div>

              <div
                className={`containerProject ${mostrarContenido ? "see" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="title">{titulo}</div>
                <div className="contentText">
                  {mostrarContenido ? parrafoCompleto : parrafoCorto}
                </div>
              </div>

              <div
                className={`containerProject2 ${
                  mostrarContenido2 ? "see2" : ""
                }`}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <div className="title2">{titulo2}</div>
                <div className="contentText2">
                  {mostrarContenido2 ? parrafoCompleto2 : parrafoCorto2}
                </div>
              </div>

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

            <div
                className={`containerProject ${mostrarContenido ? "see" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="title">{titulo}</div>
                <div className="contentText">
                  {mostrarContenido ? parrafoCompleto : parrafoCorto}
                </div>
              </div>

              <div
                className={`containerProject2 ${
                  mostrarContenido2 ? "see2" : ""
                }`}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <div className="title2">{titulo2}</div>
                <div className="contentText2">
                  {mostrarContenido2 ? parrafoCompleto2 : parrafoCorto2}
                </div>
              </div>
              
          </div>
        )}
      </div>
    </>
  );
};

export default EconomicManagement;
