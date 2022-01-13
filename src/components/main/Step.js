import React from 'react';
import styled from 'styled-components';
import { Step1, Step2, Step3, StepDone } from '../../svg/StepIcon';

const Div = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
    @media (min-width: 780px) {
      grid-area: 2/1/3/7;
      margin: 0;
    }
`;
const Bar = styled.div`
  width: 60px;

  background-color: black;
  border: 1px solid ${(props) => props.stepColor};
`;

export default function Step({ step }) {
  return (
    <Div>
      {step === 1 ? <Step1 step={step} /> : <StepDone />}
      <Bar stepColor={'#2A2A2A'} />
      {step === 3 ? <StepDone /> : <Step2 step={step} />}
      <Bar stepColor={step > 1 ? '#2A2A2A' : '#AFB1BD'} />
      <Step3 step={step} />
    </Div>
  );
}
