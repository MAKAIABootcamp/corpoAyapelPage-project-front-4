import React from "react";
import "./Footer.scss";
import ButtonActions from "../ButtonActions/ButtonActions";
//import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';
import {FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa"
import { Link } from "react-router-dom";
import HubspotContactForm from "../hubspotContactForm/HubspotContactForm";

const Footer = () => {
//   const { loaded, error, formCreated } = useHubspotForm({
//     region:"na1",
//     portalId: "40152509",
//     formId: "9b378b3a-c3fd-45fb-b429-af5f68038ab4",
//     target: '#my-hubspot-form'
// });



// console.log(loaded, error, formCreated)
// console.log(useHubspotForm)

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
                <Link to={'/cultura'}>Corporativo</Link>
                <Link to={'/que-hacemos'}>Nuestros proyectos</Link>
              </ul>
              <ul className="mainFooter__ul">
                <Link to={'/documentos'} className="bold">Documentos</Link>
                <Link to={'/pqr'}>PQR</Link>
              </ul>
              <ul className="mainFooter__ul">
              <Link to={'/como-ayudar'} className="bold">¿Cómo puedo ayudar?</Link>
              <Link to={'/donaciones'}>Donaciones</Link>
              <Link to={'https://corpoayapelartesanias.com/'} >Artesanias</Link>
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
     
       <section>
       <HubspotContactForm id={"40813403"} idForm={"4d545a4d-5f25-4134-badd-0ac920662be3"} targetForm={'#hubspotForm'} />
       <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>

       </section>
       </section>
      </main>
    </div>
  );
};

export default Footer;
