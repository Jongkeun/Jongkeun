import React from "react";
import styled from "styled-components";
import BurgerMenu from "../components/BurgerMenu";
import HomeLink from "../components/HomeLink";

const HeaderContainer = styled.header`
  display: flex;
`;
const Name = styled.h3`
  color: white;
`;
const Header = () => {
  return (
    <HeaderContainer>
      <HomeLink>
        <Name>Jongkeun</Name>
      </HomeLink>
      <BurgerMenu />
    </HeaderContainer>
  );
};

export default Header;
