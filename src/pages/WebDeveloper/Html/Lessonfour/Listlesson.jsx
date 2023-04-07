import React, { useState } from "react";
import numberlesson from "../../../../assets/images/numberlesson.png";
import Hi from "../../../../assets/images/Hi.png";
import Howtraining from "../../../../assets/images/Howtraining.png";
import { AiOutlineRight } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import "./Listlesson.scss";
import { useTranslation } from "react-i18next";

const Lessonfour = () => {
  const { t } = useTranslation();
  const listtitle = t("Lessonfour.1");

  const [numberS, setNumberS] = useState(0);
  console.log("asdasdsadsa");
  const ClickedFunction = (int) => {
    setNumberS(int);
    console.log("object +", int);

    for (let i = 1; i <= 9; i++) {
      const line = document
        .getElementById(`l_${i}`)
        .classList.remove("listpage_list_item_line_1");
      const circcle = document
        .getElementById(`c_${i}`)
        .classList.remove("listpage_list_item_circle_1");

      console.log(line, circcle);
    }

    for (let i = 1; i <= int; i++) {
      const line = document
        .getElementById(`l_${i}`)
        .classList.add("listpage_list_item_line_1");
      const circcle = document
        .getElementById(`c_${i}`)
        .classList.add("listpage_list_item_circle_1");

      console.log(line, circcle);
    }
  };

  return (
    <div className="lessonfourpage">
      <div className="lessonfourcontainer">
        <Header title={listtitle} />
        <div className="list_main">
          <div className="circlepart">
            <div className="thislesson">
              {t("Lessonfour.2")}{" "}
              <span className="abouthtml">{t("Lessonfour.3")}</span>
            </div>
            <div className="circle">
              {/*  <Circlepart /> */}
              <ul className="listpage_list">
                <li className="listpage_list_item">
                  <span className="listpage_list_item_line" id="l_1"></span>{" "}
                  <span
                    className={`listpage_list_item_circle ${
                      numberS === 1 ? "dp" : 1 < numberS ? "null" : null
                    }  `}
                    onClick={() => ClickedFunction(1)}
                    id="c_1"></span>
                </li>
                <li className="listpage_list_item">
                  <span className="listpage_list_item_line" id="l_2"></span>{" "}
                  <span
                    className={`listpage_list_item_circle ${
                      numberS === 2 ? "dp" : 2 < numberS ? "null" : null
                    }  `}
                    onClick={() => ClickedFunction(2)}
                    id="c_2"></span>
                </li>
                <li className="listpage_list_item">
                  <span className="listpage_list_item_line" id="l_3"></span>{" "}
                  <span
                    className={`listpage_list_item_circle ${
                      numberS === 3 ? "dp" : 3 < numberS ? "null" : null
                    }  `}
                    onClick={() => ClickedFunction(3)}
                    id="c_3"></span>
                </li>
                <li className="listpage_list_item">
                  <span className="listpage_list_item_line" id="l_4"></span>{" "}
                  <span
                    className={`listpage_list_item_circle ${
                      numberS === 4 ? "dp" : 4 < numberS ? "null" : null
                    }  `}
                    onClick={() => ClickedFunction(4)}
                    id="c_4"></span>
                </li>
                <li className="listpage_list_item">
                  <span className="listpage_list_item_line" id="l_5"></span>{" "}
                  <span
                    className={`listpage_list_item_circle ${
                      numberS === 5 ? "dp" : 5 < numberS ? "null" : null
                    }  `}
                    onClick={() => ClickedFunction(5)}
                    id="c_5"></span>
                </li>
                <li className="listpage_list_item">
                  <span className="listpage_list_item_line" id="l_6"></span>{" "}
                  <span
                    className={`listpage_list_item_circle ${
                      numberS === 6 ? "dp" : 6 < numberS ? "null" : null
                    }  `}
                    onClick={() => ClickedFunction(6)}
                    id="c_6"></span>
                </li>
                <li className="listpage_list_item">
                  <span className="listpage_list_item_line" id="l_7"></span>{" "}
                  <span
                    className={`listpage_list_item_circle ${
                      numberS === 7 ? "dp" : 7 < numberS ? "null" : null
                    }  `}
                    onClick={() => ClickedFunction(7)}
                    id="c_7"></span>
                </li>
                <li className="listpage_list_item">
                  <span className="listpage_list_item_line" id="l_8"></span>{" "}
                  <span
                    className={`listpage_list_item_circle ${
                      numberS === 8 ? "dp" : 8 < numberS ? "null" : null
                    }  `}
                    onClick={() => ClickedFunction(8)}
                    id="c_8"></span>
                </li>
                <li className="listpage_list_item">
                  <span className="listpage_list_item_line" id="l_9"></span>{" "}
                  <span
                    className={`listpage_list_item_circle ${
                      numberS === 9 ? "dp" : 9 < numberS ? "null" : null
                    }  `}
                    onClick={() => ClickedFunction(9)}
                    id="c_9"></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="training">
            <div style={{width: '50%'}}>
              <div className="trainhead">{t("Lessonfour.4")}</div>
              <div className="description">
                {t("Lessonfour.5")} <br /> {t("Lessonfour.6")} <br />{" "}
                {t("Lessonfour.7")} <br />
                {t("Lessonfour.8")} <br /> {t("Lessonfour.9")} <br />
                {t("Lessonfour.10")}
              </div>
              <div
                style={{ display: "flex", gap: "80px", alignItems: "center" }}>
                <button className="tohome">
                  {t("Lessonfour.11")} <FaUser />
                </button>
                <button className="continuelearnbtn">
                  {t("Lessonfour.12")} <AiOutlineRight />
                </button>
              </div>
            </div>
            <div style={{width: '50%'}}>
              <img alt="images" className="numberlesson" src={numberlesson} />
            </div>
          </div>

          <div className="yourcourses">
            <div className="your_courses">{t("Lessonfour.13")}</div>
            <div className="courscard">
              <div className="yourcoursescard">
                <img alt="images" className="itemimg" src={Hi} />
                <p className="itemtitle">{t("Lessonfour.14")}</p>
              </div>
              <div className="yourcoursescard">
                <img alt="images" className="itemimg" src={Hi} />
                <p className="itemtitle">{t("Lessonfour.15")}</p>
              </div>
              <div className="yourcoursescard">
                <img alt="images" className="itemimg" src={Hi} />
                <p className="itemtitle">{t("Lessonfour.16")}</p>
              </div>
              <div className="yourcoursescard">
                <img alt="images" className="itemimg" src={Howtraining} />
                <p className="itemtitle">{t("Lessonfour.17")}</p>
              </div>
              <div className="yourcoursescard">
                <img alt="images" className="itemimg" src={Howtraining} />
                <p className="itemtitle">{t("Lessonfour.18")}</p>
              </div>
              <div className="yourcoursescard">
                <img alt="images" className="itemimg" src={Howtraining} />
                <p className="itemtitle">
                  {t("Lessonfour.19")} <br /> {t("Lessonfour.20")}
                </p>
              </div>
              <div className="yourcoursescard">
                <img alt="images" className="itemimg" src={Hi} />
                <p className="itemtitle">
                  {t("Lessonfour.21")} <br /> {t("Lessonfour.22")}
                </p>
              </div>
              <div className="yourcoursescard">
                <img alt="images" className="itemimg" src={Hi} />
                <p className="itemtitle">
                  {t("Lessonfour.23")} <br /> {t("Lessonfour.24")}
                </p>
              </div>
              <div className="yourcoursescard">
                <img alt="images" className="itemimg" src={Hi} />
                <p className="itemtitle">
                  {t("Lessonfour.25")} <br />
                  {t("Lessonfour.26")} <br />
                  {t("Lessonfour.27")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footlist">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Lessonfour;
