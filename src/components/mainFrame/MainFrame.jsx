import { useState } from "react";
import VocalBlock from "../vocalBlock/VocalBlock";
import HarmonyBlock from "../harmonyBlock/HarmonyBlock";
import DrumsBlock from "../drumsBlock/DrumsBlock";
import "./main.css";

const block = { drums: DrumsBlock, harmony: HarmonyBlock, vocal: VocalBlock };

const MainFrame = ({ blocks, vxCheck, setVxCheck }) => {
  const [redCheck, setRedCheck] = useState(null);
  return (
    <div className="mainFrame">
      {blocks.map((el, index) => {
        const Block = block[el];
        return Block ? (
          <Block
            index={index + 1}
            key={index}
            vxCheck={vxCheck}
            setVxCheck={setVxCheck}
            redCheck={redCheck}
            setRedCheck={setRedCheck}
          />
        ) : null;
      })}
    </div>
  );
};

export default MainFrame;
