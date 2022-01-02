import React from 'react';
import styled from 'styled-components';
import IconLink from '../../IconLink';

const MediaIcon = styled(IconLink)`
  margin-right: 18px;
`;

const Div = styled.div``;

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
