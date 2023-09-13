import React, { useContext, useState } from "react";
import getComponent from "./compsId";
import { DragDropContext } from "../Context/DragDropContext";

export default function MidArea() {
  const { globalState, setGlobalState } = useContext(DragDropContext);

  const [state, setState] = useState(globalState);

  console.log("MidArea Called...");

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const data = JSON.parse(e.dataTransfer.getData("text/plain"));
    setState([...state, data]);
    setGlobalState(state);
  };

  return (
    <div
      className="flex-1 h-full overflow-auto px-[10rem] py-10 flex flex-col gap-1"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {state.map((item) => getComponent(item))}
    </div>
  );
}
