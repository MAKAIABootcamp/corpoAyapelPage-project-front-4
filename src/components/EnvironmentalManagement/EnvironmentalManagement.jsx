import { useState, useEffect } from "react";
import client from "../../sanity/client";
import "./CardWhatWeDo.scss";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingStatusFalse } from "../../redux/actions/actions";
import Loader from "../appLoader/Loader";

const EnvironmentalManagement = () => {
  const [projectData, setProjectData] = useState(null); // Cambiar a null
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});
  const [data4, setData4] = useState({});
  const [listContent, setListContent] = useState([]);

  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [mostrarContenido2, setMostrarContenido2] = useState(false);
  const [mostrarContenido3, setMostrarContenido3] = useState(false);
  const [mostrarContenido4, setMostrarContenido4] = useState(false);

  const { loading } = useSelector((store) => store.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "gestionAmbiental"] {
        titleContent,
        textContent,
        listContent
      }`
      )
      .then((data) => {
        if (data.length >= 1) {
          setData(data[0]);
        }
        if (data.length >= 2) {
          setData2(data[1]);
          setListContent(data[1].listContent || []);
        }
        if (data.length >= 3) {
          setData3(data[2]);
        }
        if (data.length >= 4) {
          setData4(data[3]);
        }
        dispatch(setLoadingStatusFalse());
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
          // Cambiar a >= 2
          const secondData = data[1]; // Cambiar a data[1]
          setProjectData(secondData);
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

  const handleMouseEnter3 = () => {
    setMostrarContenido3(true);
  };

  const handleMouseLeave3 = () => {
    setMostrarContenido3(false);
  };

  const handleMouseEnter4 = () => {
    setMostrarContenido4(true);
  };

  const handleMouseLeave4 = () => {
    setMostrarContenido4(false);
  };

  const titulo = data?.titleContent;
  const parrafoCompleto = data?.textContent || "";
  const parrafoCorto = `${parrafoCompleto.substring(0, 80)}...`;

  const titulo2 = data2.titleContent;
  const parrafoCompleto2 = data2?.textContent || "";
  const parrafoCorto2 = `${parrafoCompleto2.substring(0, 50)}...`;

  const titulo3 = data3.titleContent;
  const parrafoCompleto3 = data3?.textContent || "";
  const parrafoCorto3 = `${parrafoCompleto3.substring(0, 50)}...`;

  const titulo4 = data4.titleContent;
  const parrafoCompleto4 = data4?.textContent || "";
  const parrafoCorto4 = `${parrafoCompleto4.substring(0, 50)}...`;

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="content">
            {projectData && projectData.mainImage && (
              <div
                className="content__img-Ambiental"
                style={{
                  backgroundImage: `url(${projectData.mainImage.asset.url})`,
                }}
              >
                <div className="content-Ambiental">
                  <h2>
                    {projectData.content} <span>{projectData.content2}</span>
                  </h2>
                  <h3>{projectData.subcontent}</h3>
                  <p>{projectData.textcontent}</p>
                  <p>{projectData.textcontent2}</p>
                </div>

                <div
                  className={`containerGestionAmbiental ${
                    mostrarContenido ? "see" : ""
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="title">{titulo}</div>
                  <div className="contentText">
                    {mostrarContenido ? parrafoCompleto : parrafoCorto}
                  </div>
                </div>

                <div
                  className={`containerGestionAmbiental2 ${
                    mostrarContenido2 ? "see" : ""
                  }`}
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                >
                  <div className="title">{titulo2}</div>
                  <div className="contentText">
                    {mostrarContenido2 ? parrafoCompleto2 : parrafoCorto2}
                  </div>
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

                <div
                  className={`containerGestionAmbiental3 ${
                    mostrarContenido3 ? "see" : ""
                  }`}
                  onMouseEnter={handleMouseEnter3}
                  onMouseLeave={handleMouseLeave3}
                >
                  <div className="title">{titulo3}</div>
                  <div className="contentText">
                    {mostrarContenido3 ? parrafoCompleto3 : parrafoCorto3}
                  </div>
                </div>

                <div
                  className={`containerGestionAmbiental4 ${
                    mostrarContenido4 ? "see" : ""
                  }`}
                  onMouseEnter={handleMouseEnter4}
                  onMouseLeave={handleMouseLeave4}
                >
                  <div className="title">{titulo4}</div>
                  <div className="contentText">
                    {mostrarContenido4 ? parrafoCompleto4 : parrafoCorto4}
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
                  className={`containerGestionAmbiental ${
                    mostrarContenido ? "see" : ""
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="title">{titulo}</div>
                  <div className="contentText">
                    {mostrarContenido ? parrafoCompleto : parrafoCorto}
                  </div>
                </div>

                <div
                  className={`containerGestionAmbiental2 ${
                    mostrarContenido2 ? "see" : ""
                  }`}
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                >
                  <div className="title">{titulo2}</div>
                  <div className="contentText">
                    {mostrarContenido2 ? parrafoCompleto2 : parrafoCorto2}
                  </div>
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

                <div
                  className={`containerGestionAmbiental3 ${
                    mostrarContenido3 ? "see" : ""
                  }`}
                  onMouseEnter={handleMouseEnter3}
                  onMouseLeave={handleMouseLeave3}
                >
                  <div className="title">{titulo3}</div>
                  <div className="contentText">
                    {mostrarContenido3 ? parrafoCompleto3 : parrafoCorto3}
                  </div>
                </div>

                <div
                  className={`containerGestionAmbiental4 ${
                    mostrarContenido4 ? "see" : ""
                  }`}
                  onMouseEnter={handleMouseEnter4}
                  onMouseLeave={handleMouseLeave4}
                >
                  <div className="title">{titulo4}</div>
                  <div className="contentText">
                    {mostrarContenido4 ? parrafoCompleto4 : parrafoCorto4}
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default EnvironmentalManagement;

// import React, { useEffect, useState } from "react";
// import "./CardWhatWeDo.scss";
// import client from "../../sanity/client";
// // import "../../pages/FullPage/FullPage.scss"

// export default function CardWhatWeDo() {
//   const [allPostData, setAllPostData] = useState(null);
//   useEffect(() => {
//     client
//       .fetch(
//         `*[_type == "gestion"] {
//           content,
//           content2,
//           subcontent,
//           textcontent,
//         mainImage{
//           asset->{
//             _id,
//             url
//           }
//         }
//       }`
//       )
//       .then((data) => setAllPostData(data))
//       .catch(console.error);
//   }, []);

//   return (
//     <>
//       <div className="content">
//         {allPostData &&
//           allPostData.map((data, index) => (
//             <div
//               className={`content__img ${
//                 index === 1 || index === 3 ? "content__img2" : ""
//               }`}
//               key={index}
//               style={{
//                 backgroundImage: `url(${data.mainImage.asset.url})`,
//               }}
//             >
//               <div
//                 className={`${
//                   index === 1 ? "contentGestion" : "contentAmbiental"
//                 }`}
//               >
//                 <h2>
//                   {data.content} <span>{data.content2}</span>
//                 </h2>

//                 <h3>{data.subcontent}</h3>
//                 <p>{data.textcontent}</p>
//               </div>
//             </div>
//           ))}
//       </div>

//       <div className="contentnone">
//         <div>
//           {allPostData &&
//             allPostData.map((data, index) => {
//               return (
//                 <div
//                   className="contentnone__img"
//                   key={index}
//                   style={{
//                     backgroundImage: `url(${data.mainImage.asset.url})`,
//                   }}
//                 >
//                   <div className="textAmbiental">
//                     <h2>
//                       {data.content} <span>{data.content2}</span>
//                     </h2>

//                     <h3>{data.subcontent}</h3>
//                     <p>{data.textcontent}</p>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </>
//   );
// }
