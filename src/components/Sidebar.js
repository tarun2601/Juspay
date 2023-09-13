import React, { useContext, useState } from "react";
import Icon from "./Icon";
import Events from "./Events";
import Motion from "./Motion/Motion";
import Looks from "./Looks/Looks";
import Controls from "./Control/Control";
import { DragDropContext } from "../Context/DragDropContext";

export default function Sidebar({ id }) {
  const { globalState, getGlobalState } = useContext(DragDropContext);
  console.log("globalState from Sidebar : ", globalState);
  return (
    <div className="w-60 h-[100%] py-3 border-r border-gray-200">
      <div className="h-[100%] overflow-y-auto flex flex-col items-start px-2 gap-2">
        <Events />
        <Motion />
        <Looks />
        <Controls />
      </div>
    </div>
  );
}
