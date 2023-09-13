import React from "react";
import { handleDragStart } from "../DragEvents";
import { generateUniqueID } from "../StartAnimation";

const Show = () => {
  return (
    <div
      className="flex flex-row flex-wrap bg-pink-500 text-white px-2 py-1  text-sm cursor-pointer rounded w-[90%] looks"
      id="look3"
      draggable
      onDragStart={(e) =>
        handleDragStart(e, { index: generateUniqueID(), id: "SHOW" })
      }
    >
      {"Show"}
    </div>
  );
};

export default Show;
