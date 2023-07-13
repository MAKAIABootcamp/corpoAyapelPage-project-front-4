import React from "react";
import CircleCard from "../CircleCard/CircleCard";
import "./OurProjects.scss";
import DonationButton from "../DonationButton/DonationButton";
import { Link } from "react-router-dom";
const OurProjects = () => {
  return (
    <div className="background-3">
      <div className="mainProjects">
        <main className="mainProjects__container">
          <section className="mainProjects__title">
            <h2>Nuestros proyectos</h2>
          </section>
          <span className="texto">Trabajamos bajo tres líneas estratégicas: social, ambiental y económica.</span>
          <section className="mainProjects__cards">
            <CircleCard/>
          </section>
        </main>
      </div>
    </div>
  );
};

export default OurProjects;
