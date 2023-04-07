import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import petrov from "../../../assets/images/petrov.png";
import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdExpandMore } from "react-icons/md";
import Typography from "@mui/material/Typography";
import { IconContext } from "react-icons/lib";
import "./menu.scss";
import Burger from "./Burger";
import { useTranslation } from "react-i18next";

const SidebarContainer = styled.div`
  width: auto;
  display: flex;
  height: auto;
  justify-content: flex-start;
`;
const Nav = styled.div`
  background-color: #18191b;
  width: 80px;
  height: 100%;
  text-align: center;
  display: ${({ sidebar }) => (sidebar ? "none" : "flex")};
  justify-content: center;
`;

const Navopen = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 0 0 10px 0;
  background: #18191b;
  cursor: pointer;
  margin-left: 40px;
  margin-top: -1px;
  position: fixed;
`;

const Navopen_f = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 0 0 10px 0;
  background: #1c84ff;
  cursor: pointer;
  margin-left: 40px;
  margin-top: -1px;
  position: fixed;
`;

const Navopen_s = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 0 0 10px 0;
  background: #1c84ff;
  cursor: pointer;
  margin-left: 40px;
  margin-top: -1px;
  position: fixed;
`;

const Navclose = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 0 0 10px 0;
  background: #18191b;
  /* background: black; */
  cursor: pointer;
  margin-left: 310px;
  margin-top: -1px;
  position: fixed;
`;

const NavIcon = styled(Link)`
  position: fixed;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  top: 55%;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 320px;
  height: 100%;
  display: ${({ sidebar }) => (sidebar ? "flex" : "none")};
  justify-content: center;
  top: 0;
  z-index: 111;
  margin-left: -80px;
`;

const SidebarWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Sidebar = () => {
  const { t } = useTranslation();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const Homeicon = () => {
    if (window.location.pathname === "/") {
      return (
        <Navopen>
          <FaIcons.FaChevronRight
            style={{ width: "40px", justifyContent: "center" }}
            onClick={showSidebar}
          />
        </Navopen>
      );
    }
  };
  const Familiarizationicon = () => {
    if (window.location.pathname === "/Familiarization") {
      return (
        <Navopen_f>
          <FaIcons.FaChevronRight
            style={{ width: "40px", justifyContent: "center" }}
            onClick={showSidebar}
          />
        </Navopen_f>
      );
    }
  };
  const Salutationicon = () => {
    if (window.location.pathname === "/Salutation") {
      return (
        <Navopen_s>
          <FiIcons.FiArrowRight
            style={{
              width: "40px",
              fontSize: "1.5rem",
              justifyContent: "center",
            }}
            onClick={showSidebar}
          />
        </Navopen_s>
      );
    }
  };
  const Userpageicon = () => {
    if (window.location.pathname === "/Userpage") {
      return (
        <Navopen_s>
          <FiIcons.FiArrowRight
            style={{
              width: "40px",
              fontSize: "1.5rem",
              justifyContent: "center",
            }}
            onClick={showSidebar}
          />
        </Navopen_s>
      );
    }
  };
  const Listlessonsicon = () => {
    if (window.location.pathname === "/Listlessons") {
      return (
        <Navopen_s>
          <FiIcons.FiArrowRight
            style={{
              width: "40px",
              fontSize: "1.5rem",
              justifyContent: "center",
            }}
            onClick={showSidebar}
          />
        </Navopen_s>
      );
    }
  };
  const Lessononeicon = () => {
    if (window.location.pathname === "/Webdev/lesson_1") {
      return (
        <Navopen_s>
          <FiIcons.FiArrowRight
            style={{
              width: "40px",
              fontSize: "1.5rem",
              justifyContent: "center",
            }}
            onClick={showSidebar}
          />
        </Navopen_s>
      );
    }
  };
  const Tagsicon = () => {
    if (window.location.pathname === "/Webdev/Tags") {
      return (
        <Navopen_s>
          <FiIcons.FiArrowRight
            style={{
              width: "40px",
              fontSize: "1.5rem",
              justifyContent: "center",
            }}
            onClick={showSidebar}
          />
        </Navopen_s>
      );
    }
  };
  const Taskoneicon = () => {
    if (window.location.pathname === "/Webdev/Task_1") {
      return (
        <Navopen_s>
          <FiIcons.FiArrowRight
            style={{
              width: "40px",
              fontSize: "1.5rem",
              justifyContent: "center",
            }}
            onClick={showSidebar}
          />
        </Navopen_s>
      );
    }
  };
  const Resulticon = () => {
    if (window.location.pathname === "/Result") {
      return (
        <Navopen_s>
          <FiIcons.FiArrowRight
            style={{
              width: "40px",
              fontSize: "1.5rem",
              justifyContent: "center",
            }}
            onClick={showSidebar}
          />
        </Navopen_s>
      );
    }
  };
  const Modalicon = () => {
    if (window.location.pathname === "/Modal") {
      return (
        <Navopen_s>
          <FiIcons.FiArrowRight
            style={{
              width: "40px",
              fontSize: "1.5rem",
              justifyContent: "center",
            }}
            onClick={showSidebar}
          />
        </Navopen_s>
      );
    }
  };
  const Lessonfouricon = () => {
    if (window.location.pathname === "/Lesson4/11") {
      return (
        <Navopen_s>
          <FiIcons.FiArrowRight
            style={{
              width: "40px",
              fontSize: "1.5rem",
              justifyContent: "center",
            }}
            onClick={showSidebar}
          />
        </Navopen_s>
      );
    }
  };

  const Homemenuicon = () => {
    if (window.location.pathname === "/") {
      return <Burger />;
    }
  };
  const Familiarmenuicon = () => {
    if (window.location.pathname === "/Familiarization") {
      return <Burger />;
    }
  };
  const Salutationmenuicon = () => {
    if (window.location.pathname === "/Salutation") {
      return (
        <div className="burger">
          <div className="burger__container">
            <div className="burger1"></div>
            <div className="burger2"></div>
          </div>
        </div>
      );
    }
  };
  const Listlessonsmenuicon = () => {
    if (window.location.pathname === "/Listlessons") {
      return (
        <div className="burger">
          <div className="burger__container">
            <div className="burger1"></div>
            <div className="burger2"></div>
          </div>
        </div>
      );
    }
  };
  const Userpagemenuicon = () => {
    if (window.location.pathname === "/Userpage") {
      return (
        <div className="burger">
          <div className="burger__container">
            <div className="burger1"></div>
            <div className="burger2"></div>
          </div>
        </div>
      );
    }
  };
  const Lessononemenuicon = () => {
    if (window.location.pathname === "/Webdev/lesson_1") {
      return (
        <div className="burger">
          <div className="burger__container">
            <div className="burger1"></div>
            <div className="burger2"></div>
          </div>
        </div>
      );
    }
  };
  const Tagsmenuicon = () => {
    if (window.location.pathname === "/Webdev/Tags") {
      return (
        <div className="burger">
          <div className="burger__container">
            <div className="burger1"></div>
            <div className="burger2"></div>
          </div>
        </div>
      );
    }
  };
  const Taskonemenuicon = () => {
    if (window.location.pathname === "/Webdev/Task_1") {
      return (
        <div className="burger">
          <div className="burger__container">
            <div className="burger1"></div>
            <div className="burger2"></div>
          </div>
        </div>
      );
    }
  };
  const Resultmenuicon = () => {
    if (window.location.pathname === "/Result") {
      return (
        <div className="burger">
          <div className="burger__container">
            <div className="burger1"></div>
            <div className="burger2"></div>
          </div>
        </div>
      );
    }
  };
  const Modalmenuicon = () => {
    if (window.location.pathname === "/Modal") {
      return (
        <div className="burger">
          <div className="burger__container">
            <div className="burger1"></div>
            <div className="burger2"></div>
          </div>
        </div>
      );
    }
  };
  const Lessonfourmenuicon = () => {
    if (window.location.pathname === "/Lesson4/11") {
      return (
        <div className="burger">
          <div className="burger__container">
            <div className="burger1"></div>
            <div className="burger2"></div>
          </div>
        </div>
      );
    }
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <SidebarContainer>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <div>
            {Homeicon()}
            {Familiarizationicon()}
            {Salutationicon()}
            {Listlessonsicon()}
            {Userpageicon()}
            {Lessononeicon()}
            {Tagsicon()}
            {Taskoneicon()}
            {Resulticon()}
            {Modalicon()}
            {Lessonfouricon()}
          </div>
          <NavIcon to="#" onClick={showSidebar}>
            {Homemenuicon()}
            {Familiarmenuicon()}
            {Salutationmenuicon()}
            {Listlessonsmenuicon()}
            {Userpagemenuicon()}
            {Lessononemenuicon()}
            {Tagsmenuicon()}
            {Taskonemenuicon()}
            {Resultmenuicon()}
            {Modalmenuicon()}
            {Lessonfourmenuicon()}
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <Navclose to="#">
              <AiIcons.AiOutlineClose
                style={{
                  color: "#ffcc00",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
                onClick={showSidebar}
              />
            </Navclose>
            <div className="scrollmenu">
              <div className="scroll">
                <Accordion
                  style={{
                    marginTop: "40px",
                    background: "none",
                    color: "#FFFFFF",
                    marginLeft: "7%",
                    border: "none",
                  }}>
                  <AccordionSummary
                    expandIcon={<MdExpandMore style={{ fontSize: "2.5rem" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography style={{ marginTop: "-20px" }}>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          alignItems: "center",
                        }}>
                        <div className="avatar">
                          <img
                            style={{
                              borderRadius: "30px",
                              width: "40px",
                              height: "40px",
                            }}
                            src={petrov}
                            alt="Petrov"
                          />
                        </div>

                        <div className="ml-2">
                          <p
                            className="m-0 p-0"
                            style={{ fontSize: "18px", color: "#fff" }}>
                            {t("Sidebar.1")}
                          </p>
                          <span style={{ fontSize: "11px", color: "#ffcc00" }}>
                            {t("Sidebar.2")}: 99 000 {t("Sidebar.3")}
                          </span>
                        </div>
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Link to={"/Userpage"} style={{ color: "#FFFFFF" }}>
                        {t("Sidebar.4")}
                      </Link>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  style={{
                    marginTop: "10px",
                    background: "none",
                    color: "#FFFFFF",
                    marginLeft: "7%",
                  }}>
                  <AccordionSummary
                    expandIcon={
                      <MdExpandMore
                        style={{ fontSize: "2.5rem", color: "#1C84FF" }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          alignItems: "center",
                          color: "#1C84FF",
                          fontSize: "18px",
                          fontFamily: "Inter",
                        }}>
                        {t("Sidebar.5")}
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Link style={{ color: "#FFFFFF" }}>
                        {" "}
                        {t("Sidebar.6")}
                      </Link>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  style={{
                    marginTop: "5px",
                    background: "none",
                    color: "#FFFFFF",
                    marginLeft: "10%",
                  }}>
                  <AccordionSummary
                    expandIcon={
                      <MdExpandMore
                        style={{ fontSize: "2rem", marginRight: "5px" }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                      <Link
                        to={"/Familiarization"}
                        style={{
                          display: "flex",
                          textAlign: "center",
                          alignItems: "center",
                          fontSize: "18px",
                          fontFamily: "Inter",
                          color: "#FFFFFF",
                        }}>
                        {t("Sidebar.7")}
                      </Link>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography style={{ display: "grid", gap: "20px" }}>
                      <li style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        <Link to={"/Salutation"} style={{ color: "#FFFFFF" }}>
                          {t("Sidebar.8")}
                        </Link>
                      </li>
                      <li style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        <Link style={{ color: "#FFFFFF" }}>
                          {t("Sidebar.9")}
                        </Link>
                      </li>
                      <li style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        <Link style={{ color: "#FFFFFF" }}>
                          {t("Sidebar.10")}
                        </Link>
                      </li>
                      <li style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        <Link to={"Listlessons"} style={{ color: "#FFFFFF" }}>
                          {t("Sidebar.11")}
                        </Link>
                      </li>
                      <li style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        <Link style={{ color: "#FFFFFF" }}>
                          {t("Sidebar.12")}
                        </Link>
                      </li>
                      <li style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        <Link style={{ color: "#FFFFFF" }}>
                          {t("Sidebar.13")}
                          <br /> {t("Sidebar.14")}
                        </Link>
                      </li>
                      <li style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        <Link style={{ color: "#FFFFFF" }}>
                          {t("Sidebar.15")}
                        </Link>
                      </li>
                      <li style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        <Link style={{ color: "#FFFFFF" }}>
                          {t("Sidebar.16")}
                          <br /> {t("Sidebar.17")}
                        </Link>
                      </li>
                      <li style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        <Link style={{ color: "#FFFFFF" }}>
                          {t("Sidebar.18")} <br /> {t("Sidebar.19")}
                        </Link>
                      </li>
                      <li style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        <Link style={{ color: "#FFFFFF" }}>
                          {t("Sidebar.20")}
                        </Link>
                      </li>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  style={{
                    marginTop: "5px",
                    background: "none",
                    color: "#FFFFFF",
                    marginLeft: "10%",
                  }}>
                  <AccordionSummary
                    expandIcon={
                      <MdExpandMore
                        style={{ fontSize: "2rem", marginRight: "5px" }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          alignItems: "center",
                          color: "#FFFFFF",
                        }}>
                        HTML
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      style={{
                        display: "grid",
                        gap: "20px",
                        cursor: "pointer",
                      }}>
                      <Link
                        to="/Webdev/lesson_1"
                        style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        {t("Sidebar.22")}
                      </Link>
                      <Link
                        to="/Webdev/Tags"
                        style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        {t("Sidebar.23")}
                      </Link>
                      <Link style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        {t("Sidebar.24")}
                      </Link>
                      <Link style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        {t("Sidebar.25")}
                      </Link>
                      <Link
                        to="/Lesson4/11"
                        style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        {t("Sidebar.26")} 4
                      </Link>
                      <Link style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        {t("Sidebar.26")} 5
                      </Link>
                      <Link style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        {t("Sidebar.26")} 6
                      </Link>
                      <Link style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        {t("Sidebar.26")} 7
                      </Link>
                      <Link style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        {t("Sidebar.26")} 8
                      </Link>
                      <Link style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        {t("Sidebar.26")} 9
                      </Link>
                      <Link style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        {t("Sidebar.26")} 10
                      </Link>
                      <Link style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        {t("Sidebar.26")} 11
                      </Link>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  style={{
                    marginTop: "5px",
                    background: "none",
                    color: "#FFFFFF",
                    marginLeft: "10%",
                  }}>
                  <AccordionSummary
                    expandIcon={
                      <MdExpandMore
                        style={{
                          fontSize: "2rem",
                          marginRight: "5px",
                          color: "#5E5858",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography style={{ cursor: "pointer" }}>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          alignItems: "center",
                          color: "#5E5858",
                        }}>
                        CSS
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Link style={{ color: "#FFFFFF" }}>
                        {" "}
                        {t("Sidebar.6")}
                      </Link>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  style={{
                    marginTop: "5px",
                    background: "none",
                    color: "#FFFFFF",
                    marginLeft: "10%",
                  }}>
                  <AccordionSummary
                    expandIcon={
                      <MdExpandMore
                        style={{
                          fontSize: "2rem",
                          marginRight: "5px",
                          color: "#5E5858",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          alignItems: "center",
                          color: "#5E5858",
                        }}>
                        Javascript
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Link to={"/Userpage"} style={{ color: "#FFFFFF" }}>
                        {t("Sidebar.4")}
                      </Link>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  style={{
                    marginTop: "10px",
                    background: "none",
                    color: "#FFFFFF",
                    marginLeft: "7%",
                  }}>
                  <AccordionSummary
                    expandIcon={
                      <MdExpandMore
                        style={{ fontSize: "2.5rem", color: "#1C84FF" }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          alignItems: "center",
                          fontSize: "20px",
                          color: "#1C84FF",
                          fontFamily: "Inter",
                        }}>
                        {t("Sidebar.27")}
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Link to={"/Userpage"} style={{ color: "#FFFFFF" }}>
                        {t("Sidebar.4")}
                      </Link>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  style={{
                    marginTop: "5px",
                    background: "none",
                    color: "#FFFFFF",
                    marginLeft: "10%",
                  }}>
                  <AccordionSummary
                    expandIcon={
                      <MdExpandMore
                        style={{ fontSize: "2rem", marginRight: "5px" }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          alignItems: "center",
                          color: "#FFFFFF",
                        }}>
                        HTML
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography style={{ display: "grid", gap: "20px" }}>
                      <Link style={{ color: "#FFFFFF", fontSize: "12px" }}>
                        {t("Sidebar.6")}
                      </Link>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  style={{
                    marginTop: "5px",
                    background: "none",
                    color: "#FFFFFF",
                    marginLeft: "10%",
                  }}>
                  <AccordionSummary
                    expandIcon={
                      <MdExpandMore
                        style={{
                          fontSize: "2rem",
                          marginRight: "5px",
                          color: "#5E5858",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          alignItems: "center",
                          color: "#5E5858",
                        }}>
                        CSS
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Link style={{ color: "#FFFFFF" }}>
                        {" "}
                        {t("Sidebar.6")}
                      </Link>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  style={{
                    marginTop: "5px",
                    background: "none",
                    color: "#FFFFFF",
                    marginLeft: "10%",
                  }}>
                  <AccordionSummary
                    expandIcon={
                      <MdExpandMore
                        style={{
                          fontSize: "2rem",
                          marginRight: "5px",
                          color: "#5E5858",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          alignItems: "center",
                          color: "#5E5858",
                        }}>
                        Javascript
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Link to={"/Userpage"} style={{ color: "#FFFFFF" }}>
                        {t("Sidebar.4")}
                      </Link>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  style={{
                    marginTop: "10px",
                    background: "none",
                    color: "#FFFFFF",
                    marginLeft: "7%",
                  }}>
                  <AccordionSummary
                    expandIcon={
                      <MdExpandMore
                        style={{ fontSize: "2.5rem", color: "#1C84FF" }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          alignItems: "center",
                          fontSize: "20px",
                          color: "#1C84FF",
                          fontFamily: "Inter",
                        }}>
                        {t("Sidebar.28")}
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Link to={"/Userpage"} style={{ color: "#FFFFFF" }}>
                        {t("Sidebar.4")}
                      </Link>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  style={{
                    marginTop: "5px",
                    background: "none",
                    color: "#FFFFFF",
                    marginLeft: "10%",
                  }}>
                  <AccordionSummary
                    expandIcon={
                      <MdExpandMore
                        style={{ fontSize: "2rem", marginRight: "5px" }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          alignItems: "center",
                          color: "#FFFFFF",
                        }}>
                        HTML
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Link style={{ color: "#FFFFFF" }}>
                        {" "}
                        {t("Sidebar.6")}
                      </Link>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  style={{
                    marginTop: "5px",
                    background: "none",
                    color: "#FFFFFF",
                    marginLeft: "10%",
                  }}>
                  <AccordionSummary
                    expandIcon={
                      <MdExpandMore
                        style={{
                          fontSize: "2rem",
                          marginRight: "5px",
                          color: "#5E5858",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          alignItems: "center",
                          color: "#5E5858",
                        }}>
                        CSS
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Link style={{ color: "#FFFFFF" }}>
                        {" "}
                        {t("Sidebar.6")}
                      </Link>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  style={{
                    marginTop: "5px",
                    background: "none",
                    color: "#FFFFFF",
                    marginLeft: "10%",
                  }}>
                  <AccordionSummary
                    expandIcon={
                      <MdExpandMore
                        style={{
                          fontSize: "2rem",
                          marginRight: "5px",
                          color: "#5E5858",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          alignItems: "center",
                          color: "#5E5858",
                        }}>
                        Javascript
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Link to={"/Userpage"} style={{ color: "#FFFFFF" }}>
                        {t("Sidebar.4")}
                      </Link>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </SidebarContainer>
  );
};
export default Sidebar;