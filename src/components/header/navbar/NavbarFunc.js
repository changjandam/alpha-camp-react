import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background-color: white;
  margin: 1.25rem;
`


const NavbarFunc = (props) => {
  return (
    <Button onClick={props.handler} key={props.name}>
      {props.icon}
    </Button>
  )
}

export default NavbarFunc;