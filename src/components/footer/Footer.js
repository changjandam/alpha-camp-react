import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import CenterDiv from '../layout/CenterDiv';
import FooterSection from './footer-section/FooterSection'

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 284px;
  background-color: #f6f7f8;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Div = styled(CenterDiv)`
  display: flex;
  justify-content: space-between;
`;
const StyledLogo = styled(Logo)`
  align-self: center;
`;
const Section = styled(FooterSection)``;

const footerSections = [
  {
    sectionTitle: '客戶服務',
    sectionItems: [
      {
        itemName: '運送說明',
        itemHref: '#',
      },
      {
        itemName: '退換貨相關',
        itemHref: '#',
      },
      {
        itemName: '付款資訊',
        itemHref: '#',
      },
      {
        itemName: 'FAQ',
        itemHref: '#',
      },
    ],
  },
  {
    sectionTitle: '關於我們',
    sectionItems: [
      {
        itemName: '品牌故事',
        itemHref: '#',
      },
      {
        itemName: '媒體聯繫',
        itemHref: '#',
      },
      {
        itemName: 'Press kit',
        itemHref: '#',
      },
    ],
  },
  {
    sectionTitle: '資訊',
    sectionItems: [
      {
        itemName: '隱私權政策',
        itemHref: '#',
      },
      {
        itemName: 'Cookie',
        itemHref: '#',
      },
      {
        itemName: 'GDPR',
        itemHref: '#',
      },
    ],
  },
];

const followUs = {
  sectionTitle: '追蹤 ALPHA Shop',
  sectionItems: [
    {
      itemName: '+886 022123-45678',
      itemHref: 'tel:+886 022123-45678',
    },
  ],
};
const Footer = () => {
  return (
    <StyledFooter>
      <Div>
        <StyledLogo />
        {footerSections.map((section) => (
          <Section title={section.sectionTitle} items={section.sectionItems} />
        ))}
        <Section
          title={followUs.sectionTitle}
          items={followUs.sectionItems}
        ></Section>
      </Div>
    </StyledFooter>
  );
};

export default Footer;
