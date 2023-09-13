import React from "react";
import Icon from "../Icon";
import { useState } from "react";
import MoveSteps from "./MoveSteps";
import TurnLeft from "./TurnLeft";
import TurnRight from "./TurnRight";
import PointInDirection from "./PointInDirection";

const Motion = () => {
  return (
    <>
      <div className="font-bold text-center w-[90%]"> {"Motion"} </div>
      <MoveSteps />
      <TurnLeft />
      <TurnRight />
      <PointInDirection />
    </>
  );
};

export default Motion;
