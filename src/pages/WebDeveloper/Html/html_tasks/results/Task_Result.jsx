import React, { useState } from "react";
import { HiArrowDownTray } from "react-icons/hi2";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdRefresh } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Task_Result.scss";
import question from "../../../../../assets/images/question.png";
import ref from "../../../../../assets/images/ref.png";
import thanksimg from "../../../../../assets/images/thanksimg.png";
import Footer from "../../../../../components/Footer/Footer";
import Header from "../../../../../components/Header/Header";
import { useTranslation } from "react-i18next";

const Task_Result = () => {
  const { t } = useTranslation();
  const title = (
    <>
      {t("TaskFirst.1")}
      <span style={{ color: "#1c84ff" }}>1</span> {t("TaskFirst.2")} 14
    </>
  );
  return (
    <div className="task__result">
      <div className="result__container">
        <Header title={title} />
        <div className="result__inner">
          <div className="result__card">
            <div className="result__header">
              <div className="header__left">
                <div className="title">
                  <p className="top__title">
                    {t("TaskFirst.3")}
                    <span className="element"> {t("TaskFirst.4")}</span>
                  </p>
                  <p className="bottom__title">
                    {t("TaskFirst.5")} <span className="counter">1 </span>/ 11
                  </p>
                </div>
              </div>
              <div className="header__right">
                <Link>
                  <button>
                    {t("TaskFirst.6")}
                    <img src={question} alt="Question mark" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="result__content">
              <div className="content__header">
                <div className="header__left">
                  <p>index.html</p>
                </div>
                <div className="header__right">
                  <div className="ref">
                    <MdRefresh />
                    {/* <img src={ref} alt="Refresh" /> */}
                  </div>
                  <div className="screen__size">
                    <p>
                      {t("TaskFirst.7")} <span>646х476</span>
                    </p>
                  </div>
                  <div className="participants">
                    <div className="circles">
                      <div className="circle1"></div>
                      <div className="circle2"></div>
                      <div className="circle3"></div>
                    </div>
                    <div className="number">
                      <p>+214</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content__body">
                <div className="body__left">
                  <div className="code__field">
                    <div className="code__container">
                      <div className="code">
                        <p>
                          &lt;
                          <span>button</span>&gt;Hello world &lt;/{" "}
                          <span>button</span>&gt;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="body__left-bottom">
                    <div className="bottom__container">
                      <div className="bottom__title">
                        <p> {t("TaskFirst.10")}</p>
                      </div>
                      <div className="bottom__subtitle">
                        <p>
                          {t("TaskFirst.20")} <br /> {t("TaskFirst.21")} <br />{" "}
                          &lt;button&gt; {t("TaskFirst.12")} &lt;/button&gt;{" "}
                          {t("TaskFirst.22")}
                        </p>
                      </div>
                      <div className="bold__title">
                        <p>{t("TaskFirst.14")} </p>
                      </div>
                      <div className="bold__subtitle">
                        <p>
                          {t("TaskFirst.15")} &lt;button&gt; {t("TaskFirst.12")}{" "}
                          &lt;/button&gt;.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*--//------//--------//-------//----//BODY-RIGHT//--------//------//------//---  */}
                <div className="body__right">
                  <div className="result__field">
                    <div className="result__container">
                      <div className="result">
                        <button>Hello world</button>
                      </div>
                      <div className="result__check">
                        <h1>
                          {t("TaskFirst.23")} <br />
                          {t("TaskFirst.24")}
                        </h1>
                        <img src={thanksimg} width="250px" alt="error" />
                        <div className="btn__wrapper">
                          <button className="btn__primary">
                            {t("TaskFirst.25")} <HiArrowDownTray size={24} />
                          </button>
                          <button className="btn__primary">
                            {t("TaskFirst.26")}
                            <MdOutlineNavigateNext size={26} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="body__right-bottom">
                    <div className="right__bottom-container">
                      <div className="bottom__ref">
                        <MdRefresh style={{ transform: "rotate(-90deg)" }} />
                        {/* <img src={ref} alt="Bottom ref " /> */}
                        <p> {t("TaskFirst.18")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Task_Result;
