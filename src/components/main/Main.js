import React from 'react';
import styled from 'styled-components';
import CenterDiv from '../layout/CenterDiv';
import Step from './Step';

const Div = styled(CenterDiv)`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 56px;
`;
const P = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

export default function Main() {
  return (
    <Div>
      <P>結帳</P>
      <Step />
    </Div>
  );
}
