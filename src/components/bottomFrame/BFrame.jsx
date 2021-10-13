// import { useState } from "react";
import "./bFrame.css";
import ControlBlock from "../controlBlock/ControlBlock";
import ScriptBlock from "../scriptBlock/ScriptBlock";

const BFrame = ({
  addBlock,
  vxCheck,
  bpm,
  setBpm,
  volume,
  setVolume,
  loop,
  setLoop,
  setAction,
}) => {
  return (
    <div className="BFrame">
      <ControlBlock
        addBlock={addBlock}
        bpm={bpm}
        setBpm={setBpm}
        volume={volume}
        setVolume={setVolume}
        loop={loop}
        setLoop={setLoop}
        setAction={setAction}
      />
      <ScriptBlock vxCheck={vxCheck} />
    </div>
  );
};

export default BFrame;
