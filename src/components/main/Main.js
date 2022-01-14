import React from 'react';
import styled from 'styled-components';
import CenterDiv from '../layout/CenterDiv';
import Step from './Step';
import Address from './Address';
import Transport from './Transport';
import Payment from './Payment';
import Cart from './Cart/Cart';
import StepButtons from './StepButtons';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeValue } from '../../features/slices/formSlice';

const Div = styled(CenterDiv)`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 56px;
  margin-bottom: 1rem;
  @media (min-width: 780px) {
    display: grid;
    grid-template-columns: repeat(12, 65px);
    grid-template-rows: 76px 32px 400px 70px;
    gap: calc((100% - (65px * 12)) / 11);
    margin-bottom: 120px;
  }
`;
const P = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

const FormDiv = styled.div`
  width: 100%;
  @media (min-width: 780px) {
    grid-area: 3/1/4/7;
    margin-top: 4rem;
    margin-bottom: 3rem;
  }
`;

const formSelector = (step, form, dispatchAction) => {
  switch (step) {
    case 1:
      return <Address form={form} dispatchAction={dispatchAction} />;
    case 2:
      return <Transport form={form} dispatchAction={dispatchAction} />;
    case 3:
      return <Payment form={form} dispatchAction={dispatchAction} />;
    default:
      throw new Error('formSelector error');
  }
};

export default function Main() {
  const form = useSelector((state) => state.form.value);
  const dispatch = useDispatch();
  const dispatchAction = (payload) => dispatch(changeValue(payload));
  console.log(form)
  const [step, setStep] = useState(1);
  return (
    <Div>
      <P>結帳</P>
      <Step step={step} />
      <FormDiv>{formSelector(step, form, dispatchAction)}</FormDiv>
      <Cart />
      <StepButtons step={step} setStep={setStep} />
    </Div>
  );
}
