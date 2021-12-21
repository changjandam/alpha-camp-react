import styled from 'styled-components';
import Hamburger from '../components/Hamburger';

const Header = styled.header`
  height: 56px;
  display: flex;
  align-items: center;
`;

const StyledHeader = () => {
  return (
    <Header>
      <Hamburger />
    </Header>
  );
};

export default StyledHeader;
