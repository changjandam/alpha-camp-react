import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: inline-block;
  width: 1.5rem;
  margin-left: 1rem;
`;

const Label = styled.label`
`;
const Span = styled.span`
  &,
  &:before,
  &:after {
    background-color: black;
    display: block;
    height: 2.5px;
  }

  & {
    position: relative;
    width: 15px;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
  }

  &:before{
    width: 20px;
    bottom: 7px;
  }

  &:after {
    width: 9px;
    top: 7px;
  }
`;

const Hamburger = () => {
  return (
    <Div>
      <input type='checkbox' id='hamburger' hidden />
      <Label htmlFor='hamburger'>
        <Span></Span>
      </Label>
    </Div>
  );
};

export default Hamburger;
