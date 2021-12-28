import React from 'react';
import styled from 'styled-components';
import FooterSectionItem from './FooterSectionItem';

const Section = styled.section`
  margin-top: 4rem;
`;

const P = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const FooterSection = (props) => {
  return (
    <Section key={props.title} className={props.className}>
      <P>{props.title}</P>
      {props.items &&
        props.items.map((item) => (
          <FooterSectionItem href={item.itemHref}>
            {item.itemName}
          </FooterSectionItem>
        ))}
      {props.children}
    </Section>
  );
};

export default FooterSection;
