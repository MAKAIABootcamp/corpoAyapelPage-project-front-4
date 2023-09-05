import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import Donations from "../Donations/Donations";
import Documents from "../Documents/Documents";
import "./Home.scss";
import { Link } from "react-router-dom";
import DonationButton from "../../components/DonationButton/DonationButton";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
<div className="background" style={{backgroundImage: `url('https://res.cloudinary.com/dgnwqr93n/image/upload/q_100/v1689218731/_MG_9667_eujqjn.webp')`}}>
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
