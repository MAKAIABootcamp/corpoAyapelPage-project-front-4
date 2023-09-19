import React, { useEffect, useState } from "react";
import "./SquareCard.scss";
import client from "../../sanity/client";
import { AiFillEye } from "react-icons/ai";
import { GoShare } from "react-icons/go";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const SquareCard = () => {
  const [newsData, setAllnewsData] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null); // Added state for selected card

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
      .catch(console.error);
  }, []);

  if (!newsData) {
    return <div>Loading...</div>; // Return loading state until news data is fetched
  }

  const handleShareClick = (index) => {
    setSelectedCard((prevSelectedCard) => {
      if (prevSelectedCard === index) {
        // Toggle the visibility of the share buttons if the same card is clicked again
        return null;
      } else {
        return index;
      }
    });
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        loop={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          390: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
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
        {newsData.map((data, index) => (
          <SwiperSlide key={index}>
            <section className="mainSquareCard" key={index}>
              <section className="mainSquareCard__img">
                <figure>
                  <img src={data.mainImage.asset.url} alt="" />
                </figure>
              </section>
              <section className="mainSquareCard__content" key={index}>
                <span className="mainSquareCard__title">{data.title}</span>
                <p className="mainSquareCard__text">{data.preview}</p>
                <section className="mainSquareCard__buttons">
                  <Link
                    to={"novedades/" + data.slug.current}
                    key={data.slug.current}
                  >
                    <button className="mainSquareCard__view">
                      <AiFillEye />
                    </button>
                  </Link>
                  <button
                    className="mainSquareCard__share"
                    onClick={() => handleShareClick(index)}
                  >
                    <GoShare />
                  </button>
                </section>
                {selectedCard === index && (
                  <div className={`share-buttons ${selectedCard === index ? 'show fade-in' : ''}`}>
                    <FacebookShareButton
                      url={`https://corpoayapel.org/novedades/${data.slug.current}`}
                      quote={newsData.title}
                      hashtag={"#corpoayapel"}
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <WhatsappShareButton
                      url={`https://corpoayapel.org/novedades/${data.slug.current}`}
                      title={newsData.title}
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <TwitterShareButton
                      url={`https://corpoayapel.org/novedades/${data.slug.current}`}
                      title={newsData.title}
                      hashtags={["corpoayapel"]}
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                  </div>
                  
                )}
              </section>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SquareCard;
