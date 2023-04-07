import React, { useState } from "react";
import foundation from "../../../../assets/images/foundation.png";
import "./familiarization.scss";
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";

const Videos = [
  {
    url: "https://www.youtube.com/watch?v=_e61WuTXc4E&list=PLpRkv-CMsu3X4nVukPFCaZUxqioeuGBZh",
    title: " Введение в HTML",
  },
  {
    url: "https://www.youtube.com/watch?v=YzYkebeN7mg&list=PLDyJYA6aTY1nlkG0gBj96XDmDSC4Fy1TO&index=2",
    title: "Файл <index.html>",
  },
  {
    url: "https://www.youtube.com/watch?v=3V4qHup5BB8&list=PLDyJYA6aTY1nlkG0gBj96XDmDSC4Fy1TO&index=3",
    title: "Как создаются сайты",
  },

  {
    url: "https://www.youtube.com/watch?v=6RoXrWu2EuM&list=PLDyJYA6aTY1nlkG0gBj96XDmDSC4Fy1TO&index=4",
    title: "Lorem lorem lorem",
  },
  {
    url: "https://www.youtube.com/watch?v=ow3LCjZTbsY&list=PLDyJYA6aTY1nlkG0gBj96XDmDSC4Fy1TO&index=5",
    title: "Lorem lorem lorem",
  },
];

const Familiarization = () => {
  const [user, setUser] = useState(true);
  const { t } = useTranslation();
  const titlehead = (
    <p>
      {t("Salutation.1")}{" "}
      <span style={{ color: "#ffcc00" }}> {t("Sidebar.7")}</span> /{" "}
      {t("Salutation.2")} /<span style={{ color: "#1c84ff" }}> 1</span>{" "}
      {t("Salutation.3")} 14
    </p>
  );

  return (
    <div className="familiarpage">
      <div className="familiarcontainer">
        <div>
          <Header title={titlehead} user={user} />
        </div>
        <div className="aboutlesson">
          <div className="introduction">
            {t("Familiarization.3")}
            <br /> {t("Familiarization.4")} : )
          </div>
          <div className="aboutfoundation">
            {t("Familiarization.5")} <span className="course">HTML CSS JS</span>
            .{t("Familiarization.6")} <br /> {t("Familiarization.7")}
          </div>
          <div className="comforts">
            {t("Familiarization.8")} <br /> {t("Familiarization.9")}
          </div>
        </div>
        <div className="videopart">
          <div className="watchvideo">{t("Familiarization.10")}</div>
          <div
            data-aos="fade-right"
            style={{
              height: "800px",
              width: "100%",
              display: "flex",
              marginTop: "50px",
            }}>
            <div className="videoRegistrOne" style={{ width: "50%" }}>
              <ReactPlayer
                style={{
                  height: "100%",
                  borderRadius: "140px",
                }}
                height="420px"
                // controls
                url="https://www.youtube.com/watch?v=_R5a-Kc0pRc&list=PLDyJYA6aTY1nlkG0gBj96XDmDSC4Fy1TO"
              />
            </div>
            <div
              className="scrol "
              data-aos="fade-up"
              style={{
                width: "30%",
                height: "450px",
                display: "grid",
                gap: "60px",
                overflow: "hidden",
                overflowY: "scroll",
              }}>
              {Videos.map((item, index) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    // overflow: "hidden",
                  }}>
                  <div>
                    <ReactPlayer
                      onDisablePIP={false}
                      width="80%"
                      height="100px"
                      borderRadius="5px"
                      controls
                      url={item.url}
                    />
                  </div>
                  <div style={{ width: "30%" }}>
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="webdev_f">
          <div className="foundation">
            <div className="webdevcourse">
              <img src={foundation} alt="BigImg5" />
            </div>
          </div>
          <div className="aboutcourse">
            <p className="kurs">{t("Familiarization.14")}</p>
            <p className="topro">{t("Familiarization.15")}</p>
            <p className="learnjs">
              {t("Familiarization.16")} <br />
              {t("Familiarization.17")} <br /> {t("Familiarization.18")}
            </p>
            <div className="startcourse">
              <Link to={"/Salutation"} className="start_btn">
                {t("Familiarization.19")}
              </Link>
              <p className="durationcourse">10 {t("Familiarization.20")}</p>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Familiarization;
