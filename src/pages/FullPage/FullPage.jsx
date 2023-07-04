import React from "react";
import Home from "../Home/Home";
import "./FullPage.scss";
import Donations from "../Donations/Donations";
import Navbar from "../../components/Navbar/Navbar";
import WeAre from "../../components/WeAre/WeAre";
import OurProjects from "../../components/OurProjects/OurProjects";

const FullPage = () => {
  return (
    <main className="container">
      <div>
        <Home />
      </div>
      <div>
        <WeAre />
      </div>
      <div>
        <OurProjects />
      </div>
    </main>
  );
};

export default FullPage;
