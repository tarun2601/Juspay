import React, { useContext, useState } from "react";
import { handleDragStart } from "../DragEvents";
import { DragDropContext } from "../../Context/DragDropContext";
import { generateUniqueID } from "../StartAnimation";

const Repeat = ({ data }) => {
  const { globalState, setGlobalState } = useContext(DragDropContext);
  const [repeat, setRepeat] = useState(data?.repeat || 10);

  return (
    <div
      className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1  text-sm cursor-pointer rounded w-[90%]"
      onDragStart={(e) =>
        handleDragStart(e, { index: generateUniqueID(), id: "REPEAT", repeat })
      }
      draggable
    >
      {"Repeat "}
      <input
        type="text"
        className="w-[1.5rem] mx-2 rounded text-black text-center"
        value={repeat}
        onChange={(e) => !isNaN(e.target.value) && setRepeat(e.target.value)}
        onFocus={(event) => event.target.select()}
      />
      {"Times"}
    </div>
  );
};

export default Repeat;
