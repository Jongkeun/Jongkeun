import React from "react";
import styled from "styled-components";
import BurgerMenu from "../components/BurgerMenu";
import HomeLink from "../components/HomeLink";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 10vh;
`;
const Name = styled.h3`
  color: white;
  @import url("https://fonts.googleapis.com/css?family=Do+Hyeon");
  font-family: "Do Hyeon", sans-serif;
`;
const HeaderContainer = () => {
  return (
    <Header>
      <HomeLink>
        <Name>JONGKEUN</Name>
      </HomeLink>
      <BurgerMenu />
    </Header>
  );
};

export default HeaderContainer;
