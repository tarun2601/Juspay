import React from "react";
import { useState } from "react";
import SayTextSecs from "./SayTextSecs";
import SayText from "./SayText";
import Show from "./Show";
import Hide from "./Hide";

const Looks = () => {
  return (
    <>
      <div className="font-bold text-center w-[90%]"> {"Looks"} </div>
      <SayTextSecs />
      <SayText />
      <Show />
      <Hide />
    </>
  );
};

export default Looks;
