import React, { useContext, useEffect, useState } from "react";
import CatSprite from "./CatSprite";
import "./CatSprite.css";
import { DragDropContext } from "../Context/DragDropContext";
import { GlobalStyleContext } from "../Context/GlobalStyle";
import { getStyle } from "./StartAnimation";

export default function PreviewArea() {
  const { globalState, setGlobalState } = useContext(DragDropContext);
  const { globalStyle, setGlobalStyle } = useContext(GlobalStyleContext);

  const [style, setStyle] = useState({
    transition: "all 1s",
    position: "absolute",
    top: "10px",
    left: "10px",
  });

  useEffect(() => {
    // setStyle(getStyle(globalState, globalStyle, setGlobalStyle));
    getStyle(globalState, globalStyle, setGlobalStyle);
    globalStyle.map((item) =>
      setStyle((prev) => {
        return { ...prev, ...item };
      })
    );
    console.log("Style : ", style);
  }, [globalState]);

  return (
    <div className="flex-none h-[100%] w-full overflow-y-auto p-2 relative">
      <CatSprite style={style} />
    </div>
  );
}
