import { useState } from "react";
import VocalBlock from "../vocalBlock/VocalBlock";
import HarmonyBlock from "../harmonyBlock/HarmonyBlock";
import DrumsBlock from "../drumsBlock/DrumsBlock";
import "./main.css";

const block = { drums: DrumsBlock, harmony: HarmonyBlock, vocal: VocalBlock };

const MainFrame = ({
  blocks,
  setDeleteNumber,
  vxCheck,
  setVxCheck,
  moveBlock,
  renameBlock,
  addRow,
  deleteRow,
  renameTrack,
  deleteRowNumber,
  setDeleteRowNumber,
  handleOnNotes,
  handleRemoveOnNotes,
  handleOnPlay,
  handleInstrumentChange,
  handleNoteChange,
  handleVolChange,
}) => {
  const [redCheck, setRedCheck] = useState(null);

  return (
    <div className="mainFrame">
      {blocks.map((el, index) => {
        const Block = block[el.type];
        return Block ? (
          <Block
            data={el}
            index={index}
            key={index}
            setDeleteNumber={setDeleteNumber}
            vxCheck={vxCheck}
            setVxCheck={setVxCheck}
            redCheck={redCheck}
            setRedCheck={setRedCheck}
            moveBlock={moveBlock}
            renameBlock={renameBlock}
            addRow={addRow}
            deleteRow={deleteRow}
            renameTrack={renameTrack}
            deleteRowNumber={deleteRowNumber}
            setDeleteRowNumber={setDeleteRowNumber}
            handleOnNotes={handleOnNotes}
            handleRemoveOnNotes={handleRemoveOnNotes}
            handleOnPlay={handleOnPlay}
            handleInstrumentChange={handleInstrumentChange}
            handleNoteChange={handleNoteChange}
            handleVolChange={handleVolChange}
          />
        ) : null;
      })}
    </div>
  );
};

export default MainFrame;
