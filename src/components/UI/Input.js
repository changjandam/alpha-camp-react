import React from 'react';
import styled from 'styled-components';
import { Select, Input as ChakraInput, Box } from '@chakra-ui/react';
import { IoMdArrowDropdown } from 'react-icons/io';

const Label = styled.label`
  color: #808080;
  font-size: 12px;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const typeSelector = (props) => {
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
          value={props.value}
          onChange={(e) => {
            props.dispatch({ [props.id]: e.target.value });
          }}
          pattern={props.pattern}
        />
      );
    case 'select':
      return (
        <Select
          icon={<IoMdArrowDropdown />}
          focusBorderColor='#f67599'
          id={props.id}
          w={props.w}
          value={props.value}
          onChange={(e) => {
            props.dispatch({ [props.id]: e.target.value });
          }}
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
  }
};

export default function Input(props) {
  return (
    <Box pl={props.pl} pr={props.pr} mb={'1rem'} gridArea={props.gridArea}>
      <Label htmlFor={props.id}>{props.title}</Label>
      {typeSelector(props)}
    </Box>
  );
}
