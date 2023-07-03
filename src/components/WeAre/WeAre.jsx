import React from "react";
import "./WeAre.scss";
import ButtonActions from "../ButtonActions/ButtonActions";
import DonationButton from "../DonationButton/DonationButton";
import { Link } from "react-router-dom";
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo modi
              iusto ipsam error quia odit quos facere voluptatum cumque? Earum
              numquam alias reiciendis porro quas et, ipsam saepe vitae
              excepturi! Repudiandae fuga incidunt, modi facilis amet numquam
              eveniet atque tempora cupiditate adipisci! Aperiam, omnis. Atque
              fugiat ratione deserunt praesentium eum adipisci reiciendis maxime
              voluptate, ad cum molestias! Mollitia, ullam quae? Assumenda
              voluptatibus expedita architecto odio aspernatur odit natus
              delectus, alias et eligendi perferendis distinctio nemo autem at,
              quam in aperiam! Quidem provident illum officia veritatis illo
              voluptatibus earum qui! Provident.
            </p>
          </section>
          <section className="mainWeAre__buttons">
            <ButtonActions label={"Ver mas"} link={'/nosotros'} btn={true}/>
            <ButtonActions label={"Nuestra Cultura"} link={'/cultura'} btn={true}/>
          </section>
        </main>
      </div>
      <section className="mainWeAre__btn-donacion">
        <Link to={"/donaciones"}>
          <DonationButton bottom={true} />
        </Link>
      </section>
    </div>
  );
};

export default WeAre;
