import React from "react";
import CircleCard from "../CircleCard/CircleCard";
import "./News.scss";
import DonationButton from "../DonationButton/DonationButton";
import { Link } from "react-router-dom";
import SquareCard from "../SquareCard/SquareCard";
const News = () => {
  return (
    <div className="background-4">
      <div className="mainNews">
        <main className="mainNews__container">
          <section className="mainNews__title">
            <h2>Últimas Noticias</h2>
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
