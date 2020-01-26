import React from "react";
import styled from "styled-components";
import BurgerMenu from "../components/BurgerMenu";
import HomeLink from "../components/HomeLink";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;
const Name = styled.h3`
  color: white;
`;
const HeaderContainer = () => {
  return (
    <Header>
      <HomeLink>
        <Name>Jongkeun</Name>
      </HomeLink>
      <BurgerMenu />
    </Header>
  );
};

export default HeaderContainer;
