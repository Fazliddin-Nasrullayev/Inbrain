import React from "react";
import course from "../../assets/images/verstka.png";
import bow from "../../assets/images/bow.png";
import foundation from "../../assets/images/foundation.png";
import htmldemo from "../../assets/images/htmldemo.png";
import cssdemo from "../../assets/images/cssdemo.png";
import jsdemo from "../../assets/images/jsdemo.png";
import phpdemo from "../../assets/images/phpdemo.png";
import javademo from "../../assets/images/javademo.png";
import mobiledemo from "../../assets/images/mobiledemo.png";
import collectivework from "../../assets/images/collectivework.png";
import student from "../../assets/images/student.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import petrov from "../../assets/images/petrov.png";
import Slider from "react-slick";
import CarouselCompound from "./slider/carousel-compound";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import leftgroup from "../../assets/images/leftgroup.png";
import rightgroup from "../../assets/images/rightgroup.png";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";
import Video from "../../assets/images/youtube.png";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const headerTitle = t("headerTitle.1");

  const SlickArrowRight = ({ currentSlide, slideCount, style, ...props }) => (
    <img
      style={{
        ...style,
        width: "60px",
        height: "60px",
        marginTop: "60px",
        marginRight: "20px",
      }}
      src={rightgroup}
      alt="nextArrow"
      {...props}
    />
  );
  const SlickArrowLeft = ({ currentSlide, slideCount, style, ...props }) => (
    <img
      style={{
        ...style,
        width: "60px",
        height: "60px",
        marginTop: "60px",
        zIndex: "999",
        marginLeft: "40px",
      }}
      src={leftgroup}
      alt="prevArrow"
      {...props}
    />
  );
  const data = [
    {
      id: 1,
      img: petrov,
      name: "Петров. И",
      text: "Давно уже брожу по курсам inbrain, потому что здесь есть очень ценная возможность попробовать изучить бесплатную часть с тем, чтобы понять, хочешь ты заниматься этим или нет. Курс по критическому мышлению - первый курс, который я полностью завершила. Я очень довольна своим решением взять этот курс. Способ подачи материала, с моей точки зрения, очень эффективный.",
    },
    {
      id: 2,
      img: petrov,
      name: "Петров. И",
      text: "Давно уже брожу по курсам inbrain, потому что здесь есть очень ценная возможность попробовать изучить бесплатную часть с тем, чтобы понять, хочешь ты заниматься этим или нет. Курс по критическому мышлению - первый курс, который я полностью завершила. Я очень довольна своим решением взять этот курс. Способ подачи материала, с моей точки зрения, очень эффективный.",
    },
    {
      id: 3,
      img: petrov,
      name: "Петров. И",
      text: "Давно уже брожу по курсам inbrain, потому что здесь есть очень ценная возможность попробовать изучить бесплатную часть с тем, чтобы понять, хочешь ты заниматься этим или нет. Курс по критическому мышлению - первый курс, который я полностью завершила. Я очень довольна своим решением взять этот курс. Способ подачи материала, с моей точки зрения, очень эффективный.",
    },
    {
      id: 4,
      img: petrov,
      name: "Петров. И",
      text: "Давно уже брожу по курсам inbrain, потому что здесь есть очень ценная возможность попробовать изучить бесплатную часть с тем, чтобы понять, хочешь ты заниматься этим или нет. Курс по критическому мышлению - первый курс, который я полностью завершила. Я очень довольна своим решением взять этот курс. Способ подачи материала, с моей точки зрения, очень эффективный.",
    },
    {
      id: 5,
      img: petrov,
      name: "Петров. И",
      text: "Давно уже брожу по курсам inbrain, потому что здесь есть очень ценная возможность попробовать изучить бесплатную часть с тем, чтобы понять, хочешь ты заниматься этим или нет. Курс по критическому мышлению - первый курс, который я полностью завершила. Я очень довольна своим решением взять этот курс. Способ подачи материала, с моей точки зрения, очень эффективный.",
    },
    {
      id: 6,
      img: petrov,
      name: "Петров. И",
      text: "Давно уже брожу по курсам inbrain, потому что здесь есть очень ценная возможность попробовать изучить бесплатную часть с тем, чтобы понять, хочешь ты заниматься этим или нет. Курс по критическому мышлению - первый курс, который я полностью завершила. Я очень довольна своим решением взять этот курс. Способ подачи материала, с моей точки зрения, очень эффективный.",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const activedata = [
    {
      id: 1,
      img: htmldemo,
      title: "HTML",
      btn: "Начать обучение",
    },
    {
      id: 2,
      img: cssdemo,
      title: "CSS",
      btn: "Начать обучение",
    },
    {
      id: 3,
      img: jsdemo,
      title: "JavaScript",
      btn: "Начать обучение",
    },
  ];
  const soon = [
    {
      id: 1,
      img: phpdemo,
      title: "PHP",
      p: "Совсем скоро",
    },
    {
      id: 2,
      img: javademo,
      title: "Java",
      p: "Совсем скоро",
    },
    {
      id: 3,
      img: mobiledemo,
      title: "Mobile Dev.",
      p: "Совсем скоро",
    },
  ];
  return (
    <div className="home">
      <div className="home__container">
        <Header title={headerTitle} />
        <div className="app__main-container">
          <CarouselCompound infinite>
            <CarouselCompound.Page>
              <div className="item item-1" alt="Color">
                <img
                  style={{ zIndex: "999", position: "absolute" }}
                  src={Video}
                  alt="Item 1"
                />
                <img className="course" src={course} alt="Item 1" />
              </div>
            </CarouselCompound.Page>
            <CarouselCompound.Page>
              <div className="item item-2" alt="Color">
                <img
                  style={{ zIndex: "999", position: "absolute" }}
                  src={Video}
                  alt="Item 2"
                />
                <img className="course" src={course} alt="Item 3" />
              </div>
            </CarouselCompound.Page>
            <CarouselCompound.Page>
              <div className="item item-3" alt="Color">
                <img
                  style={{ zIndex: "999", position: "absolute" }}
                  src={Video}
                  alt="Item 3"
                />
                <img className="course" src={course} alt="Item 3" />
              </div>
            </CarouselCompound.Page>
          </CarouselCompound>
        </div>
        <div className="ourgoal">
          <div className="whatweteach">
            <div className="teachhead">{t("homepage.1")}</div>
            <p className="teachtxt">
              {t("homepage.2")}
              <br /> {t("homepage.3")} <br />
              {t("homepage.4")} <br />
              {t("homepage.5")} <br /> {t("homepage.6")}
            </p>
          </div>
          <div className="linktoinfo">
            <div className="meet">{t("homepage.7")}</div>

            <div className="button">
              <Link to="/Familiarization" className="clickme">
                <span className="linkbtn">{t("homepage.8")}:)</span>{" "}
                <img className="bow" src={bow} alt="Skore 31" />{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="webdev">
          <div className="foundation">
            <div className="webdevcourse">
              <img src={foundation} alt="Foundation" />
            </div>
          </div>
          <div className="aboutcourse">
            <p className="kurs">{t("homepage.9")}</p>
            <p className="topro">{t("homepage.10")}</p>
            <p className="learnjs">
              {t("homepage.11")} <br /> {t("homepage.12")} <br />
              {t("homepage.13")}
            </p>
            <div className="startcourse">
              <Link to="/Salutation" className="start_btn">
                {t("homepage.14")}
              </Link>

              <p className="durationcourse">{t("homepage.15")}</p>
            </div>
          </div>
        </div>
        <div className="courses_part">
          <div className="techhead">
            <div className="learningtechnology">
              <p className="technology">{t("homepage.16")}</p>
              <p className="startfromnull">{t("homepage.17")}</p>
            </div>
            <button className="startlearnbtn">{t("homepage.18")}</button>
          </div>

          <div className="aboutourtechnology">
            {t("homepage.19")}
            <br />
            <p className="abouttechhead">
              {t("homepage.20")} <br /> {t("homepage.21")}
              <br /> {t("homepage.22")}.
            </p>
          </div>
          <div className="democourses">
            {activedata.map((item) => (
              <>
                <div className="item">
                  <div>
                    <img className="itemdemo" src={item.img} alt="Item demo" />
                    <div className="itemhead">{item.title}</div>
                  </div>

                  <button className="startlearnitem">{t("homepage.18")}</button>
                </div>
              </>
            ))}
            {soon.map((item) => (
              <div className="item">
                <div>
                  <img className="itemdemo" src={item.img} alt="Item demo 2" />
                  <div className="itemhead">{item.title}</div>
                </div>
                <p className="itemhead">{t("homepage.50")}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="jobdeveloper">
          <div className="jobhead">{t("homepage.23")}</div>

          <div className="tasksdeveloper">
            <div className="tasks">
              <p className="writecode">{t("homepage.24")}</p>
              <p className="createwebsite">{t("homepage.25")}</p>
              <p className="jobwithcollective">{t("homepage.26")}</p>
              <p className="helpbusinesses">
                {t("homepage.27")} <br /> {t("homepage.28")}
              </p>
            </div>
            <div>
              <img
                className="collectivework"
                src={collectivework}
                alt="Collective work"
              />
            </div>
          </div>
        </div>
        <div className="contactus">
          <div className="helpchoosing">
            <div className="choosing">{t("homepage.29")}</div>
            <div className="ask_us">
              <img className="student" src={student} alt="Student" />
              <p className="asktxt">
                {t("homepage.30")} <br />
                {t("homepage.31")}
                <br />
                {t("homepage.32")}
                <br />
                {t("homepage.33")} <br />
                {t("homepage.34")} <br />
                {t("homepage.35")}
              </p>
            </div>
          </div>
          <div className="registr">
            <input className="name" placeholder={t("homepage.36")} />
            <input className="phone" placeholder={t("homepage.37")} />
            <input className="email" placeholder={t("homepage.38")} />
            <div className="sendinfo">
              <div className="soglasie">
                {t("homepage.39")}
                <br /> {t("homepage.40")}{" "}
                <a
                  href="/"
                  style={{ color: "#1c84ff", textDecoration: "underline" }}>
                  {t("homepage.41")}
                </a>{" "}
                <br />{" "}
                <a
                  href="/"
                  style={{ color: "#1c84ff", textDecoration: "underline" }}>
                  {t("homepage.42")}
                </a>
              </div>
              <button className="registr_btn">
                <big>{t("homepage.43")}</big>
              </button>
            </div>
          </div>
        </div>
        <div className="reviews_part">
          <div className="reviewhead">{t("homepage.44")}</div>
          <p className="reviewtxt">
            {t("homepage.45")} <br /> {t("homepage.46")} <br />
            {t("homepage.47")}
          </p>
          <div className="comment_part">
            <Slider {...settings}>
              {data.map((item) => (
                <div className="review_card">
                  <div className="head_card">
                    <img className="petrov" src={item.img} alt="Petrov" />
                    <p className="username">{t("homepage.48")}</p>
                  </div>
                  <div className="comment">
                    <p className="commenttxt">{t("homepage.49")}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
