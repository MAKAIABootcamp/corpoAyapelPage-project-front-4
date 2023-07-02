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
            <h2>Nuestros Proyectos</h2>
          </section>
          <span className="texto">Trabajamos bajo tres líneas estratégicas: social, ambiental y económica.</span>
          <section className="mainProjects__cards">
            <CircleCard img={'https://res.cloudinary.com/dgnwqr93n/image/upload/v1688243725/galeria-3-1_ptinyb.jpg'} title={'CULTIVA: mente, cuerpo y alma'} text={'Nuestras voluntarias promueven un programa de transformación basado en valores, cultura de paz, inclusión social y respeto, con el objetivo de construir una comunidad trascendente. '}  sector={'Social'}/>
            <CircleCard img={'https://res.cloudinary.com/dgnwqr93n/image/upload/v1688243724/galeria-2-2_qkwfqw.jpg'} title={'Ayapel sin Basuras'} text={'Ayapel sin Basuras es un programa comunitario que promueve la recolección y reciclaje sostenible de residuos plásticos en la ciénaga.'} sector={'Ambiental'}/>
            <CircleCard img={'https://res.cloudinary.com/dgnwqr93n/image/upload/v1688243724/galeria-2-1_nite6z.jpg'} text={'Durante años, capacitamos a los habitantes de El Cedro, Ayapel, en la creación de artesanías con palma de seje, brindando una segunda oportunidad y una fuente de ingresos digna.'} title={'Artesanias'} sector={'Economica'}/>
          </section>
        </main>
      </div>
    </div>
  );
};

export default OurProjects;
