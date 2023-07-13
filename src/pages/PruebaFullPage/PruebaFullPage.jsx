import React from "react";
import Home from "../Home/Home";
import "./PruebaFullPage.scss";
import Donations from "../Donations/Donations";
import Navbar from "../../components/Navbar/Navbar";
import WeAre from "../../components/WeAre/WeAre";
import OurProjects from "../../components/OurProjects/OurProjects";
import News from "../../components/News/News";
import Footer from "../../components/Footer/Footer";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import { Helmet } from "react-helmet";
import pruebaComponente1 from "../../components/pruebaComponente1/pruebaComponente1";
import pruebaComponente2 from "../../components/pruebaComponente2/pruebaComponente2";
import Testimonials from "../../components/donations/testimonials/Testimonials";

const PruebaFullPage = () => {
  
  return (
    <main className="container">
      <div className="div">
      <Donations/>
      </div> 
      <div className="div">
       
      </div>
      <Helmet>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-na1.hs-scripts.com/40152509.js"
        ></script>
      </Helmet>
    </main>
  );
};

export default PruebaFullPage;
