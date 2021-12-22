import React from 'react';
import styled from 'styled-components';
import NavbarUl from './NavbarUl';
import NavbarFuncs from './NavbarFuncs';

const Div = styled.div`
  position: absolute;
  width: 100vw;
  top: 100%;
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
