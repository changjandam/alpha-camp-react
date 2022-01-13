import React from 'react';
import styled from 'styled-components';
import NavbarUl from './NavbarUl';
import NavbarFuncs from './NavbarFuncs';

const Div = styled.div`
  position: absolute;
  width: 100vw;
  top: 100%;
  transform-origin: top;
  transform: scaleY(0);
  box-shadow: 0 2px 5px #cdcdcd;
  background: white;
  ul,
  div {
    opacity: 0;
    @media screen and (min-width: 780px) {
      opacity: 1;
    }
  }

  @media screen and (min-width: 780px) {
    all: unset;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }
`;

const Navbar = () => {
  return (
    <Div>
      <NavbarUl />
      <NavbarFuncs />
    </Div>
  );
};

export default Navbar;
