import React, { useState } from "react";
import "./Listlesson.scss";
import CircleSlider from "./CircleSlider";

const Circlepart = () => {
  const [count, setCount] = useState(1);

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

  return (
    <div className="main__html">
      <CircleSlider setCount={setCount} />
    </div>
  );
};

export default Circlepart;
