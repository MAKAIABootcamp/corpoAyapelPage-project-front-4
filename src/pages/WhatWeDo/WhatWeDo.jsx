import React from "react";
import Bannerwhatwedo from "../../components/Bannerwhatwedo/Bannerwhatwedo";
import CardWhatWeDo from "../../components/CardWhatWeDo/CardWhatWeDo";

const WhatWeDo = () => {
  return (
    <>
      <main className="whatwedo">
        <div id="section1">
          <Bannerwhatwedo />
        </div>
        <div id="section2">
          <CardWhatWeDo />
        </div>
      </main>
    </>
  );
};

export default WhatWeDo;
