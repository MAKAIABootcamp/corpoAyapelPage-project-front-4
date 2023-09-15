import React from "react";
import CircleCard from "../CircleCard/CircleCard";
import "./OurProjects.scss";
const OurProjects = ({BackGroundImage}) => {
  return (
    <div className="background-3" style={BackGroundImage}>
      <div className="mainProjects">
        <main className="mainProjects__container">
          <section className="mainProjects__title">
            <h2>Líneas estratégicas</h2>
          </section>
          {/* <span className="texto">Trabajamos bajo tres líneas estratégicas: social, ambiental y económica.</span> */}
          <section className="mainProjects__cards">
            <CircleCard/>
          </section>
        </main>
      </div>
    </div>
  );
};

export default OurProjects;
