import { useState, useEffect } from "react";
import "./Bannerwhatwedo.scss";
import client from "../../sanity/client";

const Bannerwhatwedo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "masProyectos"] {
        content,
        content2,
        mainImage{
          asset->{
            _id,
            url
          }
        }
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === projectData.length - 1 ? 0 : prevSlide + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [projectData]);
  

  return (
    <>
    <div className="carousel">
      <div className="carousel__container">
        {projectData.map((data, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{
              backgroundImage: data.mainImage.asset.url
                ? `url(${data.mainImage.asset.url})`
                : "none"
            }}
          >
             <h1
             className={`${
              index === 1 ? "right-down" : "right-align"
            }`} 
            >
              {data.content} <span>{data.content2}</span>
            </h1>
          </div>
        ))}
      </div>
      <div className="carousel__buttons">
        {projectData.length > 0 &&
          projectData.map((imagen, index) => (
            <button
              key={index}
              className={`carousel-button ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
      </div>
    </div>
  </>
  );
};

export default Bannerwhatwedo;
