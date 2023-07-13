import React from "react";
import "../../pages/FullPage/FullPage.scss"

const Test = () => {
  return (
    <div className="content__one div">
      <div className="title">
        <h2>
          <span>Nuestros</span> proyectos
        </h2>
        <p>
          Una entidad sin ánimo de lucro que promueve el desarrollo sostenible
          del complejo cenagoso de Ayapel y de su comunidad.
        </p>
        <p>
          Trabajamos bajo tres líneas estratégicas: social, ambiental y
          económica.
        </p>
      </div>
      <div className="contentImg">
        <img
          src="https://res.cloudinary.com/drrpq9vlk/image/upload/v1689034065/que-hacemos_twlkys.svg"
          alt="QueHacemos"
        />
      </div>
    </div>
  );
};

export default Test;
