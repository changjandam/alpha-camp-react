import React from 'react';
import styled from 'styled-components';
import IconLink from '../../IconLink';

const MediaIcon = styled(IconLink)`

`;

const Div = styled.div`
  display: grid;
  grid-template-columns: 24px 24px 24px;
  gap: 18px;
`;

export default function FooterSectionSocialMedia(props) {
  return (
    <Div>
      {props.media
        ? props.media.map((item) => (
            <MediaIcon href={item.href} key={item.id}>{item.icon}</MediaIcon>
          ))
        : ''}
    </Div>
  );
}
