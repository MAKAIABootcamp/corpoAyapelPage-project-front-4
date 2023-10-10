import React from "react";
import Bannerwhatwedo from "../../components/Bannerwhatwedo/Bannerwhatwedo";
import "./TestOne.scss"
import TextProjects from "../../components/TextProjects/TextProjects";
import EconomicManagement from "../../components/EconomicManagement/EconomicManagement";
import EnvironmentalManagement from "../../components/EnvironmentalManagement/EnvironmentalManagement";
import SocialManagement from "../../components/SocialManagement/SocialManagement";
import OtherFooter from "../../components/OtherFooter/OtherFooter";
import { useEffect } from "react";
import { useState } from "react";
import client from "../../sanity/client";


const WhatWeDo = () => {

  const [backgroundData, setBackgroundData] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "paginas" && titulo == "Que Hacemos"]  {
          titulo,
          fondos[]{
            asset->{
              url
            }
          }
        }`
      )
      .then((data) => setBackgroundData(data))
      .catch(console.error);
  }, []);

  const mapBackGround = backgroundData.map((background) => {
    return background;
  });
  console.log(mapBackGround)


  return (
    <>
      <main className="WhatPage">
        <div className="div">
          <Bannerwhatwedo />
        </div>
        <div className="div">
          <TextProjects BackGroundImage={{
            backgroundImage: `url('${mapBackGround[0]?.fondos[0]?.asset.url}')`,
          }} />
        </div>
        <div className="div">
          <EconomicManagement BackGroundImage={{
            backgroundImage: `url('${mapBackGround[0]?.fondos[1]?.asset.url}')`,
          }}/>
        </div>
        <div className="div">
          <EnvironmentalManagement BackGroundImage={{
            backgroundImage: `url('${mapBackGround[0]?.fondos[2]?.asset.url}')`,
          }}/>
        </div>
        <div className="div">
        <SocialManagement BackGroundImage={{
            backgroundImage: `url('${mapBackGround[0]?.fondos[3]?.asset.url}')`,
          }}/>
        </div>
        <div className="div">
        <OtherFooter />
        </div>
      </main>
    </>
  );
};

export default WhatWeDo;
