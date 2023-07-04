import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import Donations from "../Donations/Donations";
import Documents from "../Documents/Documents";
import "./Home.scss";
import { Link } from "react-router-dom";
import DonationButton from "../../components/DonationButton/DonationButton";

const Home = () => {
  return (
    <div className="background">
      <main className="mainHome">
        <section className="mainHome__text">
          <p>
            Entidad sin ánimo de lucro que promueve el desarrollo sostenible del
            complejo cenagoso de Ayapel y de su comunidad. 
          </p>
        </section>
        <Link to={'/donaciones'}>
        <DonationButton/>
        </Link>
      </main>
      {/* <ArrowScroll/> */}
    </div>
  );
};

export default Home;
