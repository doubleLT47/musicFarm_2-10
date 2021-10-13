import React from "react";
import "./controlTrack.css";

const ControlTrack = ({ data, bi, index, setDeleteRowNumber, renameTrack }) => {
  const handleKeyUp = (e) => {
    if (e.which === 13) {
      e.preventDefault();
    }
  };

  const handleBlur = () => {
    const el = document.getElementById(`trackName${index}&${bi}`).innerHTML;

    renameTrack(el, bi, index);
  };

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
      <div
        className="deleteTrackIcon"
        onClick={() => setDeleteRowNumber(`${index}&${bi}`)}
      ></div>
      <div
        className="trackName"
        contentEditable="true"
        onKeyPress={(e) => handleKeyUp(e)}
        id={`trackName${index}&${bi}`}
        onBlur={handleBlur}
        suppressContentEditableWarning={true}
      >
        {data.trackName}
      </div>
    </div>
  );
};

export default ControlTrack;
