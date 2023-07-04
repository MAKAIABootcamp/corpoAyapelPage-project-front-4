import React from "react";
import "./CardWhatWeDo.scss";

export default function CardWhatWeDo() {
  const images = "https://corpoayapel.org/wp-content/uploads/2020/01/galeria-3-2.jpg";
  const containerStyle = {
    backgroundImage: `url(https://corpoayapel.org/wp-content/uploads/2020/01/galeria-5-2.jpg)`,
  };
  return (
    <>
      <div className="content">
        <div className="row">
          <div className="column">
            <img
              src="https://corpoayapel.org/wp-content/uploads/2020/01/galeria-5-2.jpg"
              alt="Imagen 1"
            />
          </div>
          <div className="column">
            <p>
              Entidad sin ánimo de lucro que promueve el desarrollo sostenible
              del complejo cenagoso de Ayapel y de su comunidad.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <p>
              Entidad sin ánimo de lucro que promueve el desarrollo sostenible
              del complejo cenagoso de Ayapel y de su comunidad.
            </p>
          </div>
          <div className="column">
            <img
              src="https://corpoayapel.org/wp-content/uploads/2020/01/galeria-3-2.jpg"
              alt="Imagen 2"
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <img
              src="https://res.cloudinary.com/drrpq9vlk/image/upload/v1687021110/cld-sample-5.jpg"
              alt="Imagen 3"
            />
          </div>
          <div className="column">
            <p>
              Entidad sin ánimo de lucro que promueve el desarrollo sostenible
              del complejo cenagoso de Ayapel y de su comunidad.
            </p>
          </div>
        </div>
      </div>

      <div className="contentnone">
        <div>
          <div className="contentnone__img" style={containerStyle}>
            <p>
              Entidad sin ánimo de lucro que promueve el desarrollo sostenible
              del complejo cenagoso de Ayapel y de su comunidad.
            </p>
          </div>
        </div>

        <div>
          <div className="contentnone__img" style={{
              backgroundImage: `url(${images})`,
            }}>
            <p>
              Entidad sin ánimo de lucro que promueve el desarrollo sostenible
              del complejo cenagoso de Ayapel y de su comunidad.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
