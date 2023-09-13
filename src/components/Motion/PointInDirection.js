import React, { useContext, useState } from "react";
import { handleDragStart } from "../DragEvents";
import { DragDropContext } from "../../Context/DragDropContext";
import { generateUniqueID } from "../StartAnimation";

const PointInDirection = ({ data }) => {
  const { globalState, setGlobalState } = useContext(DragDropContext);
  const [pointInDirection, setPointInDirection] = useState(
    data?.pointInDirection || 90
  );

  return (
    <div
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1  text-sm cursor-pointer rounded w-[90%]"
      onDragStart={(e) =>
        handleDragStart(e, {
          index: generateUniqueID(),
          id: "POINT_IN_DIRECTION",
          pointInDirection,
        })
      }
      draggable
    >
      {"Point in Direction "}
      <input
        type="text"
        className="w-[1.5rem] mx-2 rounded text-black text-center"
        value={pointInDirection}
        onChange={(e) =>
          !isNaN(e.target.value) && setPointInDirection(e.target.value)
        }
        onFocus={(event) => event.target.select()}
      />
    </div>
  );
};

export default PointInDirection;
