import React from "react";
import "./Footer.scss";
import ButtonActions from "../ButtonActions/ButtonActions";
import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';
import {FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa"
import { Link } from "react-router-dom";

const Footer = () => {
  const { loaded, error, formCreated } = useHubspotForm({
    region:"na1",
    portalId: "40152509",
    formId: "9b378b3a-c3fd-45fb-b429-af5f68038ab4",
    target: '#my-hubspot-form'
});
console.log(loaded, error, formCreated)
console.log(useHubspotForm)

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
          <section className="mainFooter__colums">
            <section className="mainFooter__colums-content">
              <ul className="mainFooter__ul">
                <Link to={'/nosotros'} className="bold">Nosotros</Link>
                <Link to={'/historia'}>Historia</Link>
                <Link to={''}>Corporativo</Link>
                <Link to={'/que-hacemos'}>Que hacemos</Link>
              </ul>
              <ul className="mainFooter__ul">
                <Link to={'/documentos'} className="bold">Documentos</Link>
                <Link to={'/pqr'}>PQR</Link>
              </ul>
              <ul className="mainFooter__ul">
                <Link to={'/ayapel'} className="bold">Destino: Ayapel</Link>
                <Link to={''}>Datos Importantes</Link>
                <Link to={''}>Ubicacion</Link>
                <Link to={''}>Que hacer en ayapel</Link>
                <Link to={''}>Flora y fauna</Link>
                <Link to={''} >¿Cómo puedo ayudar?</Link>
              </ul>
            </section>
       
          </section>
          <section className="mainFooter__social">
            <ul>
              <Link to={'https://www.facebook.com/CorppAyapel/'}> <FaFacebook/> Facebook</Link>
              <Link to={'https://www.instagram.com/corpoayapel/'}> <FaInstagram/> Instagram</Link>
              <Link to={'https://www.youtube.com/user/CorpoAyapel'}> <FaYoutube/> Youtube</Link>
            </ul>
           </section>
        </section>
        <section className="mainFooter__form">
       <section id="my-hubspot-form"></section>
       </section>
      </main>
    </div>
  );
};

export default Footer;
