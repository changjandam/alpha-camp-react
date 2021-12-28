import styled from 'styled-components';
import Hamburger from './Hamburger';
import Icon from '../Icon';
import Logosvg from '../../svg/LogoSvg'
import Navbar from '../header/navbar/Navbar';

const StyledHeader = styled.header`
  height: 56px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1080px;
  left: 50%;
  transform: translateX(-50%);
`;

const TopLogo = styled(Icon)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const Header = () => {
  return (
    <StyledHeader>
      <Hamburger />
      <Navbar />
      <TopLogo>
        <Logosvg />
      </TopLogo>
    </StyledHeader>
  );
};

export default Header;
