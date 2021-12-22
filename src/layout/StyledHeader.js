import styled from 'styled-components';
import Hamburger from '../components/Hamburger';
import Logo from '../components/Logo';
import Navbar from '../components/navbar/Navbar';

const Header = styled.header`
  height: 56px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1440px;
  left: 50%;
  transform: translateX(-50%);
`;

const TopLogo = styled(Logo)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const StyledHeader = () => {
  return (
    <Header>
      <Hamburger />
      <Navbar />
      <TopLogo />
    </Header>
  );
};

export default StyledHeader;
