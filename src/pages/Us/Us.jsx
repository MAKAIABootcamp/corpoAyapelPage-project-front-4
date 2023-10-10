import React, { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight} from "react-icons/fa";
import "./Us.scss";
import client from "../../sanity/client";
import { useEffect } from "react";
import Loader from "../../components/appLoader/Loader";

const Us = () => {
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(null);
  const [historyData, setHistoryData] = useState(null);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  useEffect(() => {
    client
      .fetch(
        `*[_type == "history"]  {
          items[]{
            historyImage {
              asset-> {
                url
              }
            },
            historyIndex,
            historyText,
            historyTitle,
          }
        }`
      )
      .then((data) => setHistoryData(data))
      .catch(console.error);
  }, []);

  const mapHistory = historyData?.map((history) => {
    return history;
  });

  return (
    <div className="container">
    <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
    <div id="slide" ref={slideRef }>
      {mapHistory && mapHistory.length > 0 ? (
        mapHistory[0].items.map((item) => (
          <div
            key={item.historyIndex}
            className="item"
            style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.436), rgba(0, 0, 0, 0.436)), url(${item.historyImage.asset.url})`,  backgroundRepeat: "no-repeat",backgroundSize: "cover", backgroundPosition: "center", }}
          >
            <div className="content">
              <div className="name">{item.historyTitle}</div>
              {/* <div className="name">{index}</div> */}
              <div className="des">{item.historyText}</div>
            </div>
          </div>
        ))
      ) : (
        <Loader/>
      )}
    </div>
    <div className="buttons">
      <button id="prev" onClick={handleClickPrev}>
        <FaAngleLeft/>
      </button>
      <button id="next" onClick={handleClickNext}>
        <FaAngleRight/>
      </button>
    </div>
  </div>
  );
};

export default Us;