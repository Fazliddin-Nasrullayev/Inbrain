import React, { useState } from "react";
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import Modal from "../tags/modal/Modal";
import left_str from "../../../../assets/images/left_str.png";
import right from "../../../../assets/images/right.png";
import search_icon from "../../../../assets/images/search_icon.png";
import "./Tags.scss";
import { useTranslation } from "react-i18next";
const Tags = () => {
  const { t } = useTranslation();
  const title = t("tags.0");
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const titles = [
    { title: "Tag Description", body: "m" },
    { title: "<!--...-->", body: "Defines a comment" },
    { title: "<!DOCTYPE>", body: "Defines the Document Type" },
    { title: "<a>", body: "Defines a pyperlink" },
    { title: "<abbr>", body: "Defines an abbreviation or an acronym" },
    { title: "acronym", body: "Not supported in HTML 5. Use <abbr> instead" },
    { title: "<article>", body: "Defines an article" },

    { title: "<!--...-->", body: "Defines a comment" },
    { title: "<!DOCTYPE>", body: "Defines the Document Type" },
    { title: "<a>", body: "Defines a pyperlink" },
    { title: "<abbr>", body: "Defines an abbreviation or an acronym" },
    { title: "acronym", body: "Not supported in HTML 5. Use <abbr> instead" },
    { title: "<article>", body: "Defines an article" },

    { title: "<!--...-->", body: "Defines a comment" },
    { title: "<!DOCTYPE>", body: "Defines the Document Type" },
    { title: "<a>", body: "Defines a pyperlink" },
    { title: "<abbr>", body: "Defines an abbreviation or an acronym" },
    { title: "acronym", body: "Not supported in HTML 5. Use <abbr> instead" },
    { title: "<article>", body: "Defines an article" },

    { title: "<!--...-->", body: "Defines a comment" },
    { title: "<!DOCTYPE>", body: "Defines the Document Type" },
    { title: "<a>", body: "Defines a pyperlink" },
    { title: "<abbr>", body: "Defines an abbreviation or an acronym" },
  ];
  return (
    <div>
      <div className="main_tags">
        <Header title={title} />
        <div className="guide">
          <h1>{t("tags.1")}</h1>
          <div className="btns">
            <button>
              <img src={left_str} alt="LeftImg" /> {t("tags.2")}
            </button>
            <button>
              {t("tags.3")} <img src={right} alt="RightImg" />
            </button>
          </div>
        </div>
        <h1 style={{ margin: "30px 10px" }}>{t("tags.4")}</h1>
        <div className="search_main">
          <input type="search" className="search" />
          <div className="icon_menu">
            <img src={search_icon} className="search_icon" alt="Search" />
          </div>
        </div>
        <div className="desc">
          <h3>Description</h3>
          <div className="table_main">
            <div className="table_left">
              <ul style={{ listStyle: "none" }}>
                {titles.map((items, i) => {
                  return (
                    <li onClick={toggleModal} key={i}>
                      {items.title}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="table_right">
              <ul className="table2" style={{ listStyleType: "none" }}>
                {titles.map((items, i) => (
                  <li key={i}>{items.body}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="guide" style={{ marginTop: "40px" }}>
          <h1>{t("tags.1")}</h1>
          <div className="btns">
            <button>
              <img src={left_str} alt="LeftImg" /> {t("tags.2")}
            </button>
            <button>
              {t("tags.3")} <img src={right} alt="LeftImg" />
            </button>
          </div>
        </div>
        <Modal
          modal={modal}
          setModal={setModal}
          toggleModal={toggleModal}
          titles={titles}
        />
        <Footer />
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default Tags;
