import React, { useState, useEffect } from "react";
import client from "../../sanity/client";
import "./EconomicManagement.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

const EconomicManagement = ({ BackGroundImage }) => {
  const [projectData, setProjectData] = useState(null);
  const [data, setData] = useState([]);
  const [mostrarContenido, setMostrarContenido] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch economic data
    client
      .fetch(`*[_type == "gestionEconomica"] {
        titleContent,
        textContent,
      }`)
      .then((data) => {
        setData(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    // Fetch project data
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
        if (data.length >= 1) {
          const firstData = data[0];
          setProjectData(firstData);
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

  const handleMouseEnter = (dataId) => {
    if (!isMobile) {
      setMostrarContenido({ ...mostrarContenido, [dataId]: true });
    }
  };

  const handleMouseLeave = (dataId) => {
    if (!isMobile) {
      setMostrarContenido({ ...mostrarContenido, [dataId]: false });
    }
  };

  const handleClick = (item) => {
    if (isMobile) {
      setSelectedItem(item);
      setIsModalOpen(true);
    }
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
        <div className="content__img-Economic">
          <div className="content-Economic">
            <h2>
              {projectData.content} <span>{projectData.content2}</span>
            </h2>
            <h3>{projectData.subcontent}</h3>
            <p>{projectData.textcontent}</p>
          </div>
          {isMobile ? (
            <MobileView
              data={data}
              mostrarContenido={mostrarContenido}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleClick={handleClick}
            />
          ) : (
            <DesktopView
              data={data}
              mostrarContenido={mostrarContenido}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleClick={handleClick}
              openModal={openModal}
            />
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
  mostrarContenido,
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
}) => (
  <Swiper
    slidesPerView={1.7}
    spaceBetween={5}
    scrollbar={{
      hide: true,
    }}
    modules={[Scrollbar]}
    className="mySwiper pepe"
  >
    <section className="cardsContent">
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div key={index}>
            <div
              className={`containerProject ${
                mostrarContenido[index] ? "see" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleClick(item)}
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
  mostrarContenido,
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
  openModal,
}) => (
  <section className="cardsContent">
    {data.map((item, index) => (
      <div key={index}>
        <div
        
          className={`containerProject ${
            mostrarContenido[index] ? "see" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          onClick={() => openModal(item)}
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

export default EconomicManagement;
