import React from "react";
import "./CardWhatWeDo.scss";

export default function CardWhatWeDo() {
  const images =
    "https://corpoayapel.org/wp-content/uploads/2020/01/galeria-3-2.jpg";
  const containerStyle = {
    backgroundImage: `url(https://res.cloudinary.com/dgnwqr93n/image/upload/v1688153550/slide-1_fgfpri.jpg)`,
  };

  const background =
    "https://res.cloudinary.com/dgnwqr93n/image/upload/v1688153550/slide-1_fgfpri.jpg";

  return (
    <>
      <div className="content">
        <div className="content__one">
          <div className="title">
            <h2>
              <span>Qué</span> hacemos
            </h2>
            <p>
              Una entidad sin ánimo de lucro que promueve el desarrollo
              sostenible del complejo cenagoso de Ayapel y de su comunidad.
            </p>
            <p>
              Trabajamos bajo tres líneas estratégicas: social, ambiental y
              económica.
            </p>
          </div>
          <div className="contentImg">
            <img
              src="https://yt3.googleusercontent.com/-H4bsnS3lUHCiaDtVcHxm9dJudoCyLdjnBCaIJZSsMJPNqIJFZFqs5iaTx0OjZcxwwCxycfEnA=s900-c-k-c0x00ffffff-no-rj"
              alt="QueHacemos"
            />
          </div>
        </div>

        <div
          className="content__img"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="contentAmbiental">
            <h2>
              Gestión <span>ambiental</span>
            </h2>

            <h3>Ayapel sin Basuras</h3>
            <p>
              Ayapel sin Basuras, es un programa sostenible y comunitario que
              intenta solucionar uno de los principales contaminantes de la
              ciénaga: el plástico. Queremos ser un actor principal y activo en
              la recolección y aprovechamiento de los residuos reciclables para
              lo cual contamos con sistema de recolección de residuos y una
              planta de compactación de PET. Recogemos en promedio 1.000 kl de
              material reciclable para darle su destinación adecuada.
            </p>
          </div>
        </div>
      </div>

      <div className="contentnone">
        <div>
          <div className="contentnone__img" style={containerStyle}>
            <div className="textAmbiental">
              <h2>
                Gestión <span>ambiental</span>
              </h2>

              <h3>Ayapel sin Basuras</h3>
              <p>
                Ayapel sin Basuras, es un programa sostenible y comunitario que
                intenta solucionar uno de los principales contaminantes de la
                ciénaga: el plástico. Queremos ser un actor principal y activo
                en la recolección y aprovechamiento de los residuos reciclables
                para lo cual contamos con sistema de recolección de residuos y
                una planta de compactación de PET. Recogemos en promedio 1.000
                kl de material reciclable para darle su destinación adecuada.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div
            className="contentnone__img"
            style={{
              backgroundImage: `url(${images})`,
            }}
          >
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
