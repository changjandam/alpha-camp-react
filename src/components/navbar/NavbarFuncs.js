import React from 'react';
import styled from 'styled-components';
import NavbarFunc from './NavbarFunc';
import { CartIcon, DarkModeIcon, SearchIcon } from '../../svg/NavbarIcon';

const funcs = [
  { name:'search', icon: SearchIcon(), handler: () => console.log('search icon clicked') },
  { name: 'cart',icon: CartIcon(), handler: () => console.log('cart icon clicked') },
  { name:'dark mode', icon: DarkModeIcon(), handler: () => console.log('dark mode icon clicked') },
];

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.5rem;
`;

const NavbarFuncs = () => {
  return (
    <Div>
      {funcs.map((item) => (
        <NavbarFunc icon={item.icon} handler={item.handler} key={item.name} />
      ))}
    </Div>
  );
};

export default NavbarFuncs;
