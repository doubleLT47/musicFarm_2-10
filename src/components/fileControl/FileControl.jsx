import React from "react";
import "./file.css";

const FileControl = ({ bc, setNewPattern }) => {
  return (
    <div className={bc ? "fileControl bgFileControl" : "fileControl"}>
      <div className="fileItem">
        <img
          className="imgIcon"
          src="./assets/icon/outline_description_black_24dp.png"
          alt=""
          onClick={() => setNewPattern(true)}
        />
      </div>
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
        <img
          className="imgIcon"
          src="./assets/icon/outline_setting_black_24dp.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default FileControl;
