import React, { useContext, useState } from "react";
import "./LessonModal.scss";

import Lego from "../../../../../assets/images/modal/lego.png";
import { ReactComponent as Cart } from "../../../../../assets/images/modal/cart.svg";
import Video from "./Video";
import Context from "../../../../../components/Context/Context";
import { useTranslation } from "react-i18next";

const LessonModal = () => {
  const { ModalFunc, modal } = useContext(Context);
  const {t} = useTranslation()
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard
      .writeText("<button> Кнопка с надписью </button>")
      .then(() => {
        setIsCopied(true);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });

    console.log("<button> Кнопка с надписью </button>");

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <>
      {modal ? <div className="modal_background"></div> : null}
      <div className="lesson_modal">
        <h1 className="lesson_modal_title">
          {t("LessonFirst.1")}
          <span className="lesson_modal_title_span">{t("LessonFirst.2")}</span>
        </h1>
        <Video />
        <div className="lesson_modal_cart" onClick={() => ModalFunc(false)}>
          <Cart />
        </div>
        <p className="lesson_modal_info">{t("LessonFirst.3")}</p>
        <img src={Lego} alt="images" />
        <p className="lesson_modal_info">{t("LessonFirst.4")}</p>
        <div className="lesson_modal_button">
          <button className="lesson_modal_button_btn">{t('LessonFirst.6')}</button>
        </div>
        <h4 className="lesson_modal_text">
        {t('LessonFirst.7')}
        </h4>
        <div className="lesson_modal_wrapper">
          {isCopied && <p className="modal_copy">Text copied to clipboard!</p>}
          <div className="lesson_modal_wrapper_left">
            <pre>
              {" "}
              <span>&lt;button&gt;</span>{t('LessonFirst.9')}
              <span>&lt;/button&gt;</span>
            </pre>{" "}
          </div>
          <div className="lesson_modal_wrapper_right">
            {" "}
            <span onClick={handleCopy}>{t('LessonFirst.8')} </span> HTML{" "}
          </div>
        </div>

        <p className="lesson_modal_info1">
        {t('LessonFirst.10')}
        </p>
      </div>
    </>
  );
};

export default LessonModal;