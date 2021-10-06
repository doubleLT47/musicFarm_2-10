import React from "react";
import "./controlTrack.css";

const ControlTrack = ({ name }) => {
  return (
    <div className="controlTrack">
      <label className="cbContainerOrange">
        <input type="checkbox" className="inputCheckbox" />
        <span className="checkMarkOrange"></span>
      </label>
      <label className="cbContainerPurple">
        <input type="checkbox" className="inputCheckbox" />
        <span className="checkMarkPurple"></span>
      </label>

      <div className="trackName" contenteditable="true">
        {name}
      </div>
    </div>
  );
};

export default ControlTrack;
