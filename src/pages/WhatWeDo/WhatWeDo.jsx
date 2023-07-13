import React from "react";
import Bannerwhatwedo from "../../components/Bannerwhatwedo/Bannerwhatwedo";
import CardWhatWeDo from "../../components/CardWhatWeDo/CardWhatWeDo";
// import "../FullPage/FullPage.scss"
import TextProjects from "../../components/TextProjects/TextProjects";


const WhatWeDo = () => {
  return (
    <>
      <main className="container">
        <div>
          <Bannerwhatwedo />
        </div>
        <div>
          <TextProjects />
        </div>
        <div>
          <CardWhatWeDo />
        </div>
      </main>
    </>
  );
};

export default WhatWeDo;
