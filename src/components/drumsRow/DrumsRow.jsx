import { useState, useEffect } from "react";

const DrumsRow = ({
  row,
  handleOnNotes,
  bi,
  ri,
  handleOnPlay,
  handleInstrumentChange,
  handleNoteChange,
  handleVolChange,
}) => {
  const [instrument, setInstrument] = useState();

  useEffect(() => {
    var options = document.querySelectorAll("#drumsInstrument > option");
    var u = 0;
    for (let i = 0; i < options.length; i++) {
      if (Number(options[i].getAttribute("value")) === row.instrument) {
        u = Number(options[i].getAttribute("data-toggle"));
        break;
      }
    }
    setInstrument(u);
  }, [row.instrument]);

  const handleOnChange = (e) => {
    var options = document.querySelectorAll("#drumsInstrument > option");

    for (let i = 0; i < options.length; i++) {
      options[i].style.display = "block";

      if (
        Number(options[i].getAttribute("data-toggle")) !==
        Number(e.target.value)
      ) {
        options[i].style.display = "none";
      }
    }
    setInstrument(Number(e.target.value));
  };

  return (
    <tr style={{ backgroundColor: "#bbbbbb" }}>
      <td style={{ textAlign: "center" }}>
        <input
          type="checkbox"
          checked={row.onPlay}
          onChange={() => handleOnPlay(bi, ri)}
        />
      </td>
      <td style={{ width: "97px" }}>
        <select
          name=""
          className="select"
          style={{ width: "100%" }}
          value={instrument}
          onChange={(e) => handleOnChange(e)}
        >
          <option value="1">Bass Drum 1</option>
          <option value="2">Bass Drum 2</option>
          <option value="3">Closed Hi-hat</option>
          <option value="4">Open Hi-hat</option>
          <option value="5">Pedal Hi-hat</option>
          <option value="6">Snare Drum 1</option>
          <option value="7">Snare Drum 2</option>
          <option value="8">Hand Clap</option>
          <option value="9">Side Stick/Rimshot</option>
          <option value="10">Low Tom 1</option>
          <option value="11">Low Tom 2</option>
          <option value="12">Mid Tom 1</option>
          <option value="13">Mid Tom 2</option>
          <option value="14">High Tom 1</option>
          <option value="15">High Tom 2</option>
          <option value="16">Crash Cymbal 1</option>
          <option value="17">Crash Cymbal 2</option>
          <option value="18">Splash Cymbal</option>
          <option value="19">Chinese Cymbal</option>
          <option value="20">Ride Cymbal 1</option>
          <option value="21">Cymbal 2</option>
          <option value="22">Ride Bell</option>
          <option value="23">Cowbell</option>
          <option value="24">High Bongo</option>
          <option value="25">Low Bongo</option>
          <option value="26">Mute High Conga</option>
          <option value="27">Open High Conga</option>
          <option value="28">Low Conga</option>
          <option value="29">Tambourine</option>
          <option value="30">Vibra Slap</option>
          <option value="31">High Timbale</option>
          <option value="32">Low Timbale</option>
          <option value="33">High Agogo</option>
          <option value="34">Low Agogo</option>
          <option value="35">Cabasa</option>
          <option value="36">Maracas</option>
          <option value="37">Short Whistle</option>
          <option value="38">Long Whistle</option>
          <option value="39">Short Guiro</option>
          <option value="40">Long Guiro</option>
          <option value="41">Claves</option>
          <option value="42">High Wood Block</option>
          <option value="43">Low Wood Block</option>
          <option value="44">Mute Cuica</option>
          <option value="45">Open Cuica</option>
          <option value="46">Mute Triangle</option>
          <option value="47">Open Triangle</option>
        </select>
      </td>
      <td colSpan="2">
        <select
          name=""
          style={{maxWidth: "139px"}}
          className="select"
          value={row.instrument}
          onChange={(e) => handleInstrumentChange(bi, ri, e.target.value)}
          id="drumsInstrument"
        >
          <option value="05" data-toggle="1">
            05. Bass Drum 1
          </option>
          <option value="06" data-toggle="1">
            06. Bass Drum 1
          </option>
          <option value="07" data-toggle="1">
            07. Bass Drum 1
          </option>
          <option value="08" data-toggle="1">
            08. Bass Drum 1
          </option>
          <option value="09" data-toggle="1">
            09. Bass Drum 1
          </option>
          <option value="0" data-toggle="2">
            0. Bass Drum 2
          </option>
          <option value="01" data-toggle="2">
            01. Bass Drum 2
          </option>
          <option value="02" data-toggle="2">
            02. Bass Drum 2
          </option>
          <option value="03" data-toggle="2">
            03. Bass Drum 2
          </option>
          <option value="04" data-toggle="2">
            04. Bass Drum 2
          </option>
          <option value="35" data-toggle="3">
            35. Closed Hi-hat
          </option>
          <option value="36" data-toggle="3">
            36. Closed Hi-hat
          </option>
          <option value="37" data-toggle="3">
            37. Closed Hi-hat
          </option>
          <option value="38" data-toggle="3">
            38. Closed Hi-hat
          </option>
          <option value="39" data-toggle="3">
            39. Closed Hi-hat
          </option>
          <option value="55" data-toggle="4">
            55. Open Hi-hat
          </option>
          <option value="56" data-toggle="4">
            56. Open Hi-hat
          </option>
          <option value="57" data-toggle="4">
            57. Open Hi-hat
          </option>
          <option value="58" data-toggle="4">
            58. Open Hi-hat
          </option>
          <option value="59" data-toggle="4">
            59. Open Hi-hat
          </option>
          <option value="45" data-toggle="5">
            45. Pedal Hi-hat
          </option>
          <option value="46" data-toggle="5">
            46. Pedal Hi-hat
          </option>
          <option value="47" data-toggle="5">
            47. Pedal Hi-hat
          </option>
          <option value="48" data-toggle="5">
            48. Pedal Hi-hat
          </option>
          <option value="49" data-toggle="5">
            49. Pedal Hi-hat
          </option>
          <option value="15" data-toggle="6">
            15. Snare Drum 1
          </option>
          <option value="16" data-toggle="6">
            16. Snare Drum 1
          </option>
          <option value="17" data-toggle="6">
            17. Snare Drum 1
          </option>
          <option value="18" data-toggle="6">
            18. Snare Drum 1
          </option>
          <option value="19" data-toggle="6">
            19. Snare Drum 1
          </option>
          <option value="25" data-toggle="7">
            25. Snare Drum 2
          </option>
          <option value="26" data-toggle="7">
            26. Snare Drum 2
          </option>
          <option value="27" data-toggle="7">
            27. Snare Drum 2
          </option>
          <option value="28" data-toggle="7">
            28. Snare Drum 2
          </option>
          <option value="29" data-toggle="7">
            29. Snare Drum 2
          </option>
          <option value="20" data-toggle="8">
            20. Hand Clap
          </option>
          <option value="21" data-toggle="8">
            21. Hand Clap
          </option>
          <option value="22" data-toggle="8">
            22. Hand Clap
          </option>
          <option value="23" data-toggle="8">
            23. Hand Clap
          </option>
          <option value="24" data-toggle="8">
            24. Hand Clap
          </option>
          <option value="10" data-toggle="9">
            10. Side Stick/Rimshot
          </option>
          <option value="11" data-toggle="9">
            11. Side Stick/Rimshot
          </option>
          <option value="12" data-toggle="9">
            12. Side Stick/Rimshot
          </option>
          <option value="13" data-toggle="9">
            13. Side Stick/Rimshot
          </option>
          <option value="14" data-toggle="9">
            14. Side Stick/Rimshot
          </option>
          <option value="40" data-toggle="10">
            40. Low Tom 1
          </option>
          <option value="41" data-toggle="10">
            41. Low Tom 1
          </option>
          <option value="42" data-toggle="10">
            42. Low Tom 1
          </option>
          <option value="43" data-toggle="10">
            43. Low Tom 1
          </option>
          <option value="44" data-toggle="10">
            44. Low Tom 1
          </option>
          <option value="30" data-toggle="11">
            30. Low Tom 2
          </option>
          <option value="31" data-toggle="11">
            31. Low Tom 2
          </option>
          <option value="32" data-toggle="11">
            32. Low Tom 2
          </option>
          <option value="33" data-toggle="11">
            33. Low Tom 2
          </option>
          <option value="34" data-toggle="11">
            34. Low Tom 2
          </option>
          <option value="60" data-toggle="12">
            60. Mid Tom 1
          </option>
          <option value="61" data-toggle="12">
            61. Mid Tom 1
          </option>
          <option value="62" data-toggle="12">
            62. Mid Tom 1
          </option>
          <option value="63" data-toggle="12">
            63. Mid Tom 1
          </option>
          <option value="64" data-toggle="12">
            64. Mid Tom 1
          </option>
          <option value="50" data-toggle="13">
            50. Mid Tom 2
          </option>
          <option value="51" data-toggle="13">
            51. Mid Tom 2
          </option>
          <option value="52" data-toggle="13">
            52. Mid Tom 2
          </option>
          <option value="53" data-toggle="13">
            53. Mid Tom 2
          </option>
          <option value="54" data-toggle="13">
            54. Mid Tom 2
          </option>
          <option value="75" data-toggle="14">
            75. High Tom 1
          </option>
          <option value="76" data-toggle="14">
            76. High Tom 1
          </option>
          <option value="77" data-toggle="14">
            77. High Tom 1
          </option>
          <option value="78" data-toggle="14">
            78. High Tom 1
          </option>
          <option value="79" data-toggle="14">
            79. High Tom 1
          </option>
          <option value="65" data-toggle="15">
            65. High Tom 2
          </option>
          <option value="66" data-toggle="15">
            66. High Tom 2
          </option>
          <option value="67" data-toggle="15">
            67. High Tom 2
          </option>
          <option value="68" data-toggle="15">
            68. High Tom 2
          </option>
          <option value="69" data-toggle="15">
            69. High Tom 2
          </option>
          <option value="70" data-toggle="16">
            70. Crash Cymbal 1
          </option>
          <option value="71" data-toggle="16">
            71. Crash Cymbal 1
          </option>
          <option value="72" data-toggle="16">
            72. Crash Cymbal 1
          </option>
          <option value="73" data-toggle="16">
            73. Crash Cymbal 1
          </option>
          <option value="74" data-toggle="16">
            74. Crash Cymbal 1
          </option>
          <option value="110" data-toggle="17">
            110. Crash Cymbal 2
          </option>
          <option value="111" data-toggle="17">
            111. Crash Cymbal 2
          </option>
          <option value="112" data-toggle="17">
            112. Crash Cymbal 2
          </option>
          <option value="113" data-toggle="17">
            113. Crash Cymbal 2
          </option>
          <option value="114" data-toggle="17">
            114. Crash Cymbal 2
          </option>
          <option value="100" data-toggle="18">
            100. Splash Cymbal
          </option>
          <option value="101" data-toggle="18">
            101. Splash Cymbal
          </option>
          <option value="102" data-toggle="18">
            102. Splash Cymbal
          </option>
          <option value="103" data-toggle="18">
            103. Splash Cymbal
          </option>
          <option value="104" data-toggle="18">
            104. Splash Cymbal
          </option>
          <option value="85" data-toggle="19">
            85. Chinese Cymbal
          </option>
          <option value="86" data-toggle="19">
            86. Chinese Cymbal
          </option>
          <option value="87" data-toggle="19">
            87. Chinese Cymbal
          </option>
          <option value="88" data-toggle="19">
            88. Chinese Cymbal
          </option>
          <option value="89" data-toggle="19">
            89. Chinese Cymbal
          </option>
          <option value="80" data-toggle="20">
            80. Ride Cymbal 1
          </option>
          <option value="81" data-toggle="20">
            81. Ride Cymbal 1
          </option>
          <option value="82" data-toggle="20">
            82. Ride Cymbal 1
          </option>
          <option value="83" data-toggle="20">
            83. Ride Cymbal 1
          </option>
          <option value="84" data-toggle="20">
            84. Ride Cymbal 1
          </option>
          <option value="120" data-toggle="21">
            120. Ride Cymbal 2
          </option>
          <option value="121" data-toggle="21">
            121. Ride Cymbal 2
          </option>
          <option value="122" data-toggle="21">
            122. Ride Cymbal 2
          </option>
          <option value="123" data-toggle="21">
            123. Ride Cymbal 2
          </option>
          <option value="124" data-toggle="21">
            124. Ride Cymbal 2
          </option>
          <option value="90" data-toggle="22">
            90. Ride Bell
          </option>
          <option value="91" data-toggle="22">
            91. Ride Bell
          </option>
          <option value="92" data-toggle="22">
            92. Ride Bell
          </option>
          <option value="93" data-toggle="22">
            93. Ride Bell
          </option>
          <option value="94" data-toggle="22">
            94. Ride Bell
          </option>
          <option value="105" data-toggle="23">
            105. Cowbell
          </option>
          <option value="106" data-toggle="23">
            106. Cowbell
          </option>
          <option value="107" data-toggle="23">
            107. Cowbell
          </option>
          <option value="108" data-toggle="23">
            108. Cowbell
          </option>
          <option value="109" data-toggle="23">
            109. Cowbell
          </option>
          <option value="125" data-toggle="24">
            125. High Bongo
          </option>
          <option value="126" data-toggle="24">
            126. High Bongo
          </option>
          <option value="127" data-toggle="24">
            127. High Bongo
          </option>
          <option value="128" data-toggle="24">
            128. High Bongo
          </option>
          <option value="129" data-toggle="24">
            129. High Bongo
          </option>
          <option value="130" data-toggle="25">
            130. Low Bongo
          </option>
          <option value="131" data-toggle="25">
            131. Low Bongo
          </option>
          <option value="132" data-toggle="25">
            132. Low Bongo
          </option>
          <option value="133" data-toggle="25">
            133. Low Bongo
          </option>
          <option value="134" data-toggle="25">
            134. Low Bongo
          </option>
          <option value="135" data-toggle="26">
            135. Mute High Conga
          </option>
          <option value="136" data-toggle="26">
            136. Mute High Conga
          </option>
          <option value="137" data-toggle="26">
            137. Mute High Conga
          </option>
          <option value="138" data-toggle="26">
            138. Mute High Conga
          </option>
          <option value="139" data-toggle="26">
            139. Mute High Conga
          </option>
          <option value="140" data-toggle="27">
            140. Open High Conga
          </option>
          <option value="141" data-toggle="27">
            141. Open High Conga
          </option>
          <option value="142" data-toggle="27">
            142. Open High Conga
          </option>
          <option value="143" data-toggle="27">
            143. Open High Conga
          </option>
          <option value="144" data-toggle="27">
            144. Open High Conga
          </option>
          <option value="145" data-toggle="28">
            145. Low Conga
          </option>
          <option value="146" data-toggle="28">
            146. Low Conga
          </option>
          <option value="147" data-toggle="28">
            147. Low Conga
          </option>
          <option value="148" data-toggle="28">
            148. Low Conga
          </option>
          <option value="149" data-toggle="28">
            149. Low Conga
          </option>
          <option value="95" data-toggle="29">
            95. Tambourine
          </option>
          <option value="96" data-toggle="29">
            96. Tambourine
          </option>
          <option value="97" data-toggle="29">
            97. Tambourine
          </option>
          <option value="98" data-toggle="29">
            98. Tambourine
          </option>
          <option value="99" data-toggle="29">
            99. Tambourine
          </option>
          <option value="115" data-toggle="30">
            115. Vibra Slap
          </option>
          <option value="116" data-toggle="30">
            116. Vibra Slap
          </option>
          <option value="117" data-toggle="30">
            117. Vibra Slap
          </option>
          <option value="118" data-toggle="30">
            118. Vibra Slap
          </option>
          <option value="119" data-toggle="30">
            119. Vibra Slap
          </option>
          <option value="150" data-toggle="31">
            150. High Timbale
          </option>
          <option value="151" data-toggle="31">
            151. High Timbale
          </option>
          <option value="152" data-toggle="31">
            152. High Timbale
          </option>
          <option value="153" data-toggle="31">
            153. High Timbale
          </option>
          <option value="154" data-toggle="31">
            154. High Timbale
          </option>
          <option value="155" data-toggle="32">
            155. Low Timbale
          </option>
          <option value="156" data-toggle="32">
            156. Low Timbale
          </option>
          <option value="157" data-toggle="32">
            157. Low Timbale
          </option>
          <option value="158" data-toggle="32">
            158. Low Timbale
          </option>
          <option value="159" data-toggle="32">
            159. Low Timbale
          </option>
          <option value="160" data-toggle="33">
            160. High Agogo
          </option>
          <option value="161" data-toggle="33">
            161. High Agogo
          </option>
          <option value="162" data-toggle="33">
            162. High Agogo
          </option>
          <option value="163" data-toggle="33">
            163. High Agogo
          </option>
          <option value="164" data-toggle="33">
            164. High Agogo
          </option>
          <option value="165" data-toggle="34">
            165. Low Agogo
          </option>
          <option value="166" data-toggle="34">
            166. Low Agogo
          </option>
          <option value="167" data-toggle="34">
            167. Low Agogo
          </option>
          <option value="168" data-toggle="34">
            168. Low Agogo
          </option>
          <option value="169" data-toggle="34">
            169. Low Agogo
          </option>
          <option value="170" data-toggle="35">
            170. Cabasa
          </option>
          <option value="171" data-toggle="35">
            171. Cabasa
          </option>
          <option value="172" data-toggle="35">
            172. Cabasa
          </option>
          <option value="173" data-toggle="35">
            173. Cabasa
          </option>
          <option value="174" data-toggle="35">
            174. Cabasa
          </option>
          <option value="175" data-toggle="36">
            175. Maracas
          </option>
          <option value="176" data-toggle="36">
            176. Maracas
          </option>
          <option value="177" data-toggle="36">
            177. Maracas
          </option>
          <option value="178" data-toggle="36">
            178. Maracas
          </option>
          <option value="179" data-toggle="36">
            179. Maracas
          </option>
          <option value="180" data-toggle="37">
            180. Short Whistle
          </option>
          <option value="181" data-toggle="37">
            181. Short Whistle
          </option>
          <option value="182" data-toggle="37">
            182. Short Whistle
          </option>
          <option value="183" data-toggle="37">
            183. Short Whistle
          </option>
          <option value="184" data-toggle="37">
            184. Short Whistle
          </option>
          <option value="185" data-toggle="38">
            185. Long Whistle
          </option>
          <option value="186" data-toggle="38">
            186. Long Whistle
          </option>
          <option value="187" data-toggle="38">
            187. Long Whistle
          </option>
          <option value="188" data-toggle="38">
            188. Long Whistle
          </option>
          <option value="189" data-toggle="38">
            189. Long Whistle
          </option>
          <option value="190" data-toggle="39">
            190. Short Guiro
          </option>
          <option value="191" data-toggle="39">
            191. Short Guiro
          </option>
          <option value="192" data-toggle="39">
            192. Short Guiro
          </option>
          <option value="193" data-toggle="39">
            193. Short Guiro
          </option>
          <option value="194" data-toggle="39">
            194. Short Guiro
          </option>
          <option value="195" data-toggle="40">
            195. Long Guiro
          </option>
          <option value="196" data-toggle="40">
            196. Long Guiro
          </option>
          <option value="197" data-toggle="40">
            197. Long Guiro
          </option>
          <option value="198" data-toggle="40">
            198. Long Guiro
          </option>
          <option value="199" data-toggle="40">
            199. Long Guiro
          </option>
          <option value="200" data-toggle="41">
            200. Claves
          </option>
          <option value="201" data-toggle="41">
            201. Claves
          </option>
          <option value="202" data-toggle="41">
            202. Claves
          </option>
          <option value="203" data-toggle="41">
            203. Claves
          </option>
          <option value="204" data-toggle="41">
            204. Claves
          </option>
          <option value="205" data-toggle="42">
            205. High Wood Block
          </option>
          <option value="206" data-toggle="42">
            206. High Wood Block
          </option>
          <option value="207" data-toggle="42">
            207. High Wood Block
          </option>
          <option value="208" data-toggle="42">
            208. High Wood Block
          </option>
          <option value="209" data-toggle="42">
            209. High Wood Block
          </option>
          <option value="210" data-toggle="43">
            210. Low Wood Block
          </option>
          <option value="211" data-toggle="43">
            211. Low Wood Block
          </option>
          <option value="212" data-toggle="43">
            212. Low Wood Block
          </option>
          <option value="213" data-toggle="43">
            213. Low Wood Block
          </option>
          <option value="214" data-toggle="43">
            214. Low Wood Block
          </option>
          <option value="215" data-toggle="44">
            215. Mute Cuica
          </option>
          <option value="216" data-toggle="44">
            216. Mute Cuica
          </option>
          <option value="217" data-toggle="44">
            217. Mute Cuica
          </option>
          <option value="218" data-toggle="44">
            218. Mute Cuica
          </option>
          <option value="219" data-toggle="44">
            219. Mute Cuica
          </option>
          <option value="220" data-toggle="45">
            220. Open Cuica
          </option>
          <option value="221" data-toggle="45">
            221. Open Cuica
          </option>
          <option value="222" data-toggle="45">
            222. Open Cuica
          </option>
          <option value="223" data-toggle="45">
            223. Open Cuica
          </option>
          <option value="224" data-toggle="45">
            224. Open Cuica
          </option>
          <option value="225" data-toggle="46">
            225. Mute Triangle
          </option>
          <option value="226" data-toggle="46">
            226. Mute Triangle
          </option>
          <option value="227" data-toggle="46">
            227. Mute Triangle
          </option>
          <option value="228" data-toggle="46">
            228. Mute Triangle
          </option>
          <option value="229" data-toggle="46">
            229. Mute Triangle
          </option>
          <option value="230" data-toggle="47">
            230. Open Triangle
          </option>
          <option value="231" data-toggle="47">
            231. Open Triangle
          </option>
          <option value="232" data-toggle="47">
            232. Open Triangle
          </option>
          <option value="233" data-toggle="47">
            233. Open Triangle
          </option>
          <option value="234" data-toggle="47">
            234. Open Triangle
          </option>
        </select>
      </td>

      <td>
        <select
          className="select"
          value={row.vol}
          onChange={(e) => handleVolChange(bi, ri, e.target.value)}
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
