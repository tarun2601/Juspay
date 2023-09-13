import React from "react";
import { useState } from "react";
import WaitSeconds from "./WaitSeconds";
import Repeat from "./Repeat";
import RepeatForever from "./RepeatForever";

const Control = () => {
  const [repeat, setRepeat] = useState(10);

  return (
    <>
      <div className="font-bold text-center w-[90%]"> {"Control"} </div>
      <WaitSeconds />
      <Repeat />
      <RepeatForever />
    </>
  );
};

export default Control;
