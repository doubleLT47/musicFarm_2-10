import { useState } from "react";
import "./script.css";
import FileControl from "../fileControl/FileControl";

const ScriptBlock = ({ vxCheck }) => {
  const [scriptValue, setScriptValue] = useState("new");
  return (
    <div className="scriptBlock">
      <div className="leftScript">
        <select
          name=""
          id="scriptSelect"
          value={scriptValue}
          onChange={(e) => setScriptValue(e.target.value)}
        >
          <option value="new">New</option>
          <option value="old">Old</option>
        </select>
        <FileControl />
      </div>
      <div className="rightScript">
        <input type="checkbox" id="scriptCheckbox" />
        <textarea className="jsonScript" name=""></textarea>
        <textarea
          className={vxCheck !== null ? "isVxChecked vxCode" : "vxCode"}
          name=""
        ></textarea>
        <img
          style={{ position: "absolute", bottom: "20px", right: "20px" }}
          src="./assets/icon/outline_logout_black_24dp.png"
          className="imgIcon"
          alt=""
        />
      </div>
    </div>
  );
};

export default ScriptBlock;
