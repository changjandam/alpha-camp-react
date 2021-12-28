import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  max-width: 1080px;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const CenterDiv = ({ className, children }) => {
  return <Div className={className}>{children}</Div>;
};

export default CenterDiv;
