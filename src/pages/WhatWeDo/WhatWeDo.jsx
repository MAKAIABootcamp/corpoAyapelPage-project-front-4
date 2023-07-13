import React from "react";
import Bannerwhatwedo from "../../components/Bannerwhatwedo/Bannerwhatwedo";
import CardWhatWeDo from "../../components/CardWhatWeDo/CardWhatWeDo";
import "../FullPage/FullPage.scss"
import Test from "../../components/test/Test";


const WhatWeDo = () => {
  return (
    <>
      <main className="container">
        <div className="div">
          <Bannerwhatwedo />
        </div>
        <div className="div">
          <Test />
        </div>
        <div className="div">
          <CardWhatWeDo />
        </div>
      </main>
    </>
  );
};

export default WhatWeDo;
