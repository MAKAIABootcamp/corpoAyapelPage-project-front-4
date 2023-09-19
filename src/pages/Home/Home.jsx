import React, { useState } from "react";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "./Home.scss";
import { Link } from "react-router-dom";
import DonationButton from "../../components/DonationButton/DonationButton";
import { Helmet } from "react-helmet";

const Home = ({BackGroundImage}) => {

  return (
<div className="background" style={BackGroundImage}>
      <Helmet title="Corpo Ayapel – Una entidad sin ánimo de lucro que promueve el desarrollo sostenible del complejo cenagoso de Ayapel y de su comunidad.  Trabajamos bajo tres líneas estratégicas: social, ambiental y económica."/>
      <main className="mainHome">
        <section className="mainHome__text">
          
          <p>
            Entidad sin ánimo de lucro que promueve el desarrollo sostenible del
            complejo cenagoso de Ayapel y de su comunidad. 
          </p>
          <Helmet>
            
          </Helmet>
        </section>
        <Link to={'/donaciones'}>
        <DonationButton/>
        </Link>
      </main>
      
    </div>
  );
};

export default Home;
