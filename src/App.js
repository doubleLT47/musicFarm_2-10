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
  const [redCheck, setRedCheck] = useState(null);

  const [bpm, setBpm] = useState(120);
  const [loop, setLoop] = useState(0);
  const [volume, setVolume] = useState(90);
  const [beat, setBeat] = useState([]);

  var midiSounds = useRef();
  var listInstrument = [],
    listDrums = [],
    beatData = [];

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

  // Tạo beat data
  const fillBeat = () => {
    for (var i = 0; i < 16; i++) {
      var drums = [];
      var is = [];
      if (redCheck === null) {
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
      } else {
        for (k = 0; k < blocks[redCheck].rows.length; k++) {
          if (blocks[redCheck].rows[k].onNotes.includes(i + 1)) {
            if (blocks[redCheck].type !== "drums") {
              is.push([
                blocks[redCheck].rows[k].instrument,
                [blocks[redCheck].rows[k].note],
                2 / 16,
                1,
              ]);
            } else {
              drums.push(blocks[redCheck].rows[k].instrument);
            }
          }
        }
      }
      var beat = [drums, is];
      beatData[i] = beat;
    }
    setBeat(beatData);
  };
  // Thêm một block mới
  const addBlock = (block) => {
    if (block === "drums") {
      const newBlocks = [
        ...blocks,
        {
          blockName: "Drums",
          type: "drums",
          blockOnPlay: true,
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
          blockOnPlay: true,
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
          blockOnPlay: true,
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
  // Xóa một block
  const deleteBlock = (option, i) => {
    if (option === "delete") {
      const newBlocks = blocks.filter((block, index) => index !== i);
      setBlocks(newBlocks);
      setDeleteNumber(null);
    } else if (option === "cancel") {
      setDeleteNumber(null);
    }
  };

  // Di chuyển các block
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

  // đổi tên block
  const renameBlock = (name, i) => {
    const newBlocks = blocks.map((block, index) => {
      if (i === index) {
        return { blockName: name, type: block.type, rows: block.rows };
      }

      return block;
    });

    setBlocks(newBlocks);
  };

  // thay đổi field của Block tại vị trí bi
  const handleBlockOnPlay = (bi) => {
    const newBlocks = blocks.map((block) => block);

    newBlocks[bi].blockOnPlay = !newBlocks[bi].blockOnPlay;

    setBlocks(newBlocks);
  };

  //  Thêm row vào các block
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
          instrument: Number(data.instrumentNew),
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
            instrument: 0,
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

  // Xóa 1 row
  const deleteRow = (option, ri, i) => {
    const newBlocks = blocks.map((block) => block);
    if (option === "delete") {
      const newRows = blocks[i].rows.filter((lr, index) => index !== ri);

      newBlocks[i].rows = newRows;
      setBlocks(newBlocks);
      setDeleteRowNumber(null);
      fillBeat();
    } else if (option === "cancel") {
      setDeleteRowNumber(null);
    }
  };

  // Đổi tên của 1 row
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

  // Xử lý cho sự kiện thay đổi của 16 checkbox play
  const handleOnNotes = (bi, ri, i) => {
    const isOnNote = blocks[bi].rows[ri].onNotes.includes(i);
    const newBlocks = blocks.map((block) => block);
    if (isOnNote) {
      const newOnNotes = blocks[bi].rows[ri].onNotes.filter(
        (note) => note !== i
      );

      newBlocks[bi].rows[ri].onNotes = newOnNotes;
      midiSounds.current.player.loader.waitLoad(() => {
        setBlocks(newBlocks);

        fillBeat();
      });
    } else {
      newBlocks[bi].rows[ri].onNotes.push(i);
      midiSounds.current.player.loader.waitLoad(() => {
        setBlocks(newBlocks);

        fillBeat();
      });
    }
  };
  // Khi ấn vào icon file, remove hết các checkbox đang check
  const handleRemoveOnNotes = (bi) => {
    const newBlocks = blocks.map((block) => block);

    for (let i = 0; i < blocks[bi].rows.length; i++) {
      newBlocks[bi].rows[i].onNotes.length = 0;
    }

    setBlocks(newBlocks);
    fillBeat();
  };

  // Xử lý cho các row đươc check hay uncheck để play
  const handleOnPlay = (bi, ri) => {
    const newBlocks = blocks.map((block) => block);

    newBlocks[bi].rows[ri].onPlay = !newBlocks[bi].rows[ri].onPlay;

    setBlocks(newBlocks);
  };

  // xử lý sự kiện thay đổi nhạc cụ của các row
  const handleInstrumentChange = (bi, ri, value) => {
    const newBlocks = blocks.map((block) => block);
    newBlocks[bi].rows[ri].instrument = Number(value);
    if (newBlocks[bi].type === "drums") {
      midiSounds.current.cacheDrum(Number(value));
    } else {
      midiSounds.current.cacheInstrument(Number(value));
    }
    midiSounds.current.player.loader.waitLoad(function () {
      setBlocks(newBlocks);
      fillBeat();
    });
  };

  // xử lý sự kiện thay đổi note của các row
  const handleNoteChange = (bi, ri, value) => {
    const newBlocks = blocks.map((block) => block);
    newBlocks[bi].rows[ri].note = Number(value);

    setBlocks(newBlocks);
  };

  // xử lý sự kiện thay đổi volume của các row
  const handleVolChange = (bi, ri, value) => {
    const newBlocks = blocks.map((block) => block);
    newBlocks[bi].rows[ri].vol = Number(value);

    setBlocks(newBlocks);
  };
  // // xử lý sự kiện thay đổi của red check để xác định block nào được play
  const handleRedCheckChange = (index) => {
    setRedCheck(index);
    fillBeat();
  };

  // Bắt đầu play nhạc
  const playLoop = () => {
    console.log("play");
    fillBeat();

    midiSounds.current.startPlayLoop(beat, bpm, 1 / 16);
  };
  // dừng play nhạc
  const stopLoop = () => {
    console.log("stop");
    midiSounds.current.stopPlayLoop();
  };

  return (
    <div className="app">
      <MainFrame
        redCheck={redCheck}
        handleRedCheckChange={handleRedCheckChange}
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
        handleBlockOnPlay={handleBlockOnPlay}
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
        ref={(ref) => (midiSounds.current = ref)}
        appElementName="root"
        instruments={listInstrument}
        drums={listDrums}
      />
    </div>
  );
};

export default App;
