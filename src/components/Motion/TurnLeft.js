import React, { useContext, useState } from "react";
import Icon from "../Icon";
import { handleDragStart } from "../DragEvents";
import { DragDropContext } from "../../Context/DragDropContext";
import { generateUniqueID } from "../StartAnimation";

const TurnLeft = ({ data }) => {
  const { globalState, setGlobalState } = useContext(DragDropContext);
  const [turnLeft, setTurnLeft] = useState(data?.turnLeft || 15);

  return (
    <div
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1  text-sm cursor-pointer rounded w-[90%]"
      onDragStart={(e) =>
        handleDragStart(e, {
          index: generateUniqueID(),
          id: "TURN_LEFT",
          turnLeft,
        })
      }
      draggable
    >
      {"Turn "}
      <Icon name="undo" size={15} className="text-white mx-2" />
      <input
        type="text"
        className="w-[1.5rem] mx-2 rounded text-black text-center"
        value={turnLeft}
        onChange={(e) => !isNaN(e.target.value) && setTurnLeft(e.target.value)}
        onFocus={(event) => event.target.select()}
      />
      {" degrees"}
    </div>
  );
};

export default TurnLeft;
