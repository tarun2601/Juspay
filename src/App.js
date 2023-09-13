import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Header from "./components/Header";

import { DragDropContext } from "./Context/DragDropContext";
import { GlobalStyleContext } from "./Context/GlobalStyle";

export default function App() {
  const [globalState, setGlobalState] = useState([]);
  const [globalStyle, setGlobalStyle] = useState([{ transition: "all 1s" }]);

  return (
    <DragDropContext.Provider value={{ globalState, setGlobalState }}>
      <GlobalStyleContext.Provider value={{ globalStyle, setGlobalStyle }}>
        <div className="bg-blue-100 font-sans relative">
          <Header />
          <div className=" overflow-auto flex flex-row h-[92vh] mt-3">
            <div className="flex-1 h-[100%] overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
              <Sidebar id={"sidebar"} /> <MidArea id={"midarea"} />
            </div>
            <div className="w-1/3 h-[100%] overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
              <PreviewArea />
            </div>
          </div>
        </div>
      </GlobalStyleContext.Provider>
    </DragDropContext.Provider>
  );
}
