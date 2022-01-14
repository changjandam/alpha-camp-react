import React from 'react';
import styled from 'styled-components';
import { Box, Flex, Text } from '@chakra-ui/react';

const Label = styled.label`
  width: 100%;
  height: 60px;
  margin-bottom: 1.5rem;
  display: block;
  border-radius: 0.5rem;
  border: 1px solid black;
`;

const StyledFlex = styled(Flex)`
  &:before {
    content: '';
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 50%;
    margin: 20px;
    transition: border 0.1s ease-out;
  }
`;

const Radio = styled.input`
  &:checked {
    & + label {
      & > div {
        &:before {
          border: 6px solid black;
        }
      }
    }
  }
`;

export default function RadioButton(props) {
  return (
    <React.Fragment>
      <Radio
        type='radio'
        id={props.value}
        name='transport'
        hidden
        onChange={()=>{}}
        checked={props.checked}
      ></Radio>
      <Label htmlFor={props.value} onClick={props.setValue}>
        <StyledFlex align={'center'} direction={'row'} h={'100%'} w={'100%'}>
          <Box>
            <Text fontSize={14}>{props.method}</Text>
            <Text fontSize={12}>{props.time}</Text>
          </Box>
          <Text
            textAlign={'end'}
            alignSelf={'flex-start'}
            flex='1'
            mt='13px'
            mr='20px'
            fontSize={12}
          >
            {props.cost}
          </Text>
        </StyledFlex>
      </Label>
    </React.Fragment>
  );
}
