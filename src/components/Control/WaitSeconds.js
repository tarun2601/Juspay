import React, { useContext, useState } from "react";
import { handleDragStart } from "../DragEvents";
import { DragDropContext } from "../../Context/DragDropContext";
import { generateUniqueID } from "../StartAnimation";

const WaitSeconds = ({ data }) => {
  const { globalState, setGlobalState } = useContext(DragDropContext);
  const [wait, setWait] = useState(data?.wait || 2);

  return (
    <div
      className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1  text-sm cursor-pointer rounded w-[90%]"
      onDragStart={(e) =>
        handleDragStart(e, {
          index: generateUniqueID(),
          id: "WAIT_SECONDS",
          wait,
        })
      }
      draggable
    >
      {"Wait "}
      <input
        type="text"
        className="w-[1.5rem] mx-2 rounded text-black text-center"
        value={wait}
        onChange={(e) => !isNaN(e.target.value) && setWait(e.target.value)}
        onFocus={(event) => event.target.select()}
      />
      {"seconds"}
    </div>
  );
};

export default WaitSeconds;
