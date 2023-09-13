import React from "react";
import { handleDragStart } from "../DragEvents";
import { generateUniqueID } from "../StartAnimation";

const RepeatForever = () => {
  return (
    <div
      className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1  text-sm cursor-pointer rounded w-[90%]"
      onDragStart={(e) =>
        handleDragStart(e, { index: generateUniqueID(), id: "REPEAT_FOREVER" })
      }
      draggable
    >
      {"Repeat Forever"}
    </div>
  );
};

export default RepeatForever;
