import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import close_icon from "../../../../../assets/images/close_icon.png";
import "./Modal.scss";

export default function Modal({ modal, titles, toggleModal }) {
  // const [modal, setModal] = useState(false);
  const { t } = useTranslation();
  const item = "<!--...--!>";
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay">
            oo
          </div>
          <div className="modal-content">
            <h1>
              {t("modal.2")} <span>{item}</span>
            </h1>
            <br />
            <br />
            <p>{t("modal.1")}</p>
            <img
              onClick={toggleModal}
              className="close-modal"
              src={close_icon}
            />
          </div>
        </div>
      )}
    </>
  );
}
