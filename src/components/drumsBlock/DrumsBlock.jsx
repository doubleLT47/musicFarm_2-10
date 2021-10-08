import { useState } from "react";
import "./drumsBlock.css";
import FileControl from "../fileControl/FileControl";
import DrumsRow from "../drumsRow/DrumsRow";
import ControlTrack from "../controlTrack/ControlTrack";

const DrumsBlock = ({ index, vxCheck, setVxCheck, redCheck, setRedCheck }) => {
  const [active1, setActive1] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [vocalVolDr, setVocalVolDr] = useState("74");
  const [chords, setChords] = useState("C");
  const [gamut, setGamut] = useState("Major");
  const [typeHead, setTypeHead] = useState("New");
  const [lenRow, setLenRow] = useState([
    { instrument: "35", vol: "127", note: "1" },
  ]);
  const [newPattern, setNewPattern] = useState(false);

  // isChecked && setActive3(true);

  const addRow = (option) => {
    if (option === "drumsKit") {
      const eRow = [
        { trackName: "Drums 5", instrument: "49", vol: "100", note: "9" },
        { trackName: "Drums 4", instrument: "46", vol: "100", note: "9" },
        { trackName: "Drums 3", instrument: "42", vol: "100", note: "1" },
        { trackName: "Drums 2", instrument: "38", vol: "100", note: "1" },
        { trackName: "Drums 1", instrument: "35", vol: "100", note: "1" },
      ];
      const newLenRow = [...lenRow, ...eRow];
      setLenRow(newLenRow);
    }
    if (option === "fx") {
      const newRow = [
        ...lenRow,
        { trackName: "Fx", instrument: "82", vol: "127", note: "9" },
      ];
      setLenRow(newRow);
    }
  };

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
      setRedCheck(null);
    } else {
      setRedCheck(index);
    }
  };

  const clickAddRow = (option) => {
    setIsAdd(false);
    addRow(option);
  };

  return (
    <div className="drumsBlock">
      <div className="container">
        <div className="leftC">
          <FileControl bc={true} setNewPattern={setNewPattern} />
          <div className="controlT">
            <span style={{ marginLeft: "10px", fontWeight: "bold" }}>D</span>
            <span style={{ marginLeft: "24px", fontWeight: "bold" }}>R</span>
            {lenRow.map((el, index) => (
              <ControlTrack name={el.trackName} key={index} />
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
                onChange={(e) => setActive1(!active1)}
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
              <span className="vocalText">Drums</span>
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
              <div className="subIcon"></div>
              <div className="plusIcon">
                <div
                  className="plusIconI"
                  onClick={() => setIsAdd(!isAdd)}
                ></div>
                <ul className={isAdd ? "ulList isBlock" : "ulList"}>
                  <li onClick={() => clickAddRow("drumsKit")}>Drums Kit</li>
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
              <td style={{ textAlign: "center", color: "#bbbbbb" }}>x</td>
              <td>vol</td>
              <td colSpan="4">pattern</td>
            </tr>
            {lenRow.map((row, index) => (
              <DrumsRow
                key={index}
                row={row}
                newPattern={newPattern}
                setNewPattern={setNewPattern}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DrumsBlock;
