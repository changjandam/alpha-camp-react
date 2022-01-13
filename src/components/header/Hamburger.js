import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: inline-block;
  width: 1.5rem;
  margin-left: 1rem;

  @media screen and (min-width: 780px) {
    display: none;
  }
`;

const Label = styled.label``;
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

  &:before {
    width: 20px;
    bottom: 7px;
  }

  &:after {
    width: 9px;
    top: 7px;
  }

  @media screen and (min-width: 780px) {
    display: none;
  }
`;

const Input = styled.input`
  display: none;

  &:checked ~ div {
    @media screen and (max-width: 780px) {
      transform: scaleY(1);
      transition: all 0.5s ease-out;
    }
  }

  &:checked ~ div {
    @media screen and (max-width: 780px) {
      ul,
      div {
        display: flex;
        opacity: 1;
        transition: all 0.2s linear 0.6s;
      }

      @media screen and (min-width: 780px) {
        all: unset;
      }
    }
  }
`;

const Hamburger = () => {
  return (
    <React.Fragment>
      <Div>
        <Label htmlFor='hamburger'>
          <Span></Span>
        </Label>
      </Div>
      <Input type='checkbox' id='hamburger' />
    </React.Fragment>
  );
};

export default Hamburger;
