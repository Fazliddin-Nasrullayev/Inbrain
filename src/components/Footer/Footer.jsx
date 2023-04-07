import React from "react";
import "./Footer.scss";
import logofooter from "../../assets/images/logofooter.png";
// import footlocation from "../../assets/images/footlocation.png";
// import footphone from "../../assets/images/footphone.png";
// import foottg from "../../assets/images/foottg.png";
// import foottube from "../../assets/images/foottube.png";
// import footinsta from "../../assets/images/footinsta.png";
import { useTranslation } from "react-i18next";
import { CiLocationOn, CiInstagram } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="footpart">
        <div className="footadress">
          <img src={logofooter} alt="Logo" />
          <div className="adresses">
            <div className="adress">
              {/* <img className="location" src={footlocation} alt="Location" /> */}
              <div className="location">
                {" "}
                <CiLocationOn />
              </div>
              <p className="adressoffice">
                39, {t("footer.1")}, <br /> {t("footer.2")}
              </p>
            </div>
            <div className="footcontact">
              {/* <img className="phone" src={footphone} alt="Phone" /> */}
              <div className="phone">
                <BsTelephone />
              </div>
              <p className="ournumber">
                +998 71 203 33 38 <br />
              </p>
            </div>
          </div>
        </div>
        <div className="social_menu">
          <div className="socialhead">{t("footer.3")}</div>

          <div className="socialmedia">
            <div className="telegramm">
              {/* <img className="foottg" src={foottg} alt="Foot" /> */}
              <div className="foottg">
                <TbBrandTelegram />
              </div>
              <p className="tg">Telegram</p>
            </div>
            <div className="instagramm">
              {/* <img className="footinsta" src={footinsta} alt="Insta" /> */}
              <div className="footinsta">
                <CiInstagram />
              </div>
              <p className="insta">Instagram</p>
            </div>
            <div className="youtube">
              {/* <img className="foottube" src={foottube} alt="youtube" /> */}
              <div className="foottube">
                <SlSocialYoutube />
              </div>
              <p className="tube">YouTube</p>
            </div>
          </div>
        </div>
        <div className="menu_items">
          <div className="itemhead">{t("footer.4")}</div>
          <div className="about_item">
            <p>{t("footer.5")}</p>
            <p>{t("footer.6")}</p>
            <p>{t("footer.7")}</p>
          </div>
        </div>
        <div className="additionally">
          <div className="addithead">{t("footer.8")}:</div>
          <div className="addit_menu">
            <p>{t("footer.9")}</p>
            <p>{t("footer.10")}</p>
            <p>{t("footer.11")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
