import React from "react";
// import "../../pages/FullPage/FullPage.scss";
import "./TextProjects.scss";

const Test = () => {
  const background =
    "https://res.cloudinary.com/drrpq9vlk/image/upload/v1689263369/Corpoayapel_julio_2016-129_ol55za.jpg";

  return (
    <div>
      <div className="other">
        <div
          className="other__one"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="title">
            <h2>
              Nuestros <span>proyectos</span>
            </h2>
            <p>
            Somos una organización sin ánimo de lucro que desde hace 20 años trabaja por el desarrollo sostenible del complejo cenagoso y la comunidad de Ayapel.
            </p>
            <p>
            Nuestro modelo de gestión se lleva a cabo a través de iniciativas en tres líneas: Social, ambiental y económica, las cuales se articulan y fomentan la participación de toda la comunidad.
            </p>
          </div>
          <div className="contentImg">
            <img
              src="https://res.cloudinary.com/drrpq9vlk/image/upload/v1689034065/que-hacemos_twlkys.svg"
              alt="QueHacemos"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
