import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import Circle from "./circle/Circle";
import Lesson_1 from "./lesson_1/Lesson_1";
import Lesson_2 from "./lesson_2/Lesson_2";
import Lesson_3 from "./lesson_3/Lesson_3";
const MainPanel = () => {
  const [count, setCount] = useState(1);
  const { t } = useTranslation();
  let step1 = false,
    step2 = false,
    step3 = false,
    step4 = false,
    step5 = false,
    step6 = false,
    step7 = false,
    step8 = false,
    step9 = false,
    step10 = false,
    step11 = false;

  switch (count) {
    case 1:
      step1 = true;
      break;
    case 2:
      step2 = true;
      break;
    case 3:
      step3 = true;
      break;
    case 4:
      step4 = true;
      break;
    case 5:
      step5 = true;
      break;
    case 6:
      step6 = true;
      break;

    case 7:
      step7 = true;
      break;

    case 8:
      step8 = true;
      break;
    case 9:
      step9 = true;
      break;
    case 10:
      step10 = true;
      break;
    case 11:
      step11 = true;
      break;
    default:
      step1 = true;
  }

  const headerTitle = t("headerTitle.1");

  return (
    <div className="main">
      <div className="main__container">
        <div className="header1">
          <Header title={headerTitle} />
        </div>
        <div className="main__html">
          <Circle setCount={setCount} />
          {step1 && <Lesson_1 />}
          {step2 && <Lesson_2 />}
          {step3 && <Lesson_3 />}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPanel;
