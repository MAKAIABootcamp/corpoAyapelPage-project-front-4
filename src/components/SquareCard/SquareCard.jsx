import React, { useEffect, useState } from "react";
import './SquareCard.scss'
import client from "../../sanity/client";
import { AiFillEye } from "react-icons/ai";
import {GoShare} from "react-icons/go"
import { Link } from "react-router-dom";
import { truncateText } from "../../utils/shortText";
import BlockContent from "@sanity/block-content-to-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const SquareCard = ({title, text, img, sector}) => {
  const [newsData, setAllnewsData] = useState(null)
  useEffect(() => {
    client
      .fetch(
        `*[_type == "novedades"] {
        title,
        body,
        slug,
        publishedAt,
        name,
        preview,
        mainImage{
          asset->{
            _id,
            url
          }
        }
      }`
      )
      .then((data) => setAllnewsData(data))
      .catch(console.error)
      
  }, [])
  // console.log(newsData)
  if (!newsData){
    <div>Loading...</div>
  }
  return (
    <>
    <Swiper
        slidesPerView={1}
        spaceBetween={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
         breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        
    {newsData && newsData.map((data, index) => (
      <SwiperSlide>

    <section className="mainSquareCard" key={index}>
        <section className="mainSquareCard__img">
          <figure>
            <img src={data.mainImage.asset.url} alt="" />
          </figure>
        </section>
        <section className="mainSquareCard__content">
          <span className="mainSquareCard__title">{data.title}</span>
          <p className="mainSquareCard__text">{data.preview}</p>
          <section className="mainSquareCard__buttons">
          <Link to={"novedades/" + data.slug.current} key={data.slug.current}>
          <button className="mainSquareCard__view"><AiFillEye/></button>
          </Link>
          <button className="mainSquareCard__share"><GoShare/></button>
          </section>
        </section>
      
  </section>
  </SwiperSlide>

  ))}
      </Swiper>

  </>
  );
};

export default SquareCard;
