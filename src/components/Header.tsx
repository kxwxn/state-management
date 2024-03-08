import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const NavLink = styled(Link)`
  padding: 5px;
`;

const Header = () => {
  return (
    <Wrapper>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/redux">REDUX</NavLink>
      <NavLink to="/recoil">RECOIL</NavLink>
      <NavLink to="/jotai">JOTAI</NavLink>
      <NavLink to="/zustand">ZUSTAND</NavLink>
    </Wrapper>
  );
};

export default Header;
