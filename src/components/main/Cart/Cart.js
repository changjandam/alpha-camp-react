import React from 'react';
import styled from 'styled-components';
import { itemPhoto1, itemPhoto2 } from '../../../image';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, subtractItem } from '../../../features/slices/cartSlice';
import CartItem from './CartItem';

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
  @media (min-width: 780px) {
    max-height: 350px;
  }
`;

const items = [
  {
    id: 1,
    name: '破壞補丁修身牛仔褲',
    price: 3999,
    imgSrc: itemPhoto1,
  },
  {
    id: 2,
    name: '刷色直筒牛仔褲',
    price: 1299,
    imgSrc: itemPhoto2,
  },
  {
    id: 3,
    name: '破壞補丁修身牛仔褲',
    price: 3999,
    imgSrc: itemPhoto1,
  },
  {
    id: 4,
    name: '刷色直筒牛仔褲',
    price: 1299,
    imgSrc: itemPhoto2,
  },
];

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (prev, curr) =>
      prev.amount * items.find((i) => i.id === prev.id).price +
      curr.amount * items.find((i) => i.id === curr.id).price
  );

  return (
    <CartDiv>
      <Items>
        {cartItems.map((i) => {
          return (
            <CartItem
              {...items.find((item) => item.id === i.id)}
              key={i.id}
              add={() => dispatch(addItem({ id: i.id }))}
              subtract={() => dispatch(subtractItem({ id: i.id }))}
              amount={i.amount}
            />
          );
        })}
      </Items>
      <CartBar />
      <Info title='運費' value='免費' />
      <CartBar />
      <Info
        title='小計'
        value={'$' + total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      />
    </CartDiv>
  );
}
