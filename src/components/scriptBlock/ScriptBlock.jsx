import { useState } from "react";
import "./script.css";
import FileControl from "../fileControl/FileControl";

const ScriptBlock = ({ vxCheck }) => {
  const [scriptValue, setScriptValue] = useState("new");
  console.log(vxCheck);
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
        <FileControl hasSetting="true" />
      </div>
      <div className="rightScript">
        <input type="checkbox" id="scriptCheckbox" />
        <textarea
          className={vxCheck !== null ? "isVxChecked jsonScript" : "jsonScript"}
          name=""
        ></textarea>
        <textarea
          className={vxCheck !== null ? "isVxChecked vxCode" : "vxCode"}
          name=""
        ></textarea>
      </div>
    </div>
  );
};

export default ScriptBlock;
