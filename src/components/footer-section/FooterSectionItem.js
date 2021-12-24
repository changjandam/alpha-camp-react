import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  &,
  &:active {
    text-decoration: none;
    color: #808080;
  }

  display: block;
  margin-bottom: 0.5rem;
`;

const FooterSectionItem = (props) => {
  return (
    <A className={props.className} href={props.href}>
      {props.children}
    </A>
  );
};

export default FooterSectionItem;
