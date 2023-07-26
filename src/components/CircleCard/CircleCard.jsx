import React, { useEffect, useState } from "react";
import "./CircleCard.scss";
import client from "../../sanity/client";

import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../appLoader/Loader";
import { setLoadingStatusFalse } from "../../redux/actions/actions";
const CircleCard = ({ title, text, img, sector }) => {
  const [allPostData, setAllPostData] = useState(null);
  const { loading } = useSelector((store) => store.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "proyectos"] {
        gestion,
        content,
        name,
        mainImage{
          asset->{
            _id,
            url
          }
        }
      }`
      )
      .then((data) => {
        setAllPostData(data);
        dispatch(setLoadingStatusFalse());
      })
      .catch(console.error);
  }, [])
  // console.log(allPostData)

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Swiper
          
            slidesPerView={1}
            spaceBetween={0}
            // loop={false}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {allPostData &&
              allPostData.map((data, index) => (
                <SwiperSlide key={index}>
                  <section className="mainCircleCard" key={index}>
                    <section className="mainCircleCard__gestion">
                      <h2>{data.gestion}</h2>
                    </section>
                    <section className="mainCircleCard__img">
                      <figure>
                        <img src={data.mainImage.asset.url} alt="" />
                      </figure>
                    </section>
                    <section className="mainCircleCard__content">
                      <span className="mainCircleCard__title">{data.name}</span>
                      <p className="mainCircleCard__text">{data.content}</p>
                    </section>
                  </section>
                </SwiperSlide>
              ))}
          </Swiper>
        </>
      )}
    </>
  );
};

export default CircleCard;
