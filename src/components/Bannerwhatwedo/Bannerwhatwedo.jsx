import { useState, useEffect, useRef } from "react";
import "./Bannerwhatwedo.scss";
import client from "../../sanity/client";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../appLoader/Loader";
import { setLoadingStatusFalse } from "../../redux/actions/actions";
import { actionGetDataAsync } from "../../redux/actions/dataActions";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const Bannerwhatwedo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectData, setProjectData] = useState([]);
  const { loading } = useSelector((store) => store.loading);
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.data);
  const fields = [
      "content",
      "content2",
      `mainImage{
          asset->{
              _id,
              url
          }
      }
      `,
  ];

  useEffect(() => {
      dispatch(actionGetDataAsync("masProyectos", fields));
      setProjectData(data[6].masProyectos)
  }, [dispatch]);

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
    {loading ? (
      <>
        <Loader />
      </>
    ) : (
      <>
      <div className="carousel">
        {/* <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide> */}
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
                      : "none",
                  }}
                >
                  <h1
                    className={`${index === 1 ? "right-down" : "right-align"}`}
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
          {/* </SwiperSlide>
        </Swiper> */}
      </div>
      </>
      )}
    </>
  );
};

export default Bannerwhatwedo;
