import React, { useEffect, useState } from "react";
import "./CardWhatWeDo.scss";
import client from "../../sanity/client";

export default function CardWhatWeDo() {
  const [allPostData, setAllPostData] = useState(null);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "gestion"] {
          content,
          content2,
          subcontent,
          textcontent,
        mainImage{
          asset->{
            _id,
            url
          }
        }
      }`
      )
      .then((data) => setAllPostData(data))
      .catch(console.error);
  }, []);
  // const background =
  //   "https://res.cloudinary.com/dgnwqr93n/image/upload/v1688153550/slide-1_fgfpri.jpg";

  // const background2 =
  //   "https://res.cloudinary.com/dgnwqr93n/image/upload/v1688430170/269982243_4667892963329024_8717849781660201760_n_drq3uv.jpg";

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
              src="https://res.cloudinary.com/drrpq9vlk/image/upload/v1689034065/que-hacemos_twlkys.svg"
              alt="QueHacemos"
            />
          </div>
        </div>

        {allPostData &&
          allPostData.map((data, index) => (
            <div
              className="content__img"
              key={index}
              style={{
                backgroundImage: `url(${data.mainImage.asset.url})`,
              }}
            >
              <div className="contentAmbiental">
                <h2>
                  {data.content} <span>{data.content2}</span>
                </h2>

                <h3>{data.subcontent}</h3>
                <p>{data.textcontent}</p>
              </div>
            </div>
          ))}

        {/* <div
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

        <div
          className="content__img2"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="contentGestion">
            <h2>
              Gestión <span>Social</span>
            </h2>

            <h3>Ayapel sin Basuras</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div
          className="content__img"
          style={{
            backgroundImage: `url(${background2})`,
          }}
        >
          <div className="contentAmbiental">
            <h2>
              Gestión <span>Economica</span>
            </h2>

            <h3>Ayapel sin Basuras</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div> */}
      </div>

      <div className="contentnone">
        <div>
          {allPostData &&
            allPostData.map((data, index) => {
              return (
                <div
                  className="contentnone__img"
                  key={index}
                  style={{
                    backgroundImage: `url(${data.mainImage.asset.url})`,
                  }}
                >
                  <div className="textAmbiental">
                    <h2>
                      {data.content} <span>{data.content2}</span>
                    </h2>

                    <h3>{data.subcontent}</h3>
                    <p>{data.textcontent}</p>
                  </div>
                </div>
              );
            })}
        </div>
        {/* <div>
          <div
            className="contentnone__img"
            style={{
              backgroundImage: `url(${background})`,
            }}
          >
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
              backgroundImage: `url(${background})`,
            }}
          >
            <div className="textAmbiental">
              <h2>
                Gestión <span>Social</span>
              </h2>

              <h3>Ayapel sin Basuras</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>

        <div>
          <div
            className="contentnone__img"
            style={{
              backgroundImage: `url(${background2})`,
            }}
          >
            <div className="textAmbiental">
              <h2>
                Gestión <span>Economica</span>
              </h2>

              <h3>Ayapel sin Basuras</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
