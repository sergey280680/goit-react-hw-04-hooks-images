import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalDiv } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export function Modal({ selectedImage, closeModal }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflowY = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflowY = "auto";
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
  };

  const handleBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackDropClick}>
      <ModalDiv>
        <img src={selectedImage} alt="" />
      </ModalDiv>
    </Overlay>,
    modalRoot
  );
}
