import { useState, useEffect } from "react";
import client from "../../sanity/client";
import "./SocialManagement.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionGetDataAsync } from "../../redux/actions/dataActions";

const SocialManagement = () => {
  const [projectData, setProjectData] = useState(null);
  const [data1, setData] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});

  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [mostrarContenido2, setMostrarContenido2] = useState(false);
  const [mostrarContenido3, setMostrarContenido3] = useState(false);

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

  const titulo = data1?.titleContent;
  const parrafoCompleto = data1?.textContent || "";
  const parrafoCorto = `${parrafoCompleto.substring(0, 80)}...`;

  const titulo2 = data2.titleContent;
  const parrafoCompleto2 = data2?.textContent || "";
  const parrafoCorto2 = `${parrafoCompleto2.substring(0, 50)}...`;

  const titulo3 = data3.titleContent;
  const parrafoCompleto3 = data3?.textContent || "";
  const parrafoCorto3 = `${parrafoCompleto3.substring(0, 50)}...`;
  const { data } = useSelector((store) => store.data);
  const dispatch = useDispatch();
  const fields = [
      "titleContent",
      "textContent",
  ];

  useEffect(() => {
      dispatch(actionGetDataAsync("gestionSocial", fields));
      if (data[10].gestionSocial.length >= 1) {
                setData(data[10].gestionSocial[0]);
              }
              if (data[10].gestionSocial.length >= 2) {
                setData2(data[10].gestionSocial[1]);
              }
              if (data[10].gestionSocial.length >= 3) {
                setData3(data[10].gestionSocial[2]);
              }
  }, [dispatch]);

  const fields1 = [
    "content",
    "content2",
    "subcontent",
    "textcontent",
    "textcontent2",
    `mainImage{
        asset->{
            _id,
            url
        }
    }
    `,
];

  useEffect(() => {
    dispatch(actionGetDataAsync("gestion", fields1));
    if (data[8]?.gestion.length >= 3) {
              const firstData = data[8]?.gestion[2];
              setProjectData(firstData);
            }
}, [dispatch]);
  

  return (
    <>
      <div className="content">
        {projectData &&
          projectData.mainImage && ( // Verificar projectData.mainImage
            <div
              className="content__img-Social"
              style={{
                backgroundImage: `url(${projectData.mainImage.asset.url})`,
              }}
            >
              <div className="content-Social">
                <h2>
                  {projectData.content} <span>{projectData.content2}</span>
                </h2>
                <h3>{projectData.subcontent}</h3>
                <p>{projectData.textcontent}</p>
              <p>{projectData.textcontent2}</p>
              </div>

              <div
                className={`containerGestionSocial ${
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
                className={`containerGestionSocial2 ${
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

              <div
                className={`containerGestionSocial3 ${
                  mostrarContenido3 ? "see3" : ""
                }`}
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                <div className="title3">{titulo3}</div>
                <div className="contentText3">
                  {mostrarContenido3 ? parrafoCompleto3 : parrafoCorto3}
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

            <div className="prueba">
              <div
                className={`containerGestionSocial ${
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
                className={`containerGestionSocial2 ${
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

              <div
                className={`containerGestionSocial3 ${
                  mostrarContenido3 ? "see3" : ""
                }`}
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                <div className="title3">{titulo3}</div>
                <div className="contentText3">
                  {mostrarContenido3 ? parrafoCompleto3 : parrafoCorto3}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SocialManagement;

// .then((responseData) => setData(responseData))

// {data &&
//   data.map((item, index) => (
//     <div
//       key={index}
//       className={`containerProject ${
//         mostrarContenido ? "see" : ""
//       }`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="title">{item.titleContent}</div>
//       <div className="contentText">
//         {mostrarContenido ? item.textContent : parrafoCorto}
//       </div>
//     </div>
//   ))}
