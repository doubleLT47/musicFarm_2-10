import { useState } from "react";

const HarmonyRow = ({ row, newPattern, setNewPattern, active2 }) => {
  const [activeT1, setActiveT1] = useState(true);
  const [instrument1, setInstrument1] = useState(row.instrument);
  const [checkX1, setCheckX1] = useState(false);
  const [vol1, setVol1] = useState(row.vol);
  const [note1, setNote1] = useState(row.note);
  const [pcb1, setPcb1] = useState(false);
  const [pcb2, setPcb2] = useState(false);
  const [pcb3, setPcb3] = useState(false);
  const [pcb4, setPcb4] = useState(false);
  const [pcb5, setPcb5] = useState(false);
  const [pcb6, setPcb6] = useState(false);
  const [pcb7, setPcb7] = useState(false);
  const [pcb8, setPcb8] = useState(false);
  const [pcb9, setPcb9] = useState(false);
  const [pcb10, setPcb10] = useState(false);
  const [pcb11, setPcb11] = useState(false);
  const [pcb12, setPcb12] = useState(false);
  const [pcb13, setPcb13] = useState(false);
  const [pcb14, setPcb14] = useState(false);
  const [pcb15, setPcb15] = useState(false);
  const [pcb16, setPcb16] = useState(false);
  if (active2) {
    activeT1 && setActiveT1(false);
  }
  if (newPattern) {
    pcb1 && setPcb1(false);
    pcb2 && setPcb2(false);
    pcb3 && setPcb3(false);
    pcb4 && setPcb4(false);
    pcb5 && setPcb5(false);
    pcb6 && setPcb6(false);
    pcb7 && setPcb7(false);
    pcb8 && setPcb8(false);
    pcb9 && setPcb9(false);
    pcb10 && setPcb10(false);
    pcb11 && setPcb11(false);
    pcb12 && setPcb12(false);
    pcb13 && setPcb13(false);
    pcb14 && setPcb14(false);
    pcb15 && setPcb15(false);
    pcb16 && setPcb16(false);
    setNewPattern(false);
  }
  return (
    <tr style={{ backgroundColor: "#bbbbbb" }}>
      <td style={{ textAlign: "center" }}>
        <input
          type="checkbox"
          checked={activeT1}
          onChange={() => setActiveT1(!activeT1)}
        />
      </td>
      <td>
        <select
          name=""
          className="select"
          value={instrument1}
          onChange={(e) => setInstrument1(e.target.value)}
        >
          <option value="0">000&nbsp;&nbsp;Piano</option>
          <option value="1">001&nbsp;&nbsp;Bright Piano</option>
          <option value="2">002&nbsp;&nbsp;Electric Grand</option>
          <option value="3">003&nbsp;&nbsp;Honky Tonk Piano</option>
          <option value="4">004&nbsp;&nbsp;Electric Piano 1</option>
          <option value="5">005&nbsp;&nbsp;Electric Piano 2</option>
          <option value="6">006&nbsp;&nbsp;Harpsichord</option>
          <option value="7">007&nbsp;&nbsp;Clavinet</option>
          <option value="8">008&nbsp;&nbsp;Celesta</option>
          <option value="9">009&nbsp;&nbsp;Glockenspiel</option>
          <option value="10">010&nbsp;&nbsp;Music Box</option>
          <option value="11">011&nbsp;&nbsp;Vibraphone</option>
          <option value="12">012&nbsp;&nbsp;Marimba</option>
          <option value="13">013&nbsp;&nbsp;Xylophone</option>
          <option value="14">014&nbsp;&nbsp;Tubular Bell</option>
          <option value="15">015&nbsp;&nbsp;Dulcimer</option>
          <option value="16">016&nbsp;&nbsp;Hammond Organ</option>
          <option value="17">017&nbsp;&nbsp;Perc Organ</option>
          <option value="18">018&nbsp;&nbsp;Rock Organ</option>
          <option value="19">019&nbsp;&nbsp;Church Organ</option>
          <option value="20">020&nbsp;&nbsp;Reed Organ</option>
          <option value="21">021&nbsp;&nbsp;Accordion</option>
          <option value="22">022&nbsp;&nbsp;Harmonica</option>
          <option value="23">023&nbsp;&nbsp;Tango Accordion</option>
          <option value="24">024&nbsp;&nbsp;Nylon Str Guitar</option>
          <option value="25">025&nbsp;&nbsp;Steel String Guitar</option>
          <option value="26">026&nbsp;&nbsp;Jazz Electric Gtr</option>
          <option value="27">027&nbsp;&nbsp;Clean Guitar</option>
          <option value="28">028&nbsp;&nbsp;Muted Guitar</option>
          <option value="29">029&nbsp;&nbsp;Overdrive Guitar</option>
          <option value="30">030&nbsp;&nbsp;Distortion Guitar</option>
          <option value="31">031&nbsp;&nbsp;Guitar Harmonics</option>
          <option value="32">032&nbsp;&nbsp;Acoustic Bass</option>
          <option value="33">033&nbsp;&nbsp;Fingered Bass</option>
          <option value="34">034&nbsp;&nbsp;Picked Bass</option>
          <option value="35">035&nbsp;&nbsp;Fretless Bass</option>
          <option value="36">036&nbsp;&nbsp;Slap Bass 1</option>
          <option value="37">037&nbsp;&nbsp;Slap Bass 2</option>
          <option value="38">038&nbsp;&nbsp;Syn Bass 1</option>
          <option value="39">039&nbsp;&nbsp;Syn Bass 2</option>
          <option value="40">040&nbsp;&nbsp;Violin</option>
          <option value="41">041&nbsp;&nbsp;Viola</option>
          <option value="42">042&nbsp;&nbsp;Cello</option>
          <option value="43">043&nbsp;&nbsp;Contrabass</option>
          <option value="44">044&nbsp;&nbsp;Tremolo Strings</option>
          <option value="45">045&nbsp;&nbsp;Pizzicato Strings</option>
          <option value="46">046&nbsp;&nbsp;Orchestral Harp</option>
          <option value="47">047&nbsp;&nbsp;Timpani</option>
          <option value="48">048&nbsp;&nbsp;Ensemble Strings</option>
          <option value="49">049&nbsp;&nbsp;Slow Strings</option>
          <option value="50">050&nbsp;&nbsp;Synth Strings 1</option>
          <option value="51">051&nbsp;&nbsp;Synth Strings 2</option>
          <option value="52">052&nbsp;&nbsp;Choir Aahs</option>
          <option value="53">053&nbsp;&nbsp;Voice Oohs</option>
          <option value="54">054&nbsp;&nbsp;Syn Choir</option>
          <option value="55">055&nbsp;&nbsp;Orchestra Hit</option>
          <option value="56">056&nbsp;&nbsp;Trumpet</option>
          <option value="57">057&nbsp;&nbsp;Trombone</option>
          <option value="58">058&nbsp;&nbsp;Tuba</option>
          <option value="59">059&nbsp;&nbsp;Muted Trumpet</option>
          <option value="60">060&nbsp;&nbsp;French Horn</option>
          <option value="61">061&nbsp;&nbsp;Brass Ensemble</option>
          <option value="62">062&nbsp;&nbsp;Syn Brass 1</option>
          <option value="63">063&nbsp;&nbsp;Syn Brass 2</option>
          <option value="64">064&nbsp;&nbsp;Soprano Sax</option>
          <option value="65">065&nbsp;&nbsp;Alto Sax</option>
          <option value="66">066&nbsp;&nbsp;Tenor Sax</option>
          <option value="67">067&nbsp;&nbsp;Baritone Sax</option>
          <option value="68">068&nbsp;&nbsp;Oboe</option>
          <option value="69">069&nbsp;&nbsp;English Horn</option>
          <option value="70">070&nbsp;&nbsp;Bassoon</option>
          <option value="71">071&nbsp;&nbsp;Clarinet</option>
          <option value="72">072&nbsp;&nbsp;Piccolo</option>
          <option value="73">073&nbsp;&nbsp;Flute</option>
          <option value="74">074&nbsp;&nbsp;Recorder</option>
          <option value="75">075&nbsp;&nbsp;Pan Flute</option>
          <option value="76">076&nbsp;&nbsp;Bottle Blow</option>
          <option value="77">077&nbsp;&nbsp;Shakuhachi</option>
          <option value="78">078&nbsp;&nbsp;Whistle</option>
          <option value="79">079&nbsp;&nbsp;Ocarina</option>
          <option value="80">080&nbsp;&nbsp;Syn Square Wave</option>
          <option value="81">081&nbsp;&nbsp;Syn Saw Wave</option>
          <option value="82">082&nbsp;&nbsp;Syn Calliope</option>
          <option value="83">083&nbsp;&nbsp;Syn Chiff</option>
          <option value="84">084&nbsp;&nbsp;Syn Charang</option>
          <option value="85">085&nbsp;&nbsp;Syn Voice</option>
          <option value="86">086&nbsp;&nbsp;Syn Fifths Saw</option>
          <option value="87">087&nbsp;&nbsp;Syn Brass and Lead</option>
          <option value="88">088&nbsp;&nbsp;Fantasia</option>
          <option value="89">089&nbsp;&nbsp;Warm Pad</option>
          <option value="90">090&nbsp;&nbsp;Polysynth</option>
          <option value="91">091&nbsp;&nbsp;Space Vox</option>
          <option value="92">092&nbsp;&nbsp;Bowed Glass</option>
          <option value="93">093&nbsp;&nbsp;Metal Pad</option>
          <option value="94">094&nbsp;&nbsp;Halo Pad</option>
          <option value="95">095&nbsp;&nbsp;Sweep Pad</option>
          <option value="96">096&nbsp;&nbsp;Ice Rain</option>
          <option value="97">097&nbsp;&nbsp;Soundtrack</option>
          <option value="98">098&nbsp;&nbsp;Crystal</option>
          <option value="99">099&nbsp;&nbsp;Atmosphere</option>
          <option value="100">100&nbsp;&nbsp;Brightness</option>
          <option value="101">101&nbsp;&nbsp;Goblins</option>
          <option value="102">102&nbsp;&nbsp;Echo Drops</option>
          <option value="103">103&nbsp;&nbsp;Sci Fi</option>
          <option value="104">104&nbsp;&nbsp;Sitar</option>
          <option value="105">105&nbsp;&nbsp;Banjo</option>
          <option value="106">106&nbsp;&nbsp;Shamisen</option>
          <option value="107">107&nbsp;&nbsp;Koto</option>
          <option value="108">108&nbsp;&nbsp;Kalimba</option>
          <option value="109">109&nbsp;&nbsp;Bag Pipe</option>
          <option value="110">110&nbsp;&nbsp;Fiddle</option>
          <option value="111">111&nbsp;&nbsp;Shanai</option>
          <option value="112">112&nbsp;&nbsp;Tinkle Bell</option>
          <option value="113">113&nbsp;&nbsp;Agogo</option>
          <option value="114">114&nbsp;&nbsp;Steel Drums</option>
          <option value="115">115&nbsp;&nbsp;Woodblock</option>
          <option value="116">116&nbsp;&nbsp;Taiko Drum</option>
          <option value="117">117&nbsp;&nbsp;Melodic Tom</option>
          <option value="118">118&nbsp;&nbsp;Syn Drum</option>
          <option value="119">119&nbsp;&nbsp;Reverse Cymbal</option>
          <option value="120">120&nbsp;&nbsp;Guitar Fret Noise</option>
          <option value="121">121&nbsp;&nbsp;Breath Noise</option>
          <option value="122">122&nbsp;&nbsp;Seashore</option>
          <option value="123">123&nbsp;&nbsp;Bird</option>
          <option value="124">124&nbsp;&nbsp;Telephone</option>
          <option value="125">125&nbsp;&nbsp;Helicopter</option>
          <option value="126">126&nbsp;&nbsp;Applause</option>
          <option value="127">127&nbsp;&nbsp;Gunshot</option>
        </select>
      </td>
      <td>
        <select
          name=""
          className="select"
          value={note1}
          onChange={(e) => setNote1(e.target.value)}
        >
          <option value="0">C0</option>
          <option value="1">Cs0</option>
          <option value="2">D0</option>
          <option value="3">Ds0</option>
          <option value="4">E0</option>
          <option value="5">F0</option>
          <option value="6">Fs0</option>
          <option value="7">G0</option>
          <option value="8">Gs0</option>
          <option value="9">A0</option>
          <option value="10">As0</option>
          <option value="11">B0</option>
          <option value="12">C1</option>
          <option value="13">Cs1</option>
          <option value="14">D1</option>
          <option value="15">Ds1</option>
          <option value="16">E1</option>
          <option value="17">F1</option>
          <option value="18">Fs1</option>
          <option value="19">G1</option>
          <option value="20">Gs1</option>
          <option value="21">A1</option>
          <option value="22">As1</option>
          <option value="23">B1</option>
          <option value="24">C2</option>
          <option value="25">Cs2</option>
          <option value="26">D2</option>
          <option value="27">Ds2</option>
          <option value="28">E2</option>
          <option value="29">F2</option>
          <option value="30">Fs2</option>
          <option value="31">G2</option>
          <option value="32">Gs2</option>
          <option value="33">A2</option>
          <option value="34">As2</option>
          <option value="35">B2</option>
          <option value="36">C3</option>
          <option value="37">Cs3</option>
          <option value="38">D3</option>
          <option value="39">Ds3</option>
          <option value="40">E3</option>
          <option value="41">F3</option>
          <option value="42">Fs3</option>
          <option value="43">G3</option>
          <option value="44">Gs3</option>
          <option value="45">A3</option>
          <option value="46">As3</option>
          <option value="47">B3</option>
          <option value="48">C4</option>
          <option value="49">Cs4</option>
          <option value="50">D4</option>
          <option value="51">Ds4</option>
          <option value="52">E4</option>
          <option value="53">F4</option>
          <option value="54">Fs4</option>
          <option value="55">G4</option>
          <option value="56">Gs4</option>
          <option value="57">A4</option>
          <option value="58">As4</option>
          <option value="59">B4</option>
          <option value="60">C5</option>
          <option value="61">Cs5</option>
          <option value="62">D5</option>
          <option value="63">Ds5</option>
          <option value="64">E5</option>
          <option value="65">F5</option>
          <option value="66">Fs5</option>
          <option value="67">G5</option>
          <option value="68">Gs5</option>
          <option value="69">A5</option>
          <option value="70">As5</option>
          <option value="71">B5</option>
          <option value="72">C6</option>
          <option value="73">Cs6</option>
          <option value="74">D6</option>
          <option value="75">Ds6</option>
          <option value="76">E6</option>
          <option value="77">F6</option>
          <option value="78">Fs6</option>
          <option value="79">G6</option>
          <option value="80">Gs6</option>
          <option value="81">A6</option>
          <option value="82">As6</option>
          <option value="83">B6</option>
          <option value="84">C7</option>
          <option value="85">Cs7</option>
          <option value="86">D7</option>
          <option value="87">Ds7</option>
          <option value="88">E7</option>
          <option value="89">F7</option>
          <option value="90">Fs7</option>
          <option value="91">G7</option>
          <option value="92">Gs7</option>
          <option value="93">A7</option>
          <option value="94">As7</option>
          <option value="95">B7</option>
          <option value="96">C8</option>
          <option value="97">Cs8</option>
          <option value="98">D8</option>
          <option value="99">Ds8</option>
          <option value="100">E8</option>
          <option value="101">F8</option>
          <option value="102">Fs8</option>
          <option value="103">G8</option>
          <option value="104">Gs8</option>
          <option value="105">A8</option>
          <option value="106">As8</option>
          <option value="107">B8</option>
          <option value="108">C9</option>
          <option value="109">Cs9</option>
          <option value="110">D9</option>
          <option value="111">Ds9</option>
          <option value="112">E9</option>
          <option value="113">F9</option>
          <option value="114">Fs9</option>
          <option value="115">G9</option>
          <option value="116">Gs9</option>
          <option value="117">A9</option>
          <option value="118">As9</option>
          <option value="119">B9</option>
          <option value="120">C10</option>
          <option value="121">Cs10</option>
          <option value="122">D10</option>
          <option value="123">Ds10</option>
          <option value="124">E10</option>
          <option value="125">F10</option>
          <option value="126">Fs10</option>
          <option value="127">G10</option>
        </select>
      </td>
      <td style={{ textAlign: "center" }}>
        <input
          type="checkbox"
          checked={checkX1}
          onChange={(e) => setCheckX1(!checkX1)}
        />
      </td>
      <td>
        <select
          className="select"
          value={vol1}
          onChange={(e) => setVol1(e.target.value)}
        >
          <option value="127">127</option>
          <option value="126">126</option>
          <option value="125">125</option>
          <option value="124">124</option>
          <option value="123">123</option>
          <option value="122">122</option>
          <option value="121">121</option>
          <option value="120">120</option>
          <option value="119">119</option>
          <option value="118">118</option>
          <option value="117">117</option>
          <option value="116">116</option>
          <option value="115">115</option>
          <option value="114">114</option>
          <option value="113">113</option>
          <option value="112">112</option>
          <option value="111">111</option>
          <option value="110">110</option>
          <option value="109">109</option>
          <option value="108">108</option>
          <option value="107">107</option>
          <option value="106">106</option>
          <option value="105">105</option>
          <option value="104">104</option>
          <option value="103">103</option>
          <option value="102">102</option>
          <option value="101">101</option>
          <option value="100">100</option>
          <option value="99">99</option>
          <option value="98">98</option>
          <option value="97">97</option>
          <option value="96">96</option>
          <option value="95">95</option>
          <option value="94">94</option>
          <option value="93">93</option>
          <option value="92">92</option>
          <option value="91">91</option>
          <option value="90">90</option>
          <option value="89">89</option>
          <option value="88">88</option>
          <option value="87">87</option>
          <option value="86">86</option>
          <option value="85">85</option>
          <option value="84">84</option>
          <option value="83">83</option>
          <option value="82">82</option>
          <option value="81">81</option>
          <option value="80">80</option>
          <option value="79">79</option>
          <option value="78">78</option>
          <option value="77">77</option>
          <option value="76">76</option>
          <option value="75">75</option>
          <option value="74">74</option>
          <option value="73">73</option>
          <option value="72">72</option>
          <option value="71">71</option>
          <option value="70">70</option>
          <option value="69">69</option>
          <option value="68">68</option>
          <option value="67">67</option>
          <option value="66">66</option>
          <option value="65">65</option>
          <option value="64">64</option>
          <option value="63">63</option>
          <option value="62">62</option>
          <option value="61">61</option>
          <option value="60">60</option>
          <option value="59">59</option>
          <option value="58">58</option>
          <option value="57">57</option>
          <option value="56">56</option>
          <option value="55">55</option>
          <option value="54">54</option>
          <option value="53">53</option>
          <option value="52">52</option>
          <option value="51">51</option>
          <option value="50">50</option>
          <option value="49">49</option>
          <option value="48">48</option>
          <option value="47">47</option>
          <option value="46">46</option>
          <option value="45">45</option>
          <option value="44">44</option>
          <option value="43">43</option>
          <option value="42">42</option>
          <option value="41">41</option>
          <option value="40">40</option>
          <option value="39">39</option>
          <option value="38">38</option>
          <option value="37">37</option>
          <option value="36">36</option>
          <option value="35">35</option>
          <option value="34">34</option>
          <option value="33">33</option>
          <option value="32">32</option>
          <option value="31">31</option>
          <option value="30">30</option>
          <option value="29">29</option>
          <option value="28">28</option>
          <option value="27">27</option>
          <option value="26">26</option>
          <option value="25">25</option>
          <option value="24">24</option>
          <option value="23">23</option>
          <option value="22">22</option>
          <option value="21">21</option>
          <option value="20">20</option>
          <option value="19">19</option>
          <option value="18">18</option>
          <option value="17">17</option>
          <option value="16">16</option>
          <option value="15">15</option>
          <option value="14">14</option>
          <option value="13">13</option>
          <option value="12">12</option>
          <option value="11">11</option>
          <option value="10">10</option>
          <option value="9">9</option>
          <option value="8">8</option>
          <option value="7">7</option>
          <option value="6">6</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
          <option value="0">0</option>
        </select>
      </td>
      <td class="mediumGrey">
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={pcb1}
          onChange={() => setPcb1(!pcb1)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={pcb2}
          onChange={() => setPcb2(!pcb2)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={pcb3}
          onChange={() => setPcb3(!pcb3)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={pcb4}
          onChange={() => setPcb4(!pcb4)}
        />
      </td>
      <td class="lightGrey">
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={pcb5}
          onChange={() => setPcb5(!pcb5)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={pcb6}
          onChange={() => setPcb6(!pcb6)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={pcb7}
          onChange={() => setPcb7(!pcb7)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={pcb8}
          onChange={() => setPcb8(!pcb8)}
        />
      </td>
      <td class="mediumGrey">
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={pcb9}
          onChange={() => setPcb9(!pcb9)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={pcb10}
          onChange={() => setPcb10(!pcb10)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={pcb11}
          onChange={() => setPcb11(!pcb11)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={pcb12}
          onChange={() => setPcb12(!pcb12)}
        />
      </td>
      <td class="lightGrey">
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={pcb13}
          onChange={() => setPcb13(!pcb13)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={pcb14}
          onChange={() => setPcb14(!pcb14)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={pcb15}
          onChange={() => setPcb15(!pcb15)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={pcb16}
          onChange={() => setPcb16(!pcb16)}
        />
      </td>
    </tr>
  );
};

export default HarmonyRow;
