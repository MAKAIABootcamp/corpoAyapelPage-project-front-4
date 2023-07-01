import React from "react";
import "./WeAre.scss";
import ButtonActions from "../ButtonActions/ButtonActions";
const WeAre = () => {
  return (
    <div className="background-2">

    <div className="mainWeAre">
      <main className="mainWeAre__container">
        <section className="mainWeAre__title">
          <h2>Nosotros Somos</h2>
        </section>
        <section className="mainWeAre__text">
          <p>
            Entidad sin ánimo de lucro que promueve el desarrollo sostenible del
            complejo cenagoso de Ayapel y de su comunidad. Trabajamos bajo tres
            líneas estratégicas: social, ambiental y económica.
          </p>
        </section>
        <section className="mainWeAre__buttons">
            <ButtonActions label={'Ver mas'}/>
            <ButtonActions label={'Nuestra cultura'}/>
        </section>
      </main>
    </div>
    </div>
  );
};

export default WeAre;
