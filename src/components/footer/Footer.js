import React from 'react';
import styled from 'styled-components';
import IconLink from '../IconLink';
import CenterDiv from '../layout/CenterDiv';
import LogoSvg from '../../svg/LogoSvg';
import FooterSection from './footer-section/FooterSection'
import {FBIcon, IGIcon, WhatsAppIcon} from '../../svg/SocialMediaIcon'
import FooterSectionSocialMedia from './footer-section/FooterSectionSocialMedia';


const StyledFooter = styled.footer`
  position: relative;
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
const StyledLogo = styled(IconLink)`
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

const socialMedia = [
  { href: '#', icon: FBIcon, id: 1 },
  { href: '#', icon: IGIcon, id: 2 },
  { href: '#', icon: WhatsAppIcon, id: 3 },
];

const Footer = () => {
  return (
    <StyledFooter>
      <Div>
        <StyledLogo>
          <LogoSvg />
        </StyledLogo>
        {footerSections.map((section) => (
          <Section
            title={section.sectionTitle}
            key={section.sectionTitle}
            items={section.sectionItems}
          />
        ))}
        <Section title={followUs.sectionTitle} items={followUs.sectionItems}>
          <FooterSectionSocialMedia media={socialMedia} />
        </Section>
      </Div>
    </StyledFooter>
  );
};

export default Footer;
