import { useState } from "react";

const DrumsRow = ({ row, handleOnNotes, bi, ri, handleOnPlay }) => {
  const [instrument1, setInstrument1] = useState(row.instrument);
  const [vol1, setVol1] = useState(row.vol);
  const [note1, setNote1] = useState(row.note);

  return (
    <tr style={{ backgroundColor: "#bbbbbb" }}>
      <td style={{ textAlign: "center" }}>
        <input
          type="checkbox"
          checked={row.onPlay}
          onChange={() => handleOnPlay(bi, ri)}
        />
      </td>
      <td>
        <select
          name=""
          className="select"
          value={instrument1}
          onChange={(e) => setInstrument1(e.target.value)}
        >
          <option value="35">035&nbsp;&nbsp;Acoustic Bass Drum</option>
          <option value="36">036&nbsp;&nbsp;Bass Drum 1</option>
          <option value="37">037&nbsp;&nbsp;Side Stick</option>
          <option value="38">038&nbsp;&nbsp;Acoustic Snare</option>
          <option value="39">039&nbsp;&nbsp;Hand Clap</option>
          <option value="40">040&nbsp;&nbsp;Electric Snare</option>
          <option value="41">041&nbsp;&nbsp;Low Floor Tom</option>
          <option value="42">042&nbsp;&nbsp;Closed Hi-Hat</option>
          <option value="43">043&nbsp;&nbsp;High Floor Tom</option>
          <option value="44">044&nbsp;&nbsp;Pedal Hi-Hat</option>
          <option value="45">045&nbsp;&nbsp;Low Tom</option>
          <option value="46">046&nbsp;&nbsp;Open Hi-Hat</option>
          <option value="47">047&nbsp;&nbsp;Low Mid Tom</option>
          <option value="48">048&nbsp;&nbsp;High Mid Tom</option>
          <option value="49">049&nbsp;&nbsp;Crash Cymbal 1</option>
          <option value="50">050&nbsp;&nbsp;High Tom</option>
          <option value="51">051&nbsp;&nbsp;Ride Cymbal 1</option>
          <option value="52">052&nbsp;&nbsp;Chinese Cymbal</option>
          <option value="53">053&nbsp;&nbsp;Ride Bell</option>
          <option value="54">054&nbsp;&nbsp;Tambourine</option>
          <option value="55">055&nbsp;&nbsp;Splash Cymbal</option>
          <option value="56">056&nbsp;&nbsp;Cowbell</option>
          <option value="57">057&nbsp;&nbsp;Crash Cymbal 2</option>
          <option value="58">058&nbsp;&nbsp;Vibraslap</option>
          <option value="59">059&nbsp;&nbsp;Ride Cymbal 2</option>
          <option value="60">060&nbsp;&nbsp;High Bongo</option>
          <option value="61">061&nbsp;&nbsp;Low Bongo</option>
          <option value="62">062&nbsp;&nbsp;Mute High Conga</option>
          <option value="63">063&nbsp;&nbsp;Open High Conga</option>
          <option value="64">064&nbsp;&nbsp;Low Conga</option>
          <option value="65">065&nbsp;&nbsp;High Timbale</option>
          <option value="66">066&nbsp;&nbsp;Low Timbale</option>
          <option value="67">067&nbsp;&nbsp;High Agogo</option>
          <option value="68">068&nbsp;&nbsp;Low Agogo</option>
          <option value="69">069&nbsp;&nbsp;Cabase</option>
          <option value="70">070&nbsp;&nbsp;Maracas</option>
          <option value="71">071&nbsp;&nbsp;Short Whistle</option>
          <option value="72">072&nbsp;&nbsp;Long Whistle</option>
          <option value="73">073&nbsp;&nbsp;Short Guiro</option>
          <option value="74">074&nbsp;&nbsp;Long Guiro</option>
          <option value="75">075&nbsp;&nbsp;Claves</option>
          <option value="76">076&nbsp;&nbsp;High Wood Block</option>
          <option value="77">077&nbsp;&nbsp;Low Wood Block</option>
          <option value="78">078&nbsp;&nbsp;Mute Cuica</option>
          <option value="79">079&nbsp;&nbsp;Open Cuica</option>
          <option value="80">080&nbsp;&nbsp;Mute Triangle</option>
          <option value="81">081&nbsp;&nbsp;Open Triangle</option>
          <option value="82">082&nbsp;&nbsp;Fx</option>
        </select>
      </td>
      <td colSpan="2">
        <select
          name=""
          className="select"
          value={note1}
          onChange={(e) => setNote1(e.target.value)}
        >
          <option value="1">Dry</option>
          <option value="9">Room</option>
          <option value="19">Power</option>
          <option value="25">Electronic</option>
          <option value="33">Jazz</option>
          <option value="41">Brush</option>
          <option value="57">SFX</option>
          <option value="128">Default</option>
        </select>
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
      <td className="mediumGrey">
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={row.onNotes.includes(1)}
          onChange={() => handleOnNotes(bi, ri, 1)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={row.onNotes.includes(2)}
          onChange={() => handleOnNotes(bi, ri, 2)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={row.onNotes.includes(3)}
          onChange={() => handleOnNotes(bi, ri, 3)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={row.onNotes.includes(4)}
          onChange={() => handleOnNotes(bi, ri, 4)}
        />
      </td>
      <td className="lightGrey">
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={row.onNotes.includes(5)}
          onChange={() => handleOnNotes(bi, ri, 5)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={row.onNotes.includes(6)}
          onChange={() => handleOnNotes(bi, ri, 6)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={row.onNotes.includes(7)}
          onChange={() => handleOnNotes(bi, ri, 7)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={row.onNotes.includes(8)}
          onChange={() => handleOnNotes(bi, ri, 8)}
        />
      </td>
      <td className="mediumGrey">
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={row.onNotes.includes(9)}
          onChange={() => handleOnNotes(bi, ri, 9)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={row.onNotes.includes(10)}
          onChange={() => handleOnNotes(bi, ri, 10)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={row.onNotes.includes(11)}
          onChange={() => handleOnNotes(bi, ri, 11)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={row.onNotes.includes(12)}
          onChange={() => handleOnNotes(bi, ri, 12)}
        />
      </td>
      <td className="lightGrey">
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={row.onNotes.includes(13)}
          onChange={() => handleOnNotes(bi, ri, 13)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={row.onNotes.includes(14)}
          onChange={() => handleOnNotes(bi, ri, 14)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={row.onNotes.includes(15)}
          onChange={() => handleOnNotes(bi, ri, 15)}
        />
        <input
          className="inputCheckbox"
          type="checkbox"
          checked={row.onNotes.includes(16)}
          onChange={() => handleOnNotes(bi, ri, 16)}
        />
      </td>
    </tr>
  );
};

export default DrumsRow;
