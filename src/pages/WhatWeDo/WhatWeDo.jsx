import React from "react";
import Bannerwhatwedo from "../../components/Bannerwhatwedo/Bannerwhatwedo";
import CardWhatWeDo from "../../components/CardWhatWeDo/CardWhatWeDo";

const WhatWeDo = () => {
  return (
    <>
      <main className="whatwedo">
        <div>
          <Bannerwhatwedo />
        </div>
        <div>
          <CardWhatWeDo />
        </div>
      </main>
    </>
  );
};

export default WhatWeDo;
