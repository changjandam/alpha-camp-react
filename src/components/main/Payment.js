import React from 'react';
import styled from 'styled-components';
import Input from '../UI/Input.js';

import { Box, Text, Grid } from '@chakra-ui/react';
import { useReducer } from 'react';

const Form = styled.form`
  margin: 15px;
`;

export default function Payment() {
  const cardInfoInitialState = {
    name: '',
    number: '',
    expire: '',
    cvc: '',
  };

  const cardInfoReducer = (state, action) => {
    switch (action.type) {
      case 'name':
        return {
          ...state,
          name: action.payload,
        };
      case 'number':
        const inputNumber = action.payload.replace(/\s/g, '');

        const addSpace = (number) => {
          let slices = [];
          for (let i = 0; i < number.length; i += 4) {
            slices.push(
              number.slice(i, i + 4 < number.length ? i + 4 : number.length)
            );
          }
          const outputNumber = slices.length
            ? slices.reduce((pre, current) => {
                return pre + ' ' + current;
              })
            : '';

          return outputNumber;
        };

        return {
          ...state,
          number: addSpace(inputNumber),
        };
      case 'expire':
        return {
          ...state,
          expire: action.payload,
        };
      case 'cvc':
        return {
          ...state,
          cvc: action.payload,
        };
      default:
        throw new Error();
    }
  };

  const [cardInfo, dispatchCardInfo] = useReducer(
    cardInfoReducer,
    cardInfoInitialState
  );

  return (
    <Box>
      <Text m={'1rem'} fontSize={'1.5rem'} fontWeight={'700'}>
        付款資訊
      </Text>
      <Form>
        <Input
          tagType='input'
          id='card-name'
          placeholder='Jimmy Hu'
          title='持卡人姓名'
          value={cardInfo.name}
          setValue={(e) =>
            dispatchCardInfo({ type: 'name', payload: e.target.value })
          }
        />
        <Input
          tagType='input'
          id='card-number'
          type='tel'
          placeholder='1111 2222 3333 4444'
          inputmode='numeric'
          maxLength='19'
          title='卡號'
          value={cardInfo.number}
          setValue={(e) =>
            dispatchCardInfo({ type: 'number', payload: e.target.value })
          }
        />
        <Grid templateColumns={'1fr 1fr'}>
          <Input
            tagType='input'
            id='card-expires'
            type='tel'
            placeholder='MM/YY'
            title='有效期限'
            value={cardInfo.expire}
            setValue={(e) =>
              dispatchCardInfo({ type: 'expire', payload: e.target.value })
            }
          />
          <Input
            tagType='input'
            id='card-cvc'
            type='tel'
            placeholder='123'
            title='CVC/CCV'
            pl='30px'
            maxLength='3'
            value={cardInfo.cvc}
            setValue={(e) =>
              dispatchCardInfo({ type: 'cvc', payload: e.target.value })
            }
          />
        </Grid>
      </Form>
    </Box>
  );
}
