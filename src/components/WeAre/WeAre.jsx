import React from "react";
import "./WeAre.scss";
import ButtonActions from "../ButtonActions/ButtonActions";
import DonationButton from "../DonationButton/DonationButton";
import { Link } from "react-router-dom";
const WeAre = () => {
  return (
    <div className="background-2">
      <main className="mainWeAre">
        <main className="mainWeAre__container">
          <section className="mainWeAre__title">
            <h2>Nosotros somos</h2>
          </section>
          <section className="mainWeAre__text">
            <p>
              Movidos por las enormes necesidades de este municipio, un grupo de
              benefactores del país, fundaron CorpoAyapel, una organización sin
              ánimo de lucro, que trabaja desde hace más de 16 años, por el
              desarrollo SOSTENIBLE de las comunidades asentadas en el área de
              influencia de la ciénaga de Ayapel. Durante estos años, se han
              construido alianzas público - privada para desarrollar el
              potencial del territorio y promover condiciones dignas que
              permitan la permanencia de sus habitantes a través de las
              siguientes líneas de acción: - Económica - Social - Ambiental
            </p>
          </section>
          <section className="mainWeAre__buttons">
            <ButtonActions label={"Ver más"} link={"/nosotros"} btn={true} />
            <ButtonActions
              label={"Nuestra cultura"}
              link={"/cultura"}
              btn={true}
            />
          </section>
        </main>
        <section className="mainWeAre__button">
          <Link to={"/donaciones"}>
            <DonationButton bottom={true} />
          </Link>
        </section>
      </main>
    </div>
  );
};

export default WeAre;
