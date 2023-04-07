import React, { useState } from "react";
import user from "../../../assets/images/user.png";
import starIcon from "../../../assets/images/userstar.png";
import htmldemo from "../../../assets/images/htmldemo.png";
import cssdemo from "../../../assets/images/cssdemo.png";
import jsdemo from "../../../assets/images/jsdemo.png";
import userstar from "../../../assets/images/userstar.png";
import like from "../../../assets/images/like.png";
import "./user.scss";
import { BiChevronRight } from "react-icons/bi";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Box from "@mui/material/Box";
import { AiFillCloseCircle } from "react-icons/ai";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { width } from "@mui/system";
import { useTranslation } from "react-i18next";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1050,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const User = () => {
  const { t } = useTranslation();
  const headertitle = t("headerTitle.1");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="Userpage">
        <div className="Usercontainer">
          <Header title={headertitle} />
          <div className="User">
            <div className="cardhead">{t("User.1")}</div>

            <div className="Cardstudent">
              <div className="aboutuser">
                <div className="infouser">
                  <img className="star" src={starIcon} alt="#" />
                  <div className="userimg">
                    <img className="user" src={user} />
                  </div>
                  <div className="name">
                    <p className="name_user">Арифжанов Ойбек</p>
                    <p className="age_user">
                      Возраст:<span>18 лет</span>
                    </p>
                    <p className="passedcourse">
                      Прошел обучение: <span>Знакомство</span>{" "}
                    </p>
                    <p className="nextcourse">
                      Следующий курс: <span>HTML 5 -</span>
                    </p>
                  </div>
                </div>
                <div>
                  <BiChevronRight className="iconright" />
                </div>
                <div
                  style={{ display: "grid", gap: "30px", marginTop: "40px" }}
                >
                  <div className="likerectangle">
                    <div className="likediv">
                      <img className="like" src={like} />
                      <p className="passednumber">19 {t("User.8")} 19</p>
                    </div>
                  </div>

                  <p className="passedkurs">{t("User.9")}</p>
                </div>
              </div>

              <div className="mycourse">
                {t("User.10")}:
                <span style={{ color: "#FFCC00" }}>{t("User.11")}</span>{" "}
              </div>

              <div className="htmlstart">
                <div className="html">
                  <div className="htmlrectangle">
                    <img
                      style={{
                        width: "97px",
                        height: "95px",
                        marginTop: "20px",
                      }}
                      src={htmldemo}
                    />
                    <p style={{ color: "#fff", textAlign: "center" }}>
                      0 {t("User.8")} 19
                    </p>
                  </div>
                </div>
                <div className="desccourse">
                  <p className="_html">HTML 5</p>
                  <p className="incourse">
                    {t("User.12")} <br /> {t("User.13")} <br />
                    {t("User.14")}
                  </p>
                </div>
                <div className="start_btns">
                  <button className="startlearn">
                    {t("User.15")}
                    <BiChevronRight style={{ fontSize: "2rem" }} />
                  </button>
                  <button onClick={handleOpen} className="linktodoc">
                    {t("User.16")} HTML
                    <BiChevronRight style={{ fontSize: "2rem" }} />
                  </button>
                  <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <button
                        onClick={handleClose}
                        style={{
                          background: "none",
                          border: "none",
                          marginLeft: "960px",
                        }}
                      >
                        <AiFillCloseCircle
                          style={{ color: " #1C84FF", fontSize: "2rem" }}
                        />
                      </button>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        {t("User.17")}: HTML
                      </Typography>
                      <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2, width: 900 }}
                      >
                        {t("User.17")}
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              </div>
              <div className="cssstart">
                <div className="css">
                  <div className="cssrectangle">
                    <img
                      style={{
                        width: "97px",
                        height: "95px",
                        marginTop: "30px",
                      }}
                      src={cssdemo}
                    />
                    <p style={{ color: "#fff", textAlign: "center" }}>
                      0 {t("User.8")} 24
                    </p>
                  </div>
                </div>
                <div className="desccourse">
                  <p className="_css">CSS</p>
                  <p className="incourse">
                    {t("User.12")} <br /> {t("User.13")}
                    <br /> {t("User.14")}
                  </p>
                </div>
                <div className="start_btns">
                  <button className="startlearn">
                    {t("User.15")}
                    <BiChevronRight style={{ fontSize: "2rem" }} />
                  </button>
                  <button className="linktodoc">
                    {t("User.16")} CSS{" "}
                    <BiChevronRight style={{ fontSize: "2rem" }} />
                  </button>
                </div>
              </div>
              <div className="jsstart">
                <div className="js">
                  <div className="jsrectangle">
                    <img
                      style={{
                        width: "97px",
                        height: "95px",
                        marginTop: "30px",
                      }}
                      src={jsdemo}
                    />
                    <p style={{ color: "#fff", textAlign: "center" }}>
                      0 {t("User.8")} 19
                    </p>
                  </div>
                </div>
                <div className="descourse">
                  <p className="_js">JavaScript</p>
                  <p className="incourse">
                    {t("User.12")} <br /> {t("User.13")} <br /> {t("User.14")}
                  </p>
                </div>
                <div className="start_btns">
                  <button className="startlearn">
                    {t("User.15")}{" "}
                    <BiChevronRight style={{ fontSize: "2rem" }} />
                  </button>
                  <button className="linktodoc">
                    {t("User.16")} JavaScript{" "}
                    <BiChevronRight style={{ fontSize: "2rem" }} />
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

export default User;
