import React from "react";

import "./News.scss";

import SquareCard from "../SquareCard/SquareCard";
const News = ({BackGroundImage}) => {
  return (
    <div className="background-4" style={BackGroundImage}>
      <div className="mainNews">
        <main className="mainNews__container">
          <section className="mainNews__title">
            <h2>Últimas noticias</h2>
          </section>
          <span className="texto"></span>
          <section className="mainNews__cards">
            <SquareCard/>
          </section>
        </main>
      </div>
    </div>
  );
};

export default News;
