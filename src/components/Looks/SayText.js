import React, { useContext } from "react";
import { useState } from "react";
import { handleDragStart } from "../DragEvents";
import { DragDropContext } from "../../Context/DragDropContext";
import { generateUniqueID } from "../StartAnimation";

export default function SayText({ data }) {
  const { globalState, setGlobalState } = useContext(DragDropContext);
  const [sayText, setSayText] = useState(data?.sayText || "Hello!");

  return (
    <div
      className="flex flex-row flex-wrap bg-pink-500 text-white px-2 py-1  text-sm cursor-pointer rounded w-[90%] looks"
      id="look2"
      draggable
      onDragStart={(e) =>
        handleDragStart(e, {
          index: generateUniqueID(),
          id: "SAY_TEXT",
          sayText,
        })
      }
    >
      {"Say "}
      <input
        type="text"
        className="w-[3rem] mx-2 rounded text-black text-center"
        value={sayText}
        onFocus={(event) => event.target.select()}
        onChange={(e) => setSayText(e.target.value)}
      />
    </div>
  );
}
