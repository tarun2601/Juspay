import React, { useContext, useState } from "react";
import { handleDragStart } from "../DragEvents";
import { DragDropContext } from "../../Context/DragDropContext";
import { generateUniqueID } from "../StartAnimation";

const MoveSteps = ({ data }) => {
  const { globalState, setGlobalState } = useContext(DragDropContext);
  const [steps, setSteps] = useState(data?.steps || 10);

  return (
    <div
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1  text-sm cursor-pointer rounded w-[90%]"
      draggable
      onDragStart={(e) =>
        handleDragStart(e, {
          index: generateUniqueID(),
          id: "MOVE_STEPS",
          steps,
        })
      }
    >
      Move{" "}
      <input
        type="text"
        className="w-[1.5rem] mx-2 rounded text-black text-center"
        value={steps}
        onChange={(e) => !isNaN(e.target.value) && setSteps(e.target.value)}
        onFocus={(event) => event.target.select()}
      />{" "}
      Steps
    </div>
  );
};

export default MoveSteps;
