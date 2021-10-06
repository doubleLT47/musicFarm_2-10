import BFrame from "./components/bottomFrame/BFrame";
import "./app.css";
import MainFrame from "./components/mainFrame/MainFrame";
import { useState } from "react";

const App = () => {
  const [blocks, setBlocks] = useState(["vocal", "harmony", "drums"]);

  const [vxCheck, setVxCheck] = useState(null);

  const addBlock = (block) => {
    if (block === "drums") {
      const newBlocks = [...blocks, "drums"];
      setBlocks(newBlocks);
    } else if (block === "harmony") {
      const newBlocks = [...blocks, "harmony"];
      setBlocks(newBlocks);
    } else {
      const newBlocks = [...blocks, "vocal"];
      setBlocks(newBlocks);
    }
  };
  return (
    <div className="app">
      <BFrame addBlock={addBlock} vxCheck={vxCheck} />
      <MainFrame blocks={blocks} vxCheck={vxCheck} setVxCheck={setVxCheck} />
    </div>
  );
};

export default App;
