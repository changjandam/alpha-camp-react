import React from 'react';
import styled from 'styled-components';
import LogoSvg from '../svg/LogoSvg';


const Logo = ({ className }) => {
  return (
    <a href='#' className={className}>
      <LogoSvg />
    </a>
  );
};

export default Logo;
