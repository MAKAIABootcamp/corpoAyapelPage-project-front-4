import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './mainFloraAndFauna.scss';
import client from '../../../sanity/client';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingStatusFalse } from '../../../redux/actions/actions';
import Loader from '../../appLoader/Loader';

const MainFloraAndFauna = () => {
  const swiperStyle = {
    width: '100%',
    paddingTop: '50px',
    paddingBottom: '50px',
  };

  const swiperSlideStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '300px',
    height: '300px',
  };

  const swiperSlideImgStyle = {
    display: 'block',
    width: '100%',
  };

  const { loading } = useSelector((store) => store.loading);
  const dispatch = useDispatch();

  const [allPostData, setAllPostData] = useState(null);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "floraAndFauna"] {
            title,
            text,
            imageCollection[]{
              image {
                asset->{
                  _id,
                  url
                }
              }
            },  
          }`
      )
      .then((data) => {
        setAllPostData(data);
        dispatch(setLoadingStatusFalse());
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <div className="mainFloraAndFauna__container">
          <div>
            <p className="mainFloraAndFauna__container__title">
              {allPostData ? allPostData[0]?.title : ''}
            </p>
          </div>
          <div className="">
            <div className="mainFloraAndFauna__container__list">
              {allPostData ? (
                allPostData[0]?.text.map((text) => (
                  <ul key={text._key}>
                    <li>{text.text}</li>
                  </ul>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <div>
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
              style={swiperStyle}
            >
              {allPostData &&
                allPostData[0]?.imageCollection.map((image) => (
                  <SwiperSlide key={image._key} style={swiperSlideStyle}>
                    <img
                      src={image?.image?.asset?.url}
                      alt="Post Image"
                      style={swiperSlideImgStyle}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default MainFloraAndFauna;
