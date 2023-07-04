import React from "react";
import Home from "../Home/Home";
import "./FullPage.scss";
import Donations from "../Donations/Donations";
import Navbar from "../../components/Navbar/Navbar";
import WeAre from "../../components/WeAre/WeAre";
import OurProjects from "../../components/OurProjects/OurProjects";
import News from "../../components/News/News";
import Footer from "../../components/Footer/Footer";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import { Helmet } from "react-helmet";

const FullPage = () => {
  
  return (
    <main className="container">
      <div id="section1">
        <Home />
      </div>
      <div id="section2">
        <WeAre />
      </div>
      <div id="section3">
        <OurProjects />
      </div>
      <div id="section4">
        <News />
      </div>
      <div id="section5">
        <HubspotProvider>
          <Footer />
        </HubspotProvider>
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

export default FullPage;
