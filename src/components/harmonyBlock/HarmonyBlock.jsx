import { useState, useEffect, useRef } from "react";
import FileControl from "../fileControl/FileControl";
import HarmonyRow from "../harmonyRow/HarmonyRow";
import ControlTrack from "../controlTrack/ControlTrack";
import Modal from "../modal/Modal";

const HarmonyBlock = ({
  index,
  vxCheck,
  setDeleteNumber,
  setVxCheck,
  redCheck,
  handleRedCheckChange,
  moveBlock,
  data,
  renameBlock,
  addRow,
  deleteRow,
  renameTrack,
  deleteRowNumber,
  setDeleteRowNumber,
  countScript,
  handleOnNotes,
  handleRemoveOnNotes,
  handleOnPlay,
  handleInstrumentChange,
  handleNoteChange,
  handleVolChange,
  handleBlockOnPlay,
}) => {
  const [active1, setActive1] = useState(data.blockOnPlay);
  const [isAdd, setIsAdd] = useState(false);
  const [isIC, setIsIC] = useState(false);

  const [trackNameNew, setTrackNameNew] = useState("");
  const [instrumentNew, setInstrumentNew] = useState("0");
  const [noteNew, setNoteNew] = useState("0");
  const [vocalVolDr, setVocalVolDr] = useState("74");
  const [chords, setChords] = useState("C");
  const [gamut, setGamut] = useState("Major");
  const [typeHead, setTypeHead] = useState("New");

  const refActive1 = useRef(active1);

  useEffect(() => {
    redCheck === null && setActive1(refActive1.current);
  }, [redCheck]);

  if (redCheck !== null) {
    active1 && setActive1(false);
  }

  const handleChange = () => {
    if (vxCheck === index) {
      setVxCheck(null);
    } else {
      setVxCheck(index);
    }
  };

  const handleRedChange = () => {
    if (redCheck === index) {
      handleRedCheckChange(null);
    } else {
      handleRedCheckChange(index);
    }
  };

  const handleChangeIN = (e) => {
    setInstrumentNew(e.target.value);
    setTrackNameNew(
      e.target.options[e.target.selectedIndex].text
        .split(" ")
        .filter((el, index) => index !== 0)
        .join(" ")
    );
  };

  const clickAddRow = (option) => {
    setIsAdd(false);
    addRow(
      option,
      {
        trackNameNew,
        instrumentNew,
        noteNew,
      },
      index
    );
    option === "instrument" && setIsIC(false);
    option === "instrument" && setTrackNameNew("");
    option === "instrument" && setInstrumentNew("0");
    option === "instrument" && setNoteNew("0");
  };

  const handleKeyPress = (e) => {
    if (e.which === 13) {
      e.preventDefault();
    }
  };

  const handleRename = () => {
    const el = document.querySelector(`#harmonyName${index}`).innerHTML;

    renameBlock(el, index);
  };

  return (
    <div className="harmonyBlock">
      <div className="container">
        <div className="leftC">
          <FileControl
            bc={true}
            moveBlock={moveBlock}
            index={index}
            handleRemoveOnNotes={handleRemoveOnNotes}
          />
          <div className="controlT">
            <span style={{ marginLeft: "10px", fontWeight: "bold" }}>D</span>
            <span style={{ marginLeft: "24px", fontWeight: "bold" }}>R</span>
            {data.rows.map((el, i) => (
              <ControlTrack
                data={el}
                index={i}
                bi={index}
                setDeleteRowNumber={setDeleteRowNumber}
                key={index + "track" + i}
                renameTrack={renameTrack}
              />
            ))}
          </div>
        </div>
        <table className="rightC">
          <thead className="trHead">
            <td className="head1">
              <input
                type="checkbox"
                className="inputCheckbox"
                checked={active1}
                onChange={(e) => {
                  setActive1(!active1);
                  refActive1.current = !active1;
                  handleBlockOnPlay(index);
                }}
              />
            </td>
            <td className="head2">
              <label className="cbContainerRed">
                <input
                  type="checkbox"
                  className="inputCheckbox"
                  checked={redCheck === index}
                  onChange={handleRedChange}
                />
                <span className="checkMarkRed"></span>
              </label>
              <span
                className="vocalText"
                contentEditable="true"
                onKeyPress={(e) => handleKeyPress(e)}
                id={`harmonyName${index}`}
                onBlur={handleRename}
                suppressContentEditableWarning={true}
              >
                {data.blockName}
              </span>
              <span
                className={vxCheck === index ? "vxText vxTextGreen" : "vxText"}
              >
                VX
              </span>
            </td>
            <td className="head3">
              <label className="cbContainerGreen">
                <input
                  type="checkbox"
                  className="inputCheckbox"
                  checked={vxCheck === index}
                  onChange={handleChange}
                />
                <span className="checkMarkGreen"></span>
              </label>
            </td>
            <td className="head4"></td>
            <td className="head5">
              <select
                name=""
                className="select"
                id="vocalVolDr"
                value={vocalVolDr}
                onChange={(e) => setVocalVolDr(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">37</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="43">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
                <option value="48">48</option>
                <option value="49">49</option>
                <option value="50">50</option>
                <option value="51">51</option>
                <option value="53">52</option>
                <option value="53">53</option>
                <option value="54">54</option>
                <option value="55">55</option>
                <option value="56">56</option>
                <option value="57">57</option>
                <option value="58">58</option>
                <option value="59">59</option>
                <option value="60">50</option>
                <option value="61">61</option>
                <option value="63">62</option>
                <option value="63">63</option>
                <option value="64">64</option>
                <option value="65">65</option>
                <option value="66">66</option>
                <option value="67">67</option>
                <option value="68">68</option>
                <option value="69">69</option>
                <option value="70">70</option>
                <option value="71">71</option>
                <option value="73">72</option>
                <option value="73">73</option>
                <option value="74">74</option>
                <option value="75">75</option>
                <option value="76">76</option>
                <option value="77">77</option>
                <option value="78">78</option>
                <option value="79">79</option>
                <option value="80">80</option>
                <option value="81">81</option>
                <option value="83">82</option>
                <option value="83">83</option>
                <option value="84">84</option>
                <option value="85">85</option>
                <option value="86">86</option>
                <option value="87">87</option>
                <option value="88">88</option>
                <option value="89">89</option>
                <option value="90">90</option>
                <option value="91">91</option>
                <option value="93">92</option>
                <option value="93">93</option>
                <option value="94">94</option>
                <option value="95">95</option>
                <option value="96">96</option>
                <option value="97">97</option>
                <option value="98">98</option>
                <option value="99">99</option>
                <option value="100">100</option>
              </select>
            </td>
            <td className="head6" colSpan="4">
              <span className="presetText">Presets</span>
              <select
                name=""
                className="select"
                id="chords"
                value={chords}
                onChange={(e) => setChords(e.target.value)}
              >
                <option value="C">C</option>
                <option value="C#/Db">C#/Db</option>
                <option value="D">D</option>
                <option value="D#/Eb">D#/Eb</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="F#/Gb">F#/Gb</option>
                <option value="G">G</option>
                <option value="G#/Ab">G#/Ab</option>
                <option value="A">A</option>
                <option value="A#/Bb">A#/Bb</option>
                <option value="B">B</option>
              </select>
              <select
                name=""
                className="select"
                id="gamut"
                value={gamut}
                onChange={(e) => setGamut(e.target.value)}
              >
                <option value="Major">Major</option>
                <option value="Minor">Minor</option>
                <option value="Pentatonic">Pentatonic</option>
              </select>
              <select
                name=""
                className="select"
                id="typeHead"
                value={typeHead}
                onChange={(e) => setTypeHead(e.target.value)}
              >
                <option value="New">New</option>
              </select>
              <div
                className="subIcon"
                onClick={() => setDeleteNumber(index)}
              ></div>
              <div className="plusIcon">
                <div
                  className="plusIconI"
                  onClick={() => setIsAdd(!isAdd)}
                ></div>
                {isAdd && (
                  <div
                    className="fullscreen"
                    onClick={() => setIsAdd(false)}
                  ></div>
                )}
                <ul className={isAdd ? "ulList isBlock" : "ulList"}>
                  <li style={{ position: "relative" }}>
                    <span onClick={() => setIsIC(!isIC)}>Instrument</span>
                    <div
                      className={
                        isIC ? "addSingleNoteRow isFlex" : "addSingleNoteRow"
                      }
                    >
                      <input type="text" value={trackNameNew} />
                      <select
                        name=""
                        value={instrumentNew}
                        onChange={handleChangeIN}
                        className="select"
                      >
                        <option value="0">000 Piano</option>
                        <option value="1">001 Bright Piano</option>
                        <option value="2">002 Electric Grand</option>
                        <option value="3">003 Honky Tonk Piano</option>
                        <option value="4">004 Electric Piano 1</option>
                        <option value="5">005 Electric Piano 2</option>
                        <option value="6">006 Harpsichord</option>
                        <option value="7">007 Clavinet</option>
                        <option value="8">008 Celesta</option>
                        <option value="9">009 Glockenspiel</option>
                        <option value="10">010 Music Box</option>
                        <option value="11">011 Vibraphone</option>
                        <option value="12">012 Marimba</option>
                        <option value="13">013 Xylophone</option>
                        <option value="14">014 Tubular Bell</option>
                        <option value="15">015 Dulcimer</option>
                        <option value="16">016 Hammond Organ</option>
                        <option value="17">017 Perc Organ</option>
                        <option value="18">018 Rock Organ</option>
                        <option value="19">019 Church Organ</option>
                        <option value="20">020 Reed Organ</option>
                        <option value="21">021 Accordion</option>
                        <option value="22">022 Harmonica</option>
                        <option value="23">023 Tango Accordion</option>
                        <option value="24">024 Nylon Str Guitar</option>
                        <option value="25">025 Steel String Guitar</option>
                        <option value="26">026 Jazz Electric Gtr</option>
                        <option value="27">027 Clean Guitar</option>
                        <option value="28">028 Muted Guitar</option>
                        <option value="29">029 Overdrive Guitar</option>
                        <option value="30">030 Distortion Guitar</option>
                        <option value="31">031 Guitar Harmonics</option>
                        <option value="32">032 Acoustic Bass</option>
                        <option value="33">033 Fingered Bass</option>
                        <option value="34">034 Picked Bass</option>
                        <option value="35">035 Fretless Bass</option>
                        <option value="36">036 Slap Bass 1</option>
                        <option value="37">037 Slap Bass 2</option>
                        <option value="38">038 Syn Bass 1</option>
                        <option value="39">039 Syn Bass 2</option>
                        <option value="40">040 Violin</option>
                        <option value="41">041 Viola</option>
                        <option value="42">042 Cello</option>
                        <option value="43">043 Contrabass</option>
                        <option value="44">044 Tremolo Strings</option>
                        <option value="45">045 Pizzicato Strings</option>
                        <option value="46">046 Orchestral Harp</option>
                        <option value="47">047 Timpani</option>
                        <option value="48">048 Ensemble Strings</option>
                        <option value="49">049 Slow Strings</option>
                        <option value="50">050 Synth Strings 1</option>
                        <option value="51">051 Synth Strings 2</option>
                        <option value="52">052 Choir Aahs</option>
                        <option value="53">053 Voice Oohs</option>
                        <option value="54">054 Syn Choir</option>
                        <option value="55">055 Orchestra Hit</option>
                        <option value="56">056 Trumpet</option>
                        <option value="57">057 Trombone</option>
                        <option value="58">058 Tuba</option>
                        <option value="59">059 Muted Trumpet</option>
                        <option value="60">060 French Horn</option>
                        <option value="61">061 Brass Ensemble</option>
                        <option value="62">062 Syn Brass 1</option>
                        <option value="63">063 Syn Brass 2</option>
                        <option value="64">064 Soprano Sax</option>
                        <option value="65">065 Alto Sax</option>
                        <option value="66">066 Tenor Sax</option>
                        <option value="67">067 Baritone Sax</option>
                        <option value="68">068 Oboe</option>
                        <option value="69">069 English Horn</option>
                        <option value="70">070 Bassoon</option>
                        <option value="71">071 Clarinet</option>
                        <option value="72">072 Piccolo</option>
                        <option value="73">073 Flute</option>
                        <option value="74">074 Recorder</option>
                        <option value="75">075 Pan Flute</option>
                        <option value="76">076 Bottle Blow</option>
                        <option value="77">077 Shakuhachi</option>
                        <option value="78">078 Whistle</option>
                        <option value="79">079 Ocarina</option>
                        <option value="80">080 Syn Square Wave</option>
                        <option value="81">081 Syn Saw Wave</option>
                        <option value="82">082 Syn Calliope</option>
                        <option value="83">083 Syn Chiff</option>
                        <option value="84">084 Syn Charang</option>
                        <option value="85">085 Syn Voice</option>
                        <option value="86">086 Syn Fifths Saw</option>
                        <option value="87">087 Syn Brass and Lead</option>
                        <option value="88">088 Fantasia</option>
                        <option value="89">089 Warm Pad</option>
                        <option value="90">090 Polysynth</option>
                        <option value="91">091 Space Vox</option>
                        <option value="92">092 Bowed Glass</option>
                        <option value="93">093 Metal Pad</option>
                        <option value="94">094 Halo Pad</option>
                        <option value="95">095 Sweep Pad</option>
                        <option value="96">096 Ice Rain</option>
                        <option value="97">097 Soundtrack</option>
                        <option value="98">098 Crystal</option>
                        <option value="99">099 Atmosphere</option>
                        <option value="100">100 Brightness</option>
                        <option value="101">101 Goblins</option>
                        <option value="102">102 Echo Drops</option>
                        <option value="103">103 Sci Fi</option>
                        <option value="104">104 Sitar</option>
                        <option value="105">105 Banjo</option>
                        <option value="106">106 Shamisen</option>
                        <option value="107">107 Koto</option>
                        <option value="108">108 Kalimba</option>
                        <option value="109">109 Bag Pipe</option>
                        <option value="110">110 Fiddle</option>
                        <option value="111">111 Shanai</option>
                        <option value="112">112 Tinkle Bell</option>
                        <option value="113">113 Agogo</option>
                        <option value="114">114 Steel Drums</option>
                        <option value="115">115 Woodblock</option>
                        <option value="116">116 Taiko Drum</option>
                        <option value="117">117 Melodic Tom</option>
                        <option value="118">118 Syn Drum</option>
                        <option value="119">119 Reverse Cymbal</option>
                        <option value="120">120 Guitar Fret Noise</option>
                        <option value="121">121 Breath Noise</option>
                        <option value="122">122 Seashore</option>
                        <option value="123">123 Bird</option>
                        <option value="124">124 Telephone</option>
                        <option value="125">125 Helicopter</option>
                        <option value="126">126 Applause</option>
                        <option value="127">127 Gunshot</option>
                      </select>
                      <select
                        name=""
                        value={noteNew}
                        onChange={(e) => setNoteNew(e.target.value)}
                        className="select"
                      >
                        <option value="0">C0</option>
                        <option value="1">C#0</option>
                        <option value="2">D0</option>
                        <option value="3">D#0</option>
                        <option value="4">E0</option>
                        <option value="5">F0</option>
                        <option value="6">F#0</option>
                        <option value="7">G0</option>
                        <option value="8">G#0</option>
                        <option value="9">A0</option>
                        <option value="10">A#0</option>
                        <option value="11">B0</option>
                        <option value="12">C1</option>
                        <option value="13">C#1</option>
                        <option value="14">D1</option>
                        <option value="15">D#1</option>
                        <option value="16">E1</option>
                        <option value="17">F1</option>
                        <option value="18">F#1</option>
                        <option value="19">G1</option>
                        <option value="20">G#1</option>
                        <option value="21">A1</option>
                        <option value="22">A#1</option>
                        <option value="23">B1</option>
                        <option value="24">C2</option>
                        <option value="25">C#2</option>
                        <option value="26">D2</option>
                        <option value="27">D#2</option>
                        <option value="28">E2</option>
                        <option value="29">F2</option>
                        <option value="30">F#2</option>
                        <option value="31">G2</option>
                        <option value="32">G#2</option>
                        <option value="33">A2</option>
                        <option value="34">A#2</option>
                        <option value="35">B2</option>
                        <option value="36">C3</option>
                        <option value="37">C#3</option>
                        <option value="38">D3</option>
                        <option value="39">D#3</option>
                        <option value="40">E3</option>
                        <option value="41">F3</option>
                        <option value="42">F#3</option>
                        <option value="43">G3</option>
                        <option value="44">G#3</option>
                        <option value="45">A3</option>
                        <option value="46">A#3</option>
                        <option value="47">B3</option>
                        <option value="48">C4</option>
                        <option value="49">C#4</option>
                        <option value="50">D4</option>
                        <option value="51">D#4</option>
                        <option value="52">E4</option>
                        <option value="53">F4</option>
                        <option value="54">F#4</option>
                        <option value="55">G4</option>
                        <option value="56">G#4</option>
                        <option value="57">A4</option>
                        <option value="58">A#4</option>
                        <option value="59">B4</option>
                        <option value="60">C5</option>
                        <option value="61">C#5</option>
                        <option value="62">D5</option>
                        <option value="63">D#5</option>
                        <option value="64">E5</option>
                        <option value="65">F5</option>
                        <option value="66">F#5</option>
                        <option value="67">G5</option>
                        <option value="68">G#5</option>
                        <option value="69">A5</option>
                        <option value="70">A#5</option>
                        <option value="71">B5</option>
                        <option value="72">C6</option>
                        <option value="73">C#6</option>
                        <option value="74">D6</option>
                        <option value="75">D#6</option>
                        <option value="76">E6</option>
                        <option value="77">F6</option>
                        <option value="78">F#6</option>
                        <option value="79">G6</option>
                        <option value="80">G#6</option>
                        <option value="81">A6</option>
                        <option value="82">A#6</option>
                        <option value="83">B6</option>
                        <option value="84">C7</option>
                        <option value="85">C#7</option>
                        <option value="86">D7</option>
                        <option value="87">D#7</option>
                        <option value="88">E7</option>
                        <option value="89">F7</option>
                        <option value="90">F#7</option>
                        <option value="91">G7</option>
                        <option value="92">G#7</option>
                        <option value="93">A7</option>
                        <option value="94">A#7</option>
                        <option value="95">B7</option>
                        <option value="96">C8</option>
                        <option value="97">C#8</option>
                        <option value="98">D8</option>
                        <option value="99">D#8</option>
                        <option value="100">E8</option>
                        <option value="101">F8</option>
                        <option value="102">F#8</option>
                        <option value="103">G8</option>
                        <option value="104">G#8</option>
                        <option value="105">A8</option>
                        <option value="106">A#8</option>
                        <option value="107">B8</option>
                        <option value="108">C9</option>
                        <option value="109">C#9</option>
                        <option value="110">D9</option>
                        <option value="111">D#9</option>
                        <option value="112">E9</option>
                        <option value="113">F9</option>
                        <option value="114">F#9</option>
                        <option value="115">G9</option>
                        <option value="116">G#9</option>
                        <option value="117">A9</option>
                        <option value="118">A#9</option>
                        <option value="119">B9</option>
                        <option value="120">C10</option>
                        <option value="121">C#10</option>
                        <option value="122">D10</option>
                        <option value="123">D#10</option>
                        <option value="124">E10</option>
                        <option value="125">F10</option>
                        <option value="126">F#10</option>
                        <option value="127">G10</option>
                      </select>
                      <button onClick={() => clickAddRow("instrument")}>
                        Add
                      </button>
                    </div>
                  </li>
                  <li onClick={() => clickAddRow("chord")}>Chord</li>
                  <li onClick={() => clickAddRow("fx")}>Fx</li>
                </ul>
              </div>
              <span className="trackText">track</span>
            </td>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: "#bbbbbb" }}>
              <td style={{ textAlign: "center" }}>on</td>
              <td>instrument</td>
              <td>note</td>
              <td style={{ textAlign: "center" }}>x</td>
              <td>vol</td>
              <td>
                <span
                  className={
                    redCheck !== index
                      ? "patternO bold"
                      : countScript === 1
                      ? "patternO bold onPlay"
                      : "patternO bold"
                  }
                >
                  1
                </span>
                <span
                  className={
                    redCheck !== index
                      ? "patternO"
                      : countScript === 2
                      ? "patternO onPlay"
                      : "patternO"
                  }
                >
                  e
                </span>
                <span
                  className={
                    redCheck !== index
                      ? "patternO bold"
                      : countScript === 3
                      ? "patternO bold onPlay"
                      : "patternO bold"
                  }
                >
                  +
                </span>
                <span
                  className={
                    redCheck !== index
                      ? "patternO"
                      : countScript === 4
                      ? "patternO onPlay"
                      : "patternO"
                  }
                >
                  a
                </span>
              </td>
              <td>
                <span
                  className={
                    redCheck !== index
                      ? "patternO bold"
                      : countScript === 5
                      ? "patternO bold onPlay"
                      : "patternO bold"
                  }
                >
                  2
                </span>
                <span
                  className={
                    redCheck !== index
                      ? "patternO"
                      : countScript === 6
                      ? "patternO onPlay"
                      : "patternO"
                  }
                >
                  e
                </span>
                <span
                  className={
                    redCheck !== index
                      ? "patternO bold"
                      : countScript === 7
                      ? "patternO bold onPlay"
                      : "patternO bold"
                  }
                >
                  +
                </span>
                <span
                  className={
                    redCheck !== index
                      ? "patternO"
                      : countScript === 8
                      ? "patternO onPlay"
                      : "patternO"
                  }
                >
                  a
                </span>
              </td>
              <td>
                <span
                  className={
                    redCheck !== index
                      ? "patternO bold"
                      : countScript === 9
                      ? "patternO bold onPlay"
                      : "patternO bold"
                  }
                >
                  3
                </span>
                <span
                  className={
                    redCheck !== index
                      ? "patternO"
                      : countScript === 10
                      ? "patternO onPlay"
                      : "patternO"
                  }
                >
                  e
                </span>
                <span
                  className={
                    redCheck !== index
                      ? "patternO bold"
                      : countScript === 11
                      ? "patternO bold onPlay"
                      : "patternO bold"
                  }
                >
                  +
                </span>
                <span
                  className={
                    redCheck !== index
                      ? "patternO"
                      : countScript === 12
                      ? "patternO onPlay"
                      : "patternO"
                  }
                >
                  a
                </span>
              </td>
              <td>
                <span
                  className={
                    redCheck !== index
                      ? "patternO bold"
                      : countScript === 13
                      ? "patternO bold onPlay"
                      : "patternO bold"
                  }
                >
                  4
                </span>
                <span
                  className={
                    redCheck !== index
                      ? "patternO"
                      : countScript === 14
                      ? "patternO onPlay"
                      : "patternO"
                  }
                >
                  e
                </span>
                <span
                  className={
                    redCheck !== index
                      ? "patternO bold"
                      : countScript === 15
                      ? "patternO bold onPlay"
                      : "patternO bold"
                  }
                >
                  +
                </span>
                <span
                  className={
                    redCheck !== index
                      ? "patternO"
                      : countScript === 16
                      ? "patternO onPlay"
                      : "patternO"
                  }
                >
                  a
                </span>
              </td>
            </tr>
            {data.rows.map((row, i) => (
              <HarmonyRow
                key={index + "row" + i}
                row={row}
                bi={index}
                ri={i}
                handleOnNotes={handleOnNotes}
                handleOnPlay={handleOnPlay}
                handleInstrumentChange={handleInstrumentChange}
                handleNoteChange={handleNoteChange}
                handleVolChange={handleVolChange}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Modal deleteNumber={deleteRowNumber} bi={index} deleteEl={deleteRow} />
    </div>
  );
};

export default HarmonyBlock;
