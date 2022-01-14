import React from 'react';
import styled from 'styled-components';
import Input from '../UI/Input.js';

import { Box, Text, Grid } from '@chakra-ui/react';

const Form = styled.form`
  margin: 15px;
  @media (min-width: 780px) {
    margin: 0;
  }
`;

const addSpace = (number) => {
  number = number.replace(/\s/g, '');
  let slices = [];
  for (let i = 0; i < number.length; i += 4) {
    slices.push(number.slice(i, i + 4 < number.length ? i + 4 : number.length));
  }
  const outputNumber = slices.length
    ? slices.reduce((pre, current) => {
        return pre + ' ' + current;
      })
    : '';

  return outputNumber;
};

export default function Payment({ form, dispatchAction }) {
  return (
    <Box>
      <Text m={'1rem'} fontSize={'1.5rem'} fontWeight={'700'}>
        付款資訊
      </Text>
      <Form>
        <Input
          tagType='input'
          id='cardName'
          placeholder='Jimmy Hu'
          title='持卡人姓名'
          value={form.cardName}
          dispatch={(value) => {
            dispatchAction({ ...form, ...value });
          }}
        />
        <Input
          tagType='input'
          id='cardNumber'
          type='tel'
          placeholder='1111 2222 3333 4444'
          inputmode='numeric'
          maxLength='19'
          title='卡號'
          value={addSpace(form.cardNumber)}
          dispatch={(value) => {
            dispatchAction({ ...form, ...value });
          }}
        />
        <Grid templateColumns={'1fr 1fr'}>
          <Input
            tagType='input'
            id='expire'
            type='tel'
            placeholder='MM/YY'
            title='有效期限'
            value={form.expire}
            dispatch={(value) => {
              dispatchAction({ ...form, ...value });
            }}
          />
          <Input
            tagType='input'
            id='card-cvc'
            type='tel'
            placeholder='123'
            title='CVC/CCV'
            pl='30px'
            maxLength='3'
            value={form.cvc}
            dispatch={(value) => {
              dispatchAction({ ...form, ...value });
            }}
          />
        </Grid>
      </Form>
    </Box>
  );
}
