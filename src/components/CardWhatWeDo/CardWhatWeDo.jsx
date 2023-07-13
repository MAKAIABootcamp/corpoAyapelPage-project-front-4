import React, { useEffect, useState } from "react";
import "./CardWhatWeDo.scss";
import client from "../../sanity/client";
// import "../../pages/FullPage/FullPage.scss"


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

  return (
    <>
      <div className="content">
        {allPostData &&
          allPostData.map((data, index) => (
            <div
              className={`content__img ${
                index === 1 || index === 3 ? "content__img2" : ""
              }`}
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
