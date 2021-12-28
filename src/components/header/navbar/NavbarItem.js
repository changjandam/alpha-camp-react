import React from 'react';
import styled from 'styled-components';


const A = styled.a`
  text-decoration: none;
  &,
  &:active {
    color: black;
  }
`


const Li = styled.li`
  list-style-type: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.5rem;
  width: 95%;
  border-bottom: 1px solid #dcdcdc;

  @media screen and (min-width: 768px) {
    all: unset;
    /* margin: 5px; */
  }

  /* @media screen and (min-width: 950px) {
    margin: 1rem;
  } */
`;

const NavbarItem = (props) => {
  return (
    <Li className={props.className} key={props.linkName}>
      <A href={props.linkHref}>{props.linkName}</A>
    </Li>
  )
}

export default NavbarItem;