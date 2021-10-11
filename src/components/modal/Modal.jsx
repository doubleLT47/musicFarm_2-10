import React from "react";
import "./modal.css";

const Modal = ({ deleteNumber, deleteEl }) => {
  var i = null,
    bi = null;
  if (typeof(deleteNumber) === "number") {
    i = deleteNumber;
    bi = null;
  } else if (typeof(deleteNumber) === "string") {
    i = Number(deleteNumber.split("&")[0]);
    bi = Number(deleteNumber.split("&")[1]);
  }
  return (
    <div className={deleteNumber !== null ? "modal isModal" : "modal"}>
      <div className="model_body">
        <h1 className="modal_title">
          Bạn có chắc muốn xóa track hay block này ?
        </h1>
        <div className="modalBottom">
          <button
            style={{ backgroundColor: "#d9534f" }}
            onClick={() => deleteEl("delete", i, bi)}
          >
            Xóa
          </button>
          <button
            style={{ backgroundColor: "#286090" }}
            onClick={() => deleteEl("cancel", i, bi)}
          >
            Hủy
          </button>
          <span
            className="modal-close"
            onClick={() => deleteEl("cancel", i, bi)}
          >
            x
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
