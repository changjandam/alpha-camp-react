import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { itemPhoto1, itemPhoto2 } from '../../../image';

const ItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 0.5rem;
`;

const ItemImg = styled.img`
  width: 100px;
  height: 100px;
`;

const ItemInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const ItemName = styled.p`
  font-family: Noto Sans TC;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: right;

  color: #2a2a2a;
`;

const ItemCountDiv = styled.div`
  display: flex;
  width: 116px;
  justify-content: space-between;
  align-items: baseline;
`;

const ItemButton = styled.button`
  background: #f0f0f5;
  width: 27px;
  height: 27px;
  border-radius: 50%;
`;

const ItemAmount = styled.p`
  font-family: Inter;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
`;

const ItemPrice = styled.p`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 137% */

  text-align: right;

  color: #000000;
`;

const CartItem = ({ name, price, imgSrc }) => {
  const [amount, setAmount] = useState(1);

  return (
    <ItemDiv>
      <ItemImg src={imgSrc} />
      <ItemInfoDiv>
        <ItemName>{name}</ItemName>
        <ItemCountDiv>
          <ItemButton
            onClick={() => setAmount((prev) => prev - 1)}
            disabled={amount === 0 ? true : false}
          >
            -
          </ItemButton>
          <ItemAmount>{amount}</ItemAmount>
          <ItemButton onClick={() => setAmount((prev) => prev + 1)}>
            +
          </ItemButton>
        </ItemCountDiv>
        <ItemPrice>
          ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </ItemPrice>
      </ItemInfoDiv>
    </ItemDiv>
  );
};

const CartDiv = styled.div`
  display: block;
  margin: 1rem;
  padding: 1rem;
  background: #ffffff;
  border: 1px solid #f0f0f5;
  box-sizing: border-box;
  border-radius: 8px;
  @media (min-width: 780px) {
    grid-area: 2/8/5/13;
    margin: 0px;
  }
`;

const CartBar = styled.div`
  display: block;
  border-top: 1px solid #f0f0f5;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const InfoDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-right: 0.5rem;
`;

const InfoTitle = styled.p`
  font-family: Noto Sans TC;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  color: #2a2a2a;
`;

const InfoValue = styled.p`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height, or 121% */

  text-align: right;

  color: #000000;
`;

const Info = ({ title, value }) => {
  return (
    <InfoDiv>
      <InfoTitle>{title}</InfoTitle>
      <InfoValue>{value}</InfoValue>
    </InfoDiv>
  );
};

const Items = styled.div`
  display: grid;
  gap: 1rem;
  max-height: 240px;
  overflow: auto;
`;

const items = [
  {
    name: '破壞補丁修身牛仔褲',
    price: 3999,
    imgSrc: itemPhoto1,
  },
  {
    name: '刷色直筒牛仔褲',
    price: 1299,
    imgSrc: itemPhoto2,
  },
];

export default function Cart() {
  return (
    <CartDiv>
      <Items>
        {items.map((i) => (
          <CartItem {...i} key={i.name} />
        ))}
      </Items>
      <CartBar />
      <Info title='運費' value='免費' />
      <CartBar />
      <Info title='小計' value='$5,298' />
    </CartDiv>
  );
}
