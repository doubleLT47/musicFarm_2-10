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
  playLoop,
  stopLoop,
}) => {
  return (
    <div className="BFrame">
      <ControlBlock
        addBlock={addBlock}
        bpm={bpm}
        setBpm={setBpm}
        loop={loop}
        setLoop={setLoop}
        playLoop={playLoop}
        stopLoop={stopLoop}
      />
      <ScriptBlock vxCheck={vxCheck} 
        volume={volume}
        setVolume={setVolume} />
    </div>
  );
};

export default BFrame;
