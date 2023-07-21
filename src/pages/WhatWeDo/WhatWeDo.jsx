import React from "react";
import Bannerwhatwedo from "../../components/Bannerwhatwedo/Bannerwhatwedo";
import CardWhatWeDo from "../../components/EnvironmentalManagement/EnvironmentalManagement";
import "./TestOne.scss"
import TextProjects from "../../components/TextProjects/TextProjects";
import EconomicManagement from "../../components/EconomicManagement/EconomicManagement";
import EnvironmentalManagement from "../../components/EnvironmentalManagement/EnvironmentalManagement";
import SocialManagement from "../../components/SocialManagement/SocialManagement";


const WhatWeDo = () => {
  return (
    <>
      <main className="WhatPage">
        <div className="div">
          <Bannerwhatwedo />
        </div>
        <div className="div">
          <TextProjects />
        </div>
        <div className="div">
          <EconomicManagement />
        </div>
        <div className="div">
          <EnvironmentalManagement />
        </div>
        <div className="div">
        <SocialManagement />
        </div>
      </main>
    </>
  );
};

export default WhatWeDo;
