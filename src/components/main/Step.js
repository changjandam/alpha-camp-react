import React from 'react';
import styled from 'styled-components';
import { Step1, Step2, Step3, StepDone } from '../../svg/StepIcon';

const Div = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Bar = styled.div`
  width: 60px;

  background-color: black;
  border: 1px solid ${(props) => props.stepColor};
`;

export default function Step(props) {
  return (
    <Div>
      <Step1 stepColor={'#2A2A2A'} />
      <Bar stepColor={'#2A2A2A'} />
      <Step2 stepColor={'#AFB1BD'} />
      <Bar stepColor={'#AFB1BD'} />
      <Step3 stepColor={'#AFB1BD'} />
    </Div>
  );
}
