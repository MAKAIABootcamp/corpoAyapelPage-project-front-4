import React, { useEffect, useState } from "react";
import "./TextProjects.scss";
import client from "../../sanity/client";

const Test = () => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "nuestrosProyecto"] {
          content,
          content2,
          text,
          textContent,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          mainImage2{
            asset->{
              _id,
              url
            }
          }
        }`
      )

      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="other">
        {postData &&
          postData.map((data, index) => (
            <div
              key={index}
              className="other__one"
              style={{
                backgroundImage: `url(${data.mainImage.asset.url})`,
              }}
            >
              <div className="title">
                <h2>
                  {data.content} <span>{data.content2}</span>
                </h2>
                <p>{data.text}</p>
                <p>{data.textContent}</p>
                <div></div>
              </div>
              <div className="contentImg">
                <img src={data.mainImage2.asset.url} alt="" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Test;
