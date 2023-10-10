import React, { useState, useEffect } from "react";
import client from "../../sanity/client";
import "./CardWhatWeDo.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

const EnvironmentalManagement = ({ BackGroundImage }) => {
  const [projectData, setProjectData] = useState(null);
  const [data, setData] = useState([]);
  const [listContent, setListContent] = useState([]);
  const [mostrarContenido, setMostrarContenido] = useState([]);
  const [clickeado, setClickeado] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch environmental data
    client
      .fetch(`*[_type == "gestionAmbiental"] {
        titleContent,
        textContent,
      }`)
      .then((data) => {
        setData(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    // Fetch project data (second item in the array)
    client
      .fetch(`*[_type == "gestion"] {
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
      }`)
      .then((data) => {
        if (data.length >= 2) {
          const secondData = data[1];
          setProjectData(secondData);
        }
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    // Check for mobile device
    const isMobileDevice = window.innerWidth <= 768;
    setIsMobile(isMobileDevice);

    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    // Add and remove resize event listener
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
      }, 900);
    });
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

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  return (
    <div className="content" style={BackGroundImage}>
      {projectData && projectData.mainImage && (
        <div className="content__img-Ambiental">
          <div className="content-Ambiental">
            <h2>
              {projectData.content} <span>{projectData.content2}</span>
            </h2>
            <h3>{projectData.subcontent}</h3>
            <p>{projectData.textcontent}</p>
          </div>
          {isMobile ? (
            <MobileView
              data={data}
              clickeado={clickeado}
              mostrarContenido={mostrarContenido}
              handleClick={handleClick}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              openModal={openModal}
              isMobile={isMobile} // Agregar la propiedad isMobile
            />
          ) : (
            <DesktopView
              data={data}
              clickeado={clickeado}
              mostrarContenido={mostrarContenido}
              handleClick={handleClick}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              openModal={openModal}
              isMobile={isMobile} // Agregar la propiedad isMobile
            />
          )}
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
      {isModalOpen && (
        <div className="modal">
          {selectedItem && (
            <>
              <h2>{selectedItem.titleContent}</h2>
              <p>{selectedItem.textContent}</p>
            </>
          )}
          <button onClick={closeModal}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

const MobileView = ({
  data,
  clickeado,
  mostrarContenido,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  openModal,
  isMobile, // Agregar la propiedad isMobile
}) => (
  <Swiper
    slidesPerView={1.7}
    spaceBetween={5}
    scrollbar={{ hide: true }}
    modules={[Scrollbar]}
    className="mySwiper pepe"
  >
    <section className="cardsContent-Env">
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div key={index}>
            <div
              className={`containerGestionAmbiental ${
                clickeado[index] ? "see" : ""
              }`}
              onClick={() => openModal(item)}
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
        </SwiperSlide>
      ))}
    </section>
  </Swiper>
);

const DesktopView = ({
  data,
  clickeado,
  mostrarContenido,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  openModal,
  isMobile, // Agregar la propiedad isMobile
}) => (
  <section className="cardsContent-Env">
    {data.map((item, index) => (
      <div key={index}>
        <div
          className={`containerGestionAmbiental ${
            clickeado[index] ? "see" : ""
          }`}
          onClick={() => openModal(item)}
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
);

export default EnvironmentalManagement;
