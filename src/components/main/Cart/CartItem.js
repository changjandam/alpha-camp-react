import React from 'react';
import styled from 'styled-components';

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

const CartItem = ({ name, price, imgSrc, add, subtract, amount }) => {
  return (
    <ItemDiv>
      <ItemImg src={imgSrc} />
      <ItemInfoDiv>
        <ItemName>{name}</ItemName>
        <ItemCountDiv>
          <ItemButton onClick={subtract}>-</ItemButton>
          <ItemAmount>{amount}</ItemAmount>
          <ItemButton onClick={add}>+</ItemButton>
        </ItemCountDiv>
        <ItemPrice>
          ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </ItemPrice>
      </ItemInfoDiv>
    </ItemDiv>
  );
};

export default CartItem;
