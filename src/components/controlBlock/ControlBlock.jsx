import { useState } from "react";
import "./control.css";

const ControlBlock = ({ addBlock }) => {
  const [bpmValue, setBpmValue] = useState(100);
  const [loopValue, setLoopValue] = useState("loop");
  return (
    <div className="controlBlock">
      <div className="leftControl">
        <img
          className="imgIcon"
          src="./assets/icon/outline_logout_black_24dp.png"
          alt=""
        />
        <div className="settingCt">
          <img
            className="imgIcon"
            src="./assets/icon/outline_setting_black_24dp.png"
            alt=""
          />
          <div className="settingOption">
            <h6>Select one</h6>
            <ul>
              <li onClick={() => addBlock("drums")}>Drums</li>
              <li>Harmony</li>
              <li>Vocal</li>
            </ul>
          </div>
        </div>
        <div className="volumeControl">
          <div className="vol"></div>
          <span className="textVol">Vol</span>
        </div>
      </div>
      <div className="mainControl">
        <div className="audioControlGroup">
          <div className="audioControlItem">
            <div className="icon squareIcon"></div>
          </div>
          <div className="audioControlItem">
            <div className="icon triangleIcon"></div>
          </div>
          <div className="audioControlItem">
            <div className="icon playIcon"></div>
          </div>
        </div>
        <div className="bpmControl">
          <input
            id="bpmInput"
            name="quantity"
            min="30"
            max="250"
            type="number"
            value={bpmValue}
            onChange={(e) => setBpmValue(e.target.value)}
          />
          <span className="bpmText">BMP</span>
        </div>
        <div className="loopControl">
          <img
            className="imgIcon"
            src="./assets/icon/outline_loop_black_24dp.png"
            alt=""
          />
          <select
            name="loop"
            id="loopSelect"
            value={loopValue}
            onChange={(e) => setLoopValue(e.target.value)}
          >
            <option value="loop">Loop</option>
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
          </select>
        </div>
        <div className="fileControl">
          <div className="fileItem">
            <img
              className="imgIcon"
              src="./assets/icon/outline_file_upload_black_24dp.png"
              alt=""
            />
          </div>
          <div className="fileItem">
            <img
              className="imgIcon"
              src="./assets/icon/outline_file_download_black_24dp.png"
              alt=""
            />
          </div>
          <div className="fileItem">
            <img
              className="imgIcon"
              src="./assets/icon/outline_save_black_24dp.png"
              alt=""
            />
          </div>
          <div className="fileItem">
            <select name="" id="fileSelect" value="new">
              <option value="new">New</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlBlock;
