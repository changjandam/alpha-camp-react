import React from 'react';
import styled from 'styled-components';
import RadioButton from '../UI/Radio';

import { Box, Text, RadioGroup } from '@chakra-ui/react';

const Form = styled.form`
  margin: 15px;
`;

const deliver = [
  {
    id: 1,
    method: '標準運送',
    time: '約3～7個工作天',
    cost: '免費',
    value: 'standard',
  },
  {
    id: 2,
    method: 'DHL 貨運',
    time: '48小時內送達',
    cost: '$500',
    value: 'DHL',
  },
];

export default function Transport() {
  return (
    <Box>
      <Text m={'1rem'} fontSize={'1.5rem'} fontWeight={'700'}>
        寄送地址
      </Text>
      <Form>
        <RadioGroup>
          {deliver.map((i) => (
            <RadioButton
              method={i.method}
              time={i.time}
              cost={i.cost}
              key={i.id}
              value={i.value}
            />
          ))}
        </RadioGroup>
      </Form>
    </Box>
  );
}
