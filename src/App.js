import BFrame from "./components/bottomFrame/BFrame";
import "./app.css";
import MainFrame from "./components/mainFrame/MainFrame";
import { useState, useRef } from "react";
import Modal from "./components/modal/Modal";
import { data } from "./staticData.js";
import MIDISoundsInstrument from "midi-sounds-react";

const App = () => {
  const [blocks, setBlocks] = useState(data);
  const [deleteRowNumber, setDeleteRowNumber] = useState(null);

  const [deleteNumber, setDeleteNumber] = useState(null);
  const [vxCheck, setVxCheck] = useState(null);

  const [bpm, setBpm] = useState(50);
  const [loop, setLoop] = useState(0);
  const [volume, setVolume] = useState(90);
  var midiSoundsInstrument = useRef(),
    midiSoundsDrum = useRef();
  var listInstrument = [],
    listDrums = [],
    drumsData = [],
    beatsData = [];

  const addBlock = (block) => {
    if (block === "drums") {
      const newBlocks = [
        ...blocks,
        {
          blockName: "Drums",
          type: "drums",
          rows: [
            {
              instrument: 35,
              vol: 127,
              note: 1,
              onNotes: [],
              onPlay: true,
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
              instrument: 12,
              vol: 74,
              note: 33,
              onNotes: [],
              onPlay: true,
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
              instrument: 0,
              note: 33,
              vol: 74,
              onNotes: [],
              onPlay: true,
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
      if (newBlocks[index - 1] !== undefined) {
        const tmp = newBlocks[index];
        newBlocks[index] = newBlocks[index - 1];
        newBlocks[index - 1] = tmp;
        setBlocks(newBlocks);
      }
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
        newBlocks[i].rows.push(
          {
            trackName: "Drums 5",
            instrument: 49,
            vol: 100,
            note: 9,
            onNotes: [],
            onPlay: true,
          },
          {
            trackName: "Drums 4",
            instrument: 46,
            vol: 100,
            note: 9,
            onNotes: [],
            onPlay: true,
          },
          {
            trackName: "Drums 3",
            instrument: 42,
            vol: 100,
            note: 1,
            onNotes: [],
            onPlay: true,
          },
          {
            trackName: "Drums 2",
            instrument: 38,
            vol: 100,
            note: 1,
            onNotes: [],
            onPlay: true,
          },
          {
            trackName: "Drums 1",
            instrument: 35,
            vol: 100,
            note: 1,
            onNotes: [],
            onPlay: true,
          }
        );
        setBlocks(newBlocks);
      } else if (option === "fx") {
        newBlocks[i].rows.push({
          trackName: "Fx",
          instrument: 82,
          vol: 127,
          note: 9,
          onNotes: [],
          onPlay: true,
        });
        setBlocks(newBlocks);
      }
    } else if (blocks[i].type === "harmony") {
      if (option === "instrument") {
        newBlocks[i].rows.push({
          trackName: data.trackNameNew,
          instrument: data.instrumentNew,
          note: data.noteNew,
          vol: 100,
          onNotes: [],
          onPlay: true,
        });
        setBlocks(newBlocks);
      } else if (option === "chord") {
        newBlocks[i].rows.push({
          trackName: "Chord",
          instrument: 48,
          vol: 100,
          note: 48,
          onNotes: [],
          onPlay: true,
        });
        setBlocks(newBlocks);
      } else if (option === "fx") {
        newBlocks[i].rows.push({
          trackName: "Fx",
          instrument: 40,
          vol: 100,
          note: 48,
          onNotes: [],
          onPlay: true,
        });
        setBlocks(newBlocks);
      }
    } else if (blocks[i].type === "vocal") {
      if (option === "melody") {
        newBlocks[i].rows.push(
          {
            trackName: "Melody 8",
            instrument: 0,
            vol: 100,
            note: 60,
            onNotes: [],
            onPlay: true,
          },
          {
            trackName: "Melody 7",
            instrument: 0,
            vol: 100,
            note: 59,
            onNotes: [],
            onPlay: true,
          },
          {
            trackName: "Melody 6",
            instrument: 0,
            vol: 100,
            note: 57,
            onNotes: [],
            onPlay: true,
          },
          {
            trackName: "Melody 5",
            instrument: 0,
            vol: 100,
            note: 55,
            onNotes: [],
            onPlay: true,
          },
          {
            trackName: "Melody 4",
            instrument: 0,
            vol: 100,
            note: 53,
            onNotes: [],
            onPlay: true,
          },
          {
            trackName: "Melody 3",
            instrument: "0",
            vol: 100,
            note: 52,
            onNotes: [],
            onPlay: true,
          },
          {
            trackName: "Melody 2",
            instrument: 0,
            vol: 100,
            note: 50,
            onNotes: [],
            onPlay: true,
          },
          {
            trackName: "Melody 1",
            instrument: 0,
            vol: 100,
            note: 48,
            onNotes: [],
            onPlay: true,
          }
        );

        setBlocks(newBlocks);
      } else if (option === "singleNote") {
        newBlocks[i].rows.push({
          trackName: "Melody",
          instrument: 0,
          vol: 100,
          note: 48,
          onNotes: [],
          onPlay: true,
        });
        setBlocks(newBlocks);
      } else if (option === "vocal") {
        newBlocks[i].rows.push({
          trackName: "Vocal",
          instrument: 40,
          vol: 100,
          note: 48,
          onNotes: [],
          onPlay: true,
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
          onNotes: el.onNotes,
          onPlay: el.onPlay,
        };
      }

      return el;
    });

    newBlocks[i].rows = newRows;

    setBlocks(newBlocks);
  };

  const handleOnNotes = (bi, ri, i) => {
    const isOnNote = blocks[bi].rows[ri].onNotes.includes(i);
    const newBlocks = blocks.map((block) => block);

    if (isOnNote) {
      const newOnNotes = blocks[bi].rows[ri].onNotes.filter(
        (note) => note !== i
      );

      newBlocks[bi].rows[ri].onNotes = newOnNotes;
      setBlocks(newBlocks);
    } else {
      newBlocks[bi].rows[ri].onNotes.push(i);
      setBlocks(newBlocks);
    }
  };

  const handleRemoveOnNotes = (bi) => {
    const newBlocks = blocks.map((block) => block);

    for (let i = 0; i < blocks[bi].rows.length; i++) {
      newBlocks[bi].rows[i].onNotes.length = 0;
    }

    setBlocks(newBlocks);
  };

  const handleOnPlay = (bi, ri) => {
    const newBlocks = blocks.map((block) => block);

    newBlocks[bi].rows[ri].onPlay = !newBlocks[bi].rows[ri].onPlay;

    setBlocks(newBlocks);
  };

  const handleInstrumentChange = (bi, ri, value) => {
    const newBlocks = blocks.map((block) => block);
    newBlocks[bi].rows[ri].instrument = Number(value);

    setBlocks(newBlocks);
  };

  const handleNoteChange = (bi, ri, value) => {
    const newBlocks = blocks.map((block) => block);
    newBlocks[bi].rows[ri].note = Number(value);

    setBlocks(newBlocks);
  };

  const handleVolChange = (bi, ri, value) => {
    const newBlocks = blocks.map((block) => block);
    newBlocks[bi].rows[ri].vol = Number(value);

    setBlocks(newBlocks);
  };

  blocks.forEach((block) => {
    if (block.type !== "drums") {
      block.rows.forEach((row) => {
        row.onPlay === true && listInstrument.push(row.instrument);
      });
    } else {
      block.rows.forEach((row) => {
        row.onPlay === true && listDrums.push(row.instrument);
      });
    }
  });

  const fillBeat = () => {
    for (var i = 0; i < 16; i++) {
      var drums = [];
      var is = [];
      for (var j = 0; j < blocks.length; j++) {
        for (var k = 0; k < blocks[j].rows.length; k++) {
          if (blocks[j].rows[k].onNotes.includes(i + 1)) {
            if (blocks[j].type !== "drums") {
              is.push([
                blocks[j].rows[k].instrument,
                [blocks[j].rows[k].note],
                2 / 16,
                1,
              ]);
            } else {
              drums.push(blocks[j].rows[k].instrument);
            }
          }
        }
      }

      var drumBeat = [drums, []],
        beat = [[], is];
      beatsData[i] = beat;
      drumsData[i] = drumBeat;
    }
  };

  const playLoop = () => {
    console.log("play");
    fillBeat();
    // midiSoundsInstrument.current.playChordNow(3, [60], 2.5);
    console.log("drums", beatsData);
    midiSoundsInstrument.current.startPlayLoop(beatsData, bpm, 1 / 16);
    midiSoundsDrum.current.startPlayLoop(drumsData, bpm, 1 / 16);
  };

  const stopLoop = () => {
    console.log("stop");
    midiSoundsInstrument.current.stopPlayLoop();
    midiSoundsDrum.current.stopPlayLoop();
  };

  return (
    <div className="app">
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
        handleOnNotes={handleOnNotes}
        handleRemoveOnNotes={handleRemoveOnNotes}
        handleOnPlay={handleOnPlay}
        handleInstrumentChange={handleInstrumentChange}
        handleNoteChange={handleNoteChange}
        handleVolChange={handleVolChange}
      />
      <BFrame
        addBlock={addBlock}
        vxCheck={vxCheck}
        bpm={bpm}
        setBpm={setBpm}
        volume={volume}
        setVolume={setVolume}
        loop={loop}
        setLoop={setLoop}
        playLoop={playLoop}
        stopLoop={stopLoop}
      />
      <Modal deleteNumber={deleteNumber} deleteEl={deleteBlock} />
      <MIDISoundsInstrument
        ref={(ref) => (midiSoundsInstrument.current = ref)}
        appElementName="root"
        // instruments={[3]}
        instruments={listInstrument}
      />
      <MIDISoundsInstrument
        ref={(ref) => (midiSoundsDrum.current = ref)}
        appElementName="root"
        drums={listDrums}
      />
    </div>
  );
};

export default App;
