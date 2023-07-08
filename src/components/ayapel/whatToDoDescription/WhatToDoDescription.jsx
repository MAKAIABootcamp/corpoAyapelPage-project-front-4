import React, { useEffect, useState } from 'react';
import './whatToDoDescription.scss';
import ContactCard from '../whatToDo/contactCard/ContactCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';
import { truncateText } from '../../../utils/shortText';
//import client from '../../../../sanity/client';


const WhatToDoDescription = ({ activeIndex, allPostData }) => {

  console.log(allPostData[0].componentSwiper)
  console.log('holaaaa')


  console.log(activeIndex);

  return (
    <>
      <article className="whatToDoDescription__div">
        <article className="whatToDoDescription__container">
          <div className="whatToDoDescription__containerBg">
            <div
              className="whatToDoDescription__container__background"
              style={{
                backgroundImage: allPostData ? `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${allPostData[activeIndex].backgroundImage.asset.url})` : '',
              }}

            >
              {allPostData[activeIndex]?.title}
            </div>
          </div>

          <div className="whatToDoDescription__container__text">
            <p>{truncateText(allPostData[activeIndex]?.text, 200)}</p>
          </div>

          <div className="no">

            <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
              {allPostData[activeIndex].componentSwiper.map((contact, index) => (
                <SwiperSlide index={index}>
                  <ContactCard

                  name={contact?.name}
                  cellPhone={contact?.cellPhone}
                  address={contact?.address}
                  image={contact?.image?.asset?.url || ''}
                  instagram={contact?.instagram}
                  facebook={contact?.facebook}
                  whatsapp={contact?.whatsapp}
                /></SwiperSlide>
              ))}

            </Swiper>
          
          </div>
        </article>
      </article>
    </>
  );
};

export default WhatToDoDescription;
