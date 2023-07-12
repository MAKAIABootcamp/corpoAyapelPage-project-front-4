import React, { useEffect, useState } from "react";
import "./CardWhatWeDo.scss";
import client from "../../sanity/client";

export default function CardWhatWeDo() {
  const [allPostData, setAllPostData] = useState(null);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "gestion"] {
          content,
          content2,
          subcontent,
          textcontent,
        mainImage{
          asset->{
            _id,
            url
          }
        }
      }`
      )
      .then((data) => setAllPostData(data))
      .catch(console.error);
  }, []);
  // const background =
  //   "https://res.cloudinary.com/dgnwqr93n/image/upload/v1688153550/slide-1_fgfpri.jpg";

  // const background2 =
  //   "https://res.cloudinary.com/dgnwqr93n/image/upload/v1688430170/269982243_4667892963329024_8717849781660201760_n_drq3uv.jpg";

  return (
    <>
      <div className="content">
        <div className="content__one">
          <div className="title">
            <h2>
              <span>Qué</span> hacemos
            </h2>
            <p>
              Una entidad sin ánimo de lucro que promueve el desarrollo
              sostenible del complejo cenagoso de Ayapel y de su comunidad.
            </p>
            <p>
              Trabajamos bajo tres líneas estratégicas: social, ambiental y
              económica.
            </p>
          </div>
          <div className="contentImg">
            <img
              src="https://res.cloudinary.com/drrpq9vlk/image/upload/v1689034065/que-hacemos_twlkys.svg"
              alt="QueHacemos"
            />
          </div>
        </div>

        {allPostData &&
  allPostData.map((data, index) => (
    <div
    className={`content__img ${index === 1 || index === 3 ? "content__img2" : ""}`}

      key={index}
      style={{
        backgroundImage: `url(${data.mainImage.asset.url})`,
      }}
    >
      <div
        className={`${
          index === 1 ? "contentGestion" : "contentAmbiental"
        }`}
      >
        <h2>
          {data.content} <span>{data.content2}</span>
        </h2>

        <h3>{data.subcontent}</h3>
        <p>{data.textcontent}</p>
      </div>
    </div>
  ))}

      </div>

      <div className="contentnone">
        <div>
          {allPostData &&
            allPostData.map((data, index) => {
              return (
                <div
                  className="contentnone__img"
                  key={index}
                  style={{
                    backgroundImage: `url(${data.mainImage.asset.url})`,
                  }}
                >
                  <div className="textAmbiental">
                    <h2>
                      {data.content} <span>{data.content2}</span>
                    </h2>

                    <h3>{data.subcontent}</h3>
                    <p>{data.textcontent}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
