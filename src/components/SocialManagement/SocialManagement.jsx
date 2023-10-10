import React, { useState, useEffect } from "react";
import client from "../../sanity/client";
import "./SocialManagement.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

const SocialManagement = ({ BackGroundImage }) => {
  const [projectData, setProjectData] = useState(null);
  const [data, setData] = useState([]);
  const [mostrarContenido, setMostrarContenido] = useState(Array(3).fill(false));
  const [isMobile, setIsMobile] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch social data
    client
      .fetch(`*[_type == "gestionSocial"] {
        titleContent,
        textContent,
      }`)
      .then((data) => {
        setData(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    // Fetch project data (third item in the array)
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
        if (data.length >= 3) {
          const firstData = data[2];
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
      setSelectedItem(data[index]);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="contentSocial" style={BackGroundImage}>
      {projectData && projectData.mainImage && (
        <div className="contentSocial__img-Social">
          <div className="content-Social">
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
    scrollbar={{ hide: true }}
    modules={[Scrollbar]}
    className="mySwiper pepe"
  >
    <section className="cardsContent-Soc">
      {data.map((item, index) => (
        <SwiperSlide key={index}>
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
  <section className="cardsContent-Soc">
    {data.map((item, index) => (
      <div key={index}>
        <div
          className={`containerGestionSocial ${
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

export default SocialManagement;
