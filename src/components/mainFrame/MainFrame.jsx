// import { useState } from "react";
import VocalBlock from "../vocalBlock/VocalBlock";
import HarmonyBlock from "../harmonyBlock/HarmonyBlock";
import DrumsBlock from "../drumsBlock/DrumsBlock";
import "./main.css";

const MainFrame = ({ blocks, vxCheck, setVxCheck }) => {
  return (
    <div className="mainFrame">
      {blocks.map((el, index) => {
        let a = null;
        el === "drums"
          ? (a = (
              <DrumsBlock
                key={index}
                index={index + 1}
                isChecked={index + 1 === vxCheck}
                setVxCheck={setVxCheck}
              />
            ))
          : el === "vocal"
          ? (a = (
              <VocalBlock
                index={index + 1}
                key={index}
                isChecked={index === vxCheck}
                setVxCheck={setVxCheck}
              />
            ))
          : (a = (
              <HarmonyBlock
                index={index + 1}
                key={index}
                isChecked={index === vxCheck}
                setVxCheck={setVxCheck}
              />
            ));
        return a;
      })}
    </div>
  );
};

export default MainFrame;
