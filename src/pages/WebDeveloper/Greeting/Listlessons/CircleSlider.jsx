import React, { useState } from "react";
import styled from "styled-components";

const CircleContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  height: auto;
  margin: 0 auto;
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1336px;
  height: 200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MainContainerLeft = styled.div`
  width: 100%;
`;

const StepContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;

  :before {
    content: "";
    position: absolute;
    background: #000;
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    /* left: -25px; */
  }
  :after {
    content: "";
    position: absolute;
    background: #1c84ff;
    height: 4px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    /* left: -25px; */
  }
`;

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const StepStyle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 77px;
  background-color: ${({ qadam }) =>
    qadam === "completed" ? "#1C84FF" : "#000"};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #1c84ff;
    transition: 0.4s ease;
  }
`;

const CircleCounter = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  font-weight: 700;
  font-size: 70px;
  align-items: center;
  text-align: justify;
  justify-content: flex-end;
`;
const Circle = ({ setCount }) => {
  const [activeStep, setActiveStep] = useState(1);
  const steps = [
    { step: 1 },
    { step: 2 },
    { step: 3 },
    { step: 4 },
    { step: 5 },
    { step: 6 },
    { step: 7 },
    { step: 8 },
    { step: 9 },
    { step: 10 },
    { step: 11 },
  ];

  const totalSteps = steps.length;
  const width = `${(100 / (totalSteps - 1)) * (activeStep - 0)}%`;

  return (
    <CircleContainer>
      <MainContainer>
        <MainContainerLeft>
          <StepContainer width={width}>
            {steps.map(({ step, label }) => (
              <StepWrapper key={step}>
                <StepStyle
                  onClick={() => {
                    setActiveStep(step);
                    setCount(step);
                  }}
                  qadam={
                    activeStep >= step ? "completed" : "incomplete"
                  }></StepStyle>
              </StepWrapper>
            ))}
          </StepContainer>
        </MainContainerLeft>
      </MainContainer>
    </CircleContainer>
  );
};

export default Circle;
