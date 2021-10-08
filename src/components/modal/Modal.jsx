import React from "react";
import "./modal.css";

const Modal = ({ deleteNumber, deleteEl }) => {
  return (
    <div className={deleteNumber !== null ? "modal isModal" : "modal"}>
      <div className="model_body">
        <h1 className="modal_title">
          Bạn có chắc muốn xóa track hay block này ?
        </h1>
        <div className="modalBottom">
          <button
            style={{ backgroundColor: "#d9534f" }}
            onClick={() => deleteEl("delete", deleteNumber)}
          >
            Xóa
          </button>
          <button
            style={{ backgroundColor: "#286090" }}
            onClick={() => deleteEl("cancel", deleteNumber)}
          >
            Hủy
          </button>
          <span
            className="modal-close"
            onClick={() => deleteEl("cancel", deleteNumber)}
          >
            x
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
