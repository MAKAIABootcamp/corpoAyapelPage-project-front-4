import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import "./FullPage.scss";
import WeAre from "../../components/WeAre/WeAre";
import OurProjects from "../../components/OurProjects/OurProjects";
import News from "../../components/News/News";
import Footer from "../../components/Footer/Footer";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import { Helmet } from "react-helmet";
import client from "../../sanity/client";

const FullPage = () => {
  const [backgroundData, setBackgroundData] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "paginas" && titulo == "Home"]  {
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

  console.log(mapBackGround);

  return (
    <main className="container">
      <div className="div">
        <Home
          BackGroundImage={{
            backgroundImage: `url('${mapBackGround[0]?.fondos[0]?.asset.url}')`,
          }}
        />
      </div>

      <div className="div">
        <WeAre
          BackGroundImage={{
            backgroundImage: `url('${mapBackGround[0]?.fondos[1]?.asset.url}')`,
          }}
        />
      </div>
      <div className="div">
        <OurProjects
          BackGroundImage={{
            backgroundImage: `url('${mapBackGround[0]?.fondos[2]?.asset.url}')`,
          }}
        />
      </div>
      <div className="div">
        <News
          BackGroundImage={{
            backgroundImage: `url('${mapBackGround[0]?.fondos[3]?.asset.url}')`,
          }}
        />
      </div>
      <div className="div">
        <HubspotProvider>
          <Footer
            BackGroundImage={{
              backgroundImage: `url('${mapBackGround[0]?.fondos[4]?.asset.url}')`,
            }}
          />
        </HubspotProvider>
      </div>
      <Helmet>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-na1.hs-scripts.com/40813403.js"
        ></script>
      </Helmet>
    </main>
  );
};

export default FullPage;
