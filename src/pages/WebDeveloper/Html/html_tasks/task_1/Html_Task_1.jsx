import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Html_Task_1.scss";
import question from "../../../../../assets/images/question.png";
import ref from "../../../../../assets/images/ref.png";
import { MdRefresh } from "react-icons/md";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Html_Task_1 = () => {
  const { t } = useTranslation();
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(true);
  const handleClick1 = () => {
    setActive1((current) => !current);
  };
  const handleClick2 = () => {
    setActive2((current) => !current);
  };
  return (
    <div className="html__tasks">
      <div className="tasks__container">
        <div className="tasks__inner">
          <div className="task1__card">
            <div className="task1__header">
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
            <div className="task1__content">
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
                      <div className={active1 ? "modal__info" : " hideModal"}>
                        <div className="info">
                          <div className="info__container">
                            <div className="close" onClick={handleClick1}>
                              <span className="closeIcon">
                                {" "}
                                <FaTimes />
                              </span>
                            </div>
                            <div className="title">
                              <p> {t("TaskFirst.8")}</p>
                            </div>
                            <div className="subtitle">
                              <p> {t("TaskFirst.9")}</p>
                            </div>
                          </div>
                        </div>
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
                          {t("TaskFirst.11")} &lt;button&gt; {t("TaskFirst.12")}
                          &lt;/button&gt; {t("TaskFirst.13")}
                        </p>
                      </div>
                      <div className="bold__title">
                        <p> {t("TaskFirst.14")}</p>
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
                <div className="body__right">
                  <div className="result__field">
                    <div className="result__container">
                      <div className="result">
                        <button>Hello world</button>
                      </div>
                      <div className={active2 ? "result__info" : " hideModal"}>
                        <div className="info2">
                          <div className="info2__container">
                            <div className="close" onClick={handleClick2}>
                              <span className="closeIcon">
                                {" "}
                                <FaTimes />
                              </span>
                            </div>
                            <div className="title">
                              <p>{t("TaskFirst.16")}</p>
                            </div>
                            <div className="subtitle">
                              <p>{t("TaskFirst.17")}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="body__right-bottom">
                    <div className="right__bottom-container">
                      <div className="bottom__ref">
                        <MdRefresh style={{ transform: "rotate(-90deg)" }} />
                        {/* <img src={ref} alt="Bottom ref " /> */}
                      </div>
                      <div className="start__again">
                        <p>{t("TaskFirst.18")}</p>
                      </div>
                      <div className="check__task">
                        <Link className="check" to="/Result">
                          {t("TaskFirst.19")} <FaArrowRight />
                        </Link>
                      </div>
                    </div>
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

export default Html_Task_1;
