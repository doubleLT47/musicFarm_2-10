import BFrame from "./components/bottomFrame/BFrame";
import "./app.css";
import MainFrame from "./components/mainFrame/MainFrame";
import { useState } from "react";
import Modal from "./components/modal/Modal";
import { data } from "./staticData.js";

const App = () => {
  const [blocks, setBlocks] = useState(data);
  const [deleteRowNumber, setDeleteRowNumber] = useState(null);

  const [deleteNumber, setDeleteNumber] = useState(null);
  const [vxCheck, setVxCheck] = useState(null);
  console.log(deleteNumber);

  const addBlock = (block) => {
    if (block === "drums") {
      const newBlocks = [
        ...blocks,
        {
          blockName: "Drums",
          type: "drums",
          rows: [
            {
              instrument: "35",
              vol: "127",
              note: "1",
            },
          ],
        },
      ];
      setBlocks(newBlocks);
    } else if (block === "harmony") {
      const newBlocks = [
        ...blocks,
        {
          blockName: "Harmony",
          type: "harmony",
          rows: [
            {
              trackName: "Name",
              instrument: "12",
              vol: "74",
              note: "33",
            },
          ],
        },
      ];
      setBlocks(newBlocks);
    } else {
      const newBlocks = [
        ...blocks,
        {
          blockName: "Vocal",
          type: "vocal",
          rows: [
            {
              trackName: "",
              instrument: "0",
              note: "33",
              vol: "74",
            },
          ],
        },
      ];
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

  const moveBlock = (option, index) => {
    if (option === "up") {
      const newBlocks = blocks.map((block) => block);
      const tmp = newBlocks[index];
      newBlocks[index] = newBlocks[index - 1];
      newBlocks[index - 1] = tmp;
      setBlocks(newBlocks);
    } else if (option === "down") {
      const newBlocks = blocks.map((block) => block);
      if (newBlocks[index + 1] !== undefined) {
        const tmp = newBlocks[index];
        newBlocks[index] = newBlocks[index + 1];
        newBlocks[index + 1] = tmp;
        setBlocks(newBlocks);
      }
    }
  };

  const renameBlock = (name, i) => {
    const newBlocks = blocks.map((block, index) => {
      if (i === index) {
        return { blockName: name, type: block.type, rows: block.rows };
      }

      return block;
    });

    setBlocks(newBlocks);
  };

  const addRow = (option, data, i) => {
    const newBlocks = blocks.map((block) => block);
    if (blocks[i].type === "drums") {
      if (option === "drumsKit") {
        const eRow = [
          {
            trackName: "Drums 5",
            instrument: "49",
            vol: "100",
            note: "9",
          },
          {
            trackName: "Drums 4",
            instrument: "46",
            vol: "100",
            note: "9",
          },
          {
            trackName: "Drums 3",
            instrument: "42",
            vol: "100",
            note: "1",
          },
          {
            trackName: "Drums 2",
            instrument: "38",
            vol: "100",
            note: "1",
          },
          {
            trackName: "Drums 1",
            instrument: "35",
            vol: "100",
            note: "1",
          },
        ];

        newBlocks[i].rows.push(eRow);
        setBlocks(newBlocks);
      } else if (option === "fx") {
        newBlocks[i].rows.push({
          trackName: "Fx",
          instrument: "82",
          vol: "127",
          note: "9",
        });
        setBlocks(newBlocks);
      }
    } else if (blocks[i].type === "harmony") {
      if (option === "instrument") {
        newBlocks[i].rows.push({
          trackName: data.trackNameNew,
          instrument: data.instrumentNew,
          note: data.noteNew,
          vol: "100",
        });
        setBlocks(newBlocks);
      } else if (option === "chord") {
        newBlocks[i].rows.push({
          trackName: "Chord",
          instrument: "48",
          vol: "100",
          note: "48",
        });
        setBlocks(newBlocks);
      } else if (option === "fx") {
        newBlocks[i].rows.push({
          trackName: "Fx",
          instrument: "40",
          vol: "100",
          note: "48",
        });
        setBlocks(newBlocks);
      }
    } else if (blocks[i].type === "vocal") {
      if (option === "melody") {
        newBlocks[i].rows.push(
          {
            trackName: "Melody 8",
            instrument: "0",
            vol: "100",
            note: "60",
          },
          {
            trackName: "Melody 7",
            instrument: "0",
            vol: "100",
            note: "59",
          },
          {
            trackName: "Melody 6",
            instrument: "0",
            vol: "100",
            note: "57",
          },
          {
            trackName: "Melody 5",
            instrument: "0",
            vol: "100",
            note: "55",
          },
          {
            trackName: "Melody 4",
            instrument: "0",
            vol: "100",
            note: "53",
          },
          {
            trackName: "Melody 3",
            instrument: "0",
            vol: "100",
            note: "52",
          },
          {
            trackName: "Melody 2",
            instrument: "0",
            vol: "100",
            note: "50",
          },
          {
            trackName: "Melody 1",
            instrument: "0",
            vol: "100",
            note: "48",
          }
        );

        setBlocks(newBlocks);
      } else if (option === "singleNote") {
        newBlocks[i].rows.push({
          trackName: "Melody",
          instrument: "0",
          vol: "100",
          note: "48",
        });
        setBlocks(newBlocks);
      } else if (option === "vocal") {
        newBlocks[i].rows.push({
          trackName: "Vocal",
          instrument: "40",
          vol: "100",
          note: "48",
        });
        setBlocks(newBlocks);
      }
    }
  };

  const deleteRow = (option, ri, i) => {
    const newBlocks = blocks.map((block) => block);
    if (option === "delete") {
      const newRows = blocks[i].rows.filter((lr, index) => index !== ri);

      newBlocks[i].rows = newRows;
      setBlocks(newBlocks);
      setDeleteRowNumber(null);
    } else if (option === "cancel") {
      setDeleteRowNumber(null);
    }
  };
  const renameTrack = (name, i, ri) => {
    const newBlocks = blocks.map((block) => block);
    const newRows = blocks[i].rows.map((el, index) => {
      if (ri === index) {
        return {
          trackName: name,
          instrument: el.instrument,
          note: el.note,
          vol: el.vol,
        };
      }

      return el;
    });

    newBlocks[i].rows = newRows;

    setBlocks(newBlocks);
  };

  return (
    <div className="app">
      <BFrame addBlock={addBlock} vxCheck={vxCheck} />
      <MainFrame
        setDeleteNumber={setDeleteNumber}
        blocks={blocks}
        vxCheck={vxCheck}
        setVxCheck={setVxCheck}
        moveBlock={moveBlock}
        renameBlock={renameBlock}
        addRow={addRow}
        deleteRow={deleteRow}
        renameTrack={renameTrack}
        deleteRowNumber={deleteRowNumber}
        setDeleteRowNumber={setDeleteRowNumber}
      />
      <Modal deleteNumber={deleteNumber} deleteEl={deleteBlock} />
    </div>
  );
};

export default App;
