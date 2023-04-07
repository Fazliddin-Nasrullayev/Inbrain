import React, { useState } from "react";
import videolessonimg from "../../../../assets/images/videolessonimg.png";
import taskimg from "../../../../assets/images/taskimg.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import thanksimg from "../../../../assets/images/thanksimg.png";
import "./salutation.scss";
import Header from "../../../../components/Header/Header";
import Footer from "../../../../components/Footer/Footer";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";

const Salutation = () => {
  const [isShown, setIsShown] = useState(true);
  const [user, setUser] = useState(true);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const { t } = useTranslation();
  const saluttitle = (
    <p>
      {t("Salutation.1")}{" "}
      <span style={{ color: "#ffcc00" }}> {t("Sidebar.7")}</span> /{" "}
      {t("Salutation.2")} /<span style={{ color: "#1c84ff" }}> 1</span>{" "}
      {t("Salutation.3")} 14
    </p>
  );

  return (
    <>
      <div className="salutationpage">
        <div className="salutationcontainer">
          <Header title={saluttitle} user={user} />
          <div className="mainpart">
            <div className="weareinbrain">{t("Salutation.4")} : )</div>
            <p className="aboutlessons">
              {t("Salutation.5")}
              <br />
              {t("Salutation.6")}
            </p>
            <div className="video__lesson__img">
              <ReactPlayer
                style={{ marginLeft: "40px" }}
                width="95%"
                height="710px"
                // onDisablePIP={false}
                // onProgress
                controls
                url="https://www.youtube.com/watch?v=kkThgsC1tnk&list=PL0lO_mIqDDFXUJfMPcm1ezfcYSOHNNCZ4"
              />
            </div>
            <div className="sprint">
              {t("Salutation.7")}
              <br />
              {t("Salutation.8")}
              <br />
              {t("Salutation.9")}
              <br />
              <br />
              {t("Salutation.10")}
              <br />
              {t("Salutation.11")}
              <br />
              {t("Salutation.12")}
            </div>

            <div className="testpart">
              <div style={{ display: isShown ? "block" : "none" }}>
                <div className="block">
                  <div className="test">
                    <div className="testhead">{t("Salutation.13")} </div>

                    <div className="variants">
                      <input name="radio" className="custom" type={"radio"} />
                      <label>{t("Salutation.14")} №1</label>
                    </div>
                    <div className="variants">
                      <input className="custom2" name="radio" type={"radio"} />
                      <label>{t("Salutation.14")} №2</label>
                    </div>
                    <div className="variants">
                      <input className="custom3" name="radio" type={"radio"} />
                      <label>{t("Salutation.14")} №3</label>
                    </div>
                    <div className="variants">
                      <input className="custom4" name="radio" type={"radio"} />
                      <label>
                        {t("Salutation.14")} {t("Salutation.15")}
                      </label>
                    </div>
                  </div>
                  <div className="task__img__block">
                    <img className="taskimg" src={taskimg} alt="images" />
                  </div>
                </div>
              </div>
              <div style={{ display: isShown ? "none" : "block" }}>
                <div className="thanks">{t("Salutation.16")}!!!</div>
                <div>
                  <img src={thanksimg} alt="images" />
                </div>
              </div>
              <div className="btns">
                <div>
                  <button className="returntolist">
                    {" "}
                    <AiOutlineLeft /> {t("Salutation.17")}
                  </button>
                </div>
                <div>
                  <button onClick={handleClick} className="forward">
                    {t("Salutation.18")} <AiOutlineRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Salutation;
