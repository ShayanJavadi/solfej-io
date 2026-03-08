
import React from "react";
import ModalLib from "react-responsive-modal";

import "./Modal.scss";

export default function Modal(props) {
  return (
    <ModalLib 
      center
      classNames={{
        overlay: "modal-overlay",
        modal: "modal-container"
      }}
      {...props}
    />
  );
}
