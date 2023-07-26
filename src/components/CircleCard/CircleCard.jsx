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
import { actionGetDataAsync } from "../../redux/actions/dataActions";
const CircleCard = ({ title, text, img, sector }) => {
  const [allPostData, setAllPostData] = useState(null);
  const { loading } = useSelector((store) => store.loading);
  const { data } = useSelector((store) => store.data);
  const dispatch = useDispatch();
  const fields = [
      "gestion",
      "content",
      "name",
      `mainImage{
          asset->{
              _id,
              url
          }
      }
      `,
  ];

  useEffect(() => {
      dispatch(actionGetDataAsync("proyectos", fields));
  }, [dispatch]);


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
            {data[3].proyectos &&
              data[3].proyectos.map((data, index) => (
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
