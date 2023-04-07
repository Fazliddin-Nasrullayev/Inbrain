import React, { useContext, useTransition } from "react";
import { Link } from "react-router-dom";
import Video from "../videoPlayer/Video";
import context__img from "../../../../../assets/images/lesson__html__context__img.png";
import knopka__img from "../../../../../assets/images/knopka.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Lesson_1.scss";
import LessonModal from "./LessonModal";
import Context from "../../../../../components/Context/Context";
import { useTranslation } from "react-i18next";
// import Header from "../../../../../components/Header/Header";
const Lesson_1 = (props) => {
  const { t } = useTranslation();

  const { modal } = useContext(Context);

  return (
    <div className="lesson_1">
      {modal ? <LessonModal /> : null}
      <div className="lesson_1__container">
        <div className="lesson_1__content">
          <div className="lesson__html">
            <div className="lesson__html-container">
              <div className="lesson__html-inner">
                <div className="lesson__title__video">
                  <div className="lesson__title">
                    <h2 className="title__black">{t("LessonFirst.1")}</h2>
                    <h2 className="title__blue">{t("LessonFirst.2")}</h2>
                  </div>
                  <div className="lesson__video">
                    <Video />
                  </div>
                </div>
                <div className="lesson__context">
                  <div className="first__text">
                    <p>{t("LessonFirst.3")}</p>
                  </div>
                  <div className="first__img">
                    <img src={context__img} alt="Context img" />
                  </div>
                  <div className="second__text">
                    <p>
                      {t("LessonFirst.4")} <br /> {t("LessonFirst.5")}
                    </p>
                  </div>
                  <div className="second__img">
                    <button className="podpis">{t("LessonFirst.6")}</button>
                  </div>
                  <div className="third__text">
                    <p>{t("LessonFirst.7")}</p>
                  </div>
                  <div className="fourth__text">
                    <div className="top">
                      <span className="copy">{t("LessonFirst.8")} </span>
                      <span className="copy_html">HTML</span>
                    </div>
                    <div className="bottom">
                      {" "}
                      <p>
                        <span style={{ color: "red" }}>&lt;button&gt;</span>
                        {t("LessonFirst.9")}
                        <span style={{ color: "red" }}>
                          &lt;/button&gt;
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="fifth__text">
                    <p>{t("LessonFirst.10")}</p>
                  </div>
                  <div className="third__img">
                    <img src={knopka__img} alt="Knopka" />
                  </div>
                  <div className="sixth__text">
                    <p>
                      {t("LessonFirst.11")} &lt;
                      <span>button</span>
                      &gt; {t("LessonFirst.12")}
                      &lt;/ <span>button</span> &gt; {t("LessonFirst.13")}
                      {t("LessonFirst.14")}&lt; <span>button</span> &gt; и &lt;/
                      <span>button</span>&gt;{t("LessonFirst.15")}
                    </p>
                  </div>
                  <div className="seven__text">
                    <p>{t("LessonFirst.16")}</p>
                  </div>

                  <div className="lesson__slider">
                    <Link className="prev" to="/Webdev/lesson_1">
                      <FaArrowLeft />
                      <p>{t("LessonFirst.17")}</p>
                    </Link>

                    <Link className="next" to="/Webdev/Task_1">
                      <p> {t("LessonFirst.18")}</p>
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson_1;
