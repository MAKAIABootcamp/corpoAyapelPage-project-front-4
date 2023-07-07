import { useState, useEffect } from "react";
import "./Bannerwhatwedo.scss";
import client from "../../sanity/client";

const Bannerwhatwedo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectData1, setProjectData1] = useState({});
  const [projectData2, setProjectData2] = useState({});
  const [projectData3, setProjectData3] = useState({});

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
      .then((data) => {
        if (data.length >= 1) {
          setProjectData1(data[0]);
        }
        if (data.length >= 2) {
          setProjectData2(data[1]);
        }
        if (data.length >= 3) {
          setProjectData3(data[2]);
        }
      })
      .catch(console.error);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 2 ? 0 : prevSlide + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  

  return (
    <>
      <div className="carousel">
        <div className="carousel__container">
          <div
            className={`carousel-slide ${currentSlide === 0 ? "active" : ""}`}
            style={{
              backgroundImage: projectData1.mainImage?.asset?.url
                ? `url(${projectData1.mainImage.asset.url})`
                : "none",
            }}
          >
            <h1 className="right-align">
              {projectData1.content} <span>{projectData1.content2}</span>
            </h1>
          </div>
          <div
            className={`carousel-slide ${currentSlide === 1 ? "active" : ""}`}
            style={{
              backgroundImage: projectData2.mainImage?.asset?.url
                ? `url(${projectData2.mainImage.asset.url})`
                : "none",
            }}
          >
            <h1 className="right-down">
              {projectData2.content} <span>{projectData2.content2}</span>
            </h1>
          </div>
          <div
            className={`carousel-slide ${currentSlide === 2 ? "active" : ""}`}
            style={{
              backgroundImage: projectData3.mainImage?.asset?.url
                ? `url(${projectData3.mainImage.asset.url})`
                : "none",
            }}
          >
            <h1 className="right-align">
              {projectData3.content} <span>{projectData3.content2}</span>
            </h1>
          </div>
        </div>
        <div className="carousel__buttons">
          <button
            className={`carousel-button ${currentSlide === 0 ? "active" : ""}`}
            onClick={() => goToSlide(0)}
          ></button>
          <button
            className={`carousel-button ${currentSlide === 1 ? "active" : ""}`}
            onClick={() => goToSlide(1)}
          ></button>
          <button
            className={`carousel-button ${currentSlide === 2 ? "active" : ""}`}
            onClick={() => goToSlide(2)}
          ></button>
        </div>
      </div>
    </>
  );
};

export default Bannerwhatwedo;
