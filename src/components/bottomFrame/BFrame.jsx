// import { useState } from "react";
import "./bFrame.css";
import ControlBlock from "../controlBlock/ControlBlock";
import ScriptBlock from "../scriptBlock/ScriptBlock";

const BFrame = ({ addBlock, vxCheck }) => {
  return (
    <div className="BFrame">
      <ControlBlock addBlock={addBlock} />
      <ScriptBlock vxCheck={vxCheck} />
    </div>
  );
};

export default BFrame;
