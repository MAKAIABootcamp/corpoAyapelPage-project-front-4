import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./OtherFooter.scss";

const OtherFooter = () => {
  return (
    <div className="Footer">
      <main className="main__Footer">
        <section className="Footer__Logo">
          <figure>
            <img
              src="https://res.cloudinary.com/dgnwqr93n/image/upload/v1688432976/logo-blanco_x4th99.svg"
              alt="Logo Ayapel"
            />
          </figure>
          <section className="Footer__colums">
            <section className="mainFooter__colums-content">
              <ul className="mainFooter__ul">
                <Link to={"/nosotros"} className="bold">
                  Nosotros
                </Link>
                <Link to={"/historia"}>Historia</Link>
                <Link to={"/cultura"}>Corporativo</Link>
                <Link to={"/que-hacemos"}>Nuestros proyectos</Link>
              </ul>
              <ul className="mainFooter__ul">
                <Link to={"/documentos"} className="bold">
                  Documentos
                </Link>
                <Link to={"/pqr"}>PQR</Link>
              </ul>
              <ul className="mainFooter__ul">
                <Link to={"/como-ayudar"} className="bold">
                  ¿Cómo puedo ayudar?
                </Link>
                <Link to={"/donaciones"}>Donaciones</Link>
                <Link to={"https://corpoayapelartesanias.com/"}>
                  Artesanias
                </Link>
              </ul>
            </section>
          </section>
          <section className="mainFooter__social">
            <ul>
              <Link to={"https://www.facebook.com/CorppAyapel/"}>
                <FaFacebook /> Facebook
              </Link>
              <Link to={"https://www.instagram.com/corpoayapel/"}>
                <FaInstagram /> Instagram
              </Link>
              <Link to={"https://www.youtube.com/user/CorpoAyapel"}>
                <FaYoutube /> Youtube
              </Link>
            </ul>
          </section>
        </section>

        <section className="Footer__Logo2">
          <section className="Footer__colums2">
            <figure>
              <img
                src="https://res.cloudinary.com/dgnwqr93n/image/upload/v1688432976/logo-blanco_x4th99.svg"
                alt="Logo Ayapel"
              />
            </figure>
            <section className="mainFooter__colums-content2">
              <ul className="mainFooter__ul">
                <Link to={"/nosotros"} className="bold">
                  Nosotros
                </Link>
                <Link to={"/historia"}>Historia</Link>
                <Link to={"/cultura"}>Corporativo</Link>
                <Link to={"/que-hacemos"}>Nuestros proyectos</Link>
              </ul>
              <ul className="mainFooter__ul">
                <Link to={"/documentos"} className="bold">
                  Documentos
                </Link>
                <Link to={"/pqr"}>PQR</Link>
              </ul>
              <ul className="mainFooter__ul">
                <Link to={""} className="bold">
                  ¿Cómo puedo ayudar?
                </Link>
              </ul>
            </section>
          </section>
          <section className="mainFooter__social2">
            <ul>
              <Link to={"https://www.facebook.com/CorppAyapel/"}>
                <FaFacebook /> Facebook
              </Link>
              <Link to={"https://www.instagram.com/corpoayapel/"}>
                <FaInstagram /> Instagram
              </Link>
              <Link to={"https://www.youtube.com/user/CorpoAyapel"}>
                <FaYoutube /> Youtube
              </Link>
            </ul>
          </section>
        </section>
      </main>
    </div>
  );
};

export default OtherFooter;
