import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.png";
import i18next from "i18next";
import user from "../../assets/images/user.png";
import { ReactComponent as SeachIcon } from "../../assets/images/modal/seach.svg";

const Header = (props) => {
  const handleLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };
  const [isShown, setIsShown] = useState(true);
  const [isClick, setIsClick] = useState(true);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  const SeachBarFunc = () => {
    setIsClick(!isClick);
  };

  const title = props.title;
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>

      <div className="father">
        <p className={`${isClick ? "learn1" : "learn"}`}>{title}</p>

        <div className={`${isClick ? "search_wrap" : "search_wrap1"}`}>
          <input
            type="text"
            className={`${
              isClick ? "seach_input_block1" : "seach_input_block"
            }`}
            placeholder="Search..."
          />
        </div>
        <button
          className={`${
            isClick ? "search_button_icon" : "search_button_icon1"
          }`}
          onClick={() => SeachBarFunc()}>
          <SeachIcon className="seact_icon" />
        </button>
      </div>

      <div className="user__language">
        {props.user ? (
          <div className="participants">
            <div className="circles">
              <div className="circle1"></div>
              <div className="circle3">
                <img src={user} alt="User logo" />
              </div>
              <div className="circle2"></div>
            </div>
            <div className="number">
              <p>+214</p>
            </div>
          </div>
        ) : (
          <div className="languages">
            <button
              className="languagebtn"
              onClick={() => handleLanguage("ru")}>
              RU
            </button>
            <button
              className="languagebtn"
              onClick={() => handleLanguage("uz")}>
              UZ
            </button>
            <button
              className="languagebtn"
              onClick={() => handleLanguage("en")}>
              EN
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
