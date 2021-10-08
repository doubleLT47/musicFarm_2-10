import BFrame from "./components/bottomFrame/BFrame";
import "./app.css";
import MainFrame from "./components/mainFrame/MainFrame";
import { useState } from "react";
import Modal from "./components/modal/Modal";

const App = () => {
  const [blocks, setBlocks] = useState(["vocal", "harmony", "drums"]);

  const [deleteNumber, setDeleteNumber] = useState(null);
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

  const deleteBlock = (option, i) => {
    if (option === "delete") {
      const newBlocks = blocks.filter((block, index) => index !== i);
      setBlocks(newBlocks);
      setDeleteNumber(null);
    } else if (option === "cancel") {
      setDeleteNumber(null);
    }
  };
  return (
    <div className="app">
      <BFrame addBlock={addBlock} vxCheck={vxCheck} />
      <MainFrame
        setDeleteNumber={setDeleteNumber}
        blocks={blocks}
        vxCheck={vxCheck}
        setVxCheck={setVxCheck}
      />
      <Modal deleteNumber={deleteNumber} deleteEl={deleteBlock} />
    </div>
  );
};

export default App;
