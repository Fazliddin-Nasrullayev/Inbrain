import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import Html_Task_1 from "./task_1/Html_Task_1";
import './MainTasksPanel.scss';
const MainTasksPanel = () => {
  const { t } = useTranslation();
  const title = (
    <>
      {t("TaskFirst.1")}
      <span style={{ color: "#1c84ff" }}>1</span> {t("TaskFirst.2")} 14
    </>
  );

  return (
    <div className="main__tasks__panel">
      <div className="tasks__container">
        <div className="header1">
          <Header title={title} />
        </div>
        <Html_Task_1 />
        <div className="foot">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainTasksPanel;
