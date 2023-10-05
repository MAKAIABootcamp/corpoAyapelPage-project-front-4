import React, { useState, useEffect } from "react";
import client from "../../sanity/client";
import "./CardWhatWeDo.scss";

const EnvironmentalManagement = ({BackGroundImage}) => {
  const [projectData, setProjectData] = useState(null);
  const [data, setData] = useState([]);
  const [listContent, setListContent] = useState([]);

  const [mostrarContenido, setMostrarContenido] = useState([]);

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
        // setListContent(data[1]?.listContent || []);
        // setMostrarContenido(new Array(data.length).fill(false));
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
  // console.log(data);
  // console.log(projectData);

  return (
    <>
      <div className="content" style={BackGroundImage}>
        {projectData && projectData.mainImage && (
          <div
            className="content__img-Ambiental"
            // style={{
            //   backgroundImage: `url(${projectData.mainImage.asset.url})`,
            // }}
          >
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
                  key={index}
                  className={`containerGestionAmbiental ${
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
                className={`containerGestionAmbiental ${
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
    </>
  );
};

export default EnvironmentalManagement;
