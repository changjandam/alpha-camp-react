import React, { useState } from 'react';
import styled from 'styled-components';
import { Select, Input as ChakraInput, Box } from '@chakra-ui/react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useRef } from 'react';

const Label = styled.label`
  color: #808080;
  font-size: 12px;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const typeSelector = (props, value, setValue) => {
  switch (props.tagType) {
    case 'input':
      return (
        <ChakraInput
          id={props.id}
          type={props.type}
          focusBorderColor='#f67599'
          placeholder={props.placeholder}
          inputMode={props.inputmode}
          maxLength={props.maxLength}
          value={value}
          onChange={setValue}
          pattern={props.pattern}
        />
      );
    case 'select':
      return (
        <Select
          icon={<IoMdArrowDropdown />}
          focusBorderColor='#f67599'
          w={props.w}
          value={value}
          onChange={setValue}
        >
          {props.options
            ? props.options.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.title}
                </option>
              ))
            : ''}
        </Select>
      );
    default:
      throw new Error();
  }
};

export default function Input(props) {
  return (
    <Box pl={props.pl} pr={props.pr} mb={'1rem'}>
      <Label htmlFor={props.id}>{props.title}</Label>
      {typeSelector(props, props.value, props.setValue)}
    </Box>
  );
}
