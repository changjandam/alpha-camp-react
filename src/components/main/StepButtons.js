import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  @media (min-width: 780px) {
    grid-area: 4/1/5/7;
    margin: 0;
  }
`;

const Bar = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  width: 100%;
  border-top: 1px solid #e6e6eb;
  @media (min-width: 780px) {
    margin-top: 0;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 780px) {
    justify-content: ${props=>props.step===1 && 'end'}
  }

`;

const NextButton = styled.button`
  background: #f67599;
  height: 46px;
  width: ${(props) => (props.step === 1 ? '100%' : '156px')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  p {
    color: white;
  }
  @media (min-width: 780px) {
    width: 174px;
    
  }
`;

const PrevButton = styled.button`
  height: 46px;
  width: 77px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
  }
`;

const leftArrow = (
  <svg
    width='21'
    height='9'
    viewBox='0 0 21 9'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.85981 0.116733C5.6729 -0.0389109 5.36985 -0.0389109 5.18293 0.116733L0.140187 4.31579L0.0840028 4.37195C-0.0467075 4.53002 -0.0245865 4.74876 0.148335 4.88605L5.19108 8.88989L5.25866 8.93468C5.44823 9.03856 5.70562 9.01808 5.86777 8.87648L5.92156 8.8202C6.04631 8.66236 6.02172 8.44802 5.85166 8.31301L1.67891 5H20.0238L20.1094 4.99194C20.3315 4.94961 20.5 4.74546 20.5 4.5C20.5 4.22386 20.2868 4 20.0238 4H1.87229L5.85981 0.680368L5.91519 0.625171C6.04442 0.469841 6.02596 0.255083 5.85981 0.116733Z'
      fill='black'
    />
  </svg>
);

const rightArrow = (
  <svg
    width='21'
    height='9'
    viewBox='0 0 21 9'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.6402 0.116733C14.8271 -0.0389109 15.1302 -0.0389109 15.3171 0.116733L20.3598 4.31579L20.416 4.37195C20.5467 4.53002 20.5246 4.74876 20.3517 4.88605L15.3089 8.88989L15.2413 8.93468C15.0518 9.03856 14.7944 9.01808 14.6322 8.87648L14.5784 8.8202C14.4537 8.66236 14.4783 8.44802 14.6483 8.31301L18.8211 5H0.476191L0.390594 4.99194C0.168451 4.94961 0 4.74546 0 4.5C0 4.22386 0.213198 4 0.476191 4H18.6277L14.6402 0.680368L14.5848 0.625171C14.4556 0.469841 14.474 0.255083 14.6402 0.116733Z'
      fill='white'
    />
  </svg>
);

export default function StepButtons({ step = 1, setStep }) {
  return (
    <Div>
      <Bar />
      <ButtonDiv step={step}>
        {step === 1 ? (
          ''
        ) : (
          <PrevButton onClick={() => setStep((pre) => pre - 1)}>
            {leftArrow}
            <p>上一步</p>
          </PrevButton>
        )}

        <NextButton
          step={step}
          onClick={() => (step === 3 ? step : setStep((pre) => pre + 1))}
        >
          <p>{step === 3 ? '確認下單' : '下一步'}</p>
          {step === 3 ? '' : rightArrow}
        </NextButton>
      </ButtonDiv>
    </Div>
  );
}
