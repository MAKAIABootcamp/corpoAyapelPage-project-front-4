import React from "react";
import "./Footer.scss";
import ButtonActions from "../ButtonActions/ButtonActions";

const Footer = () => {
  return (
    <div className="background-5">
      <main className="mainFooter">
        <section className="mainFooter__logo">
          <figure>
            <img
              src="https://res.cloudinary.com/dgnwqr93n/image/upload/v1688432976/logo-blanco_x4th99.svg"
              alt="Logo Ayapel"
            />
          </figure>
          <section>
            
          </section>
        </section>
        <section className="mainFooter__form">
          <section className="mainFooter__form-title">
            <h2>Contactanos</h2>
          </section>
          <form>
            <section className="mainFooter__form-input">
              <label>Nombre</label>
              <input type="text" name="name" id="name" />
            </section>
            <section className="mainFooter__form-input">
              <label>Telefono</label>
              <input type="text" name="phone" id="phone" />
            </section>
            <section className="mainFooter__form-input">
              <label>Comentarios</label>
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
              ></textarea>
            </section>
            <section className="mainFooter__form-submit">
                <button>Enviar</button>
            </section>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Footer;
