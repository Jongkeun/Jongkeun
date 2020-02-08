import React from "react";
import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";
import HomeLink from "./HomeLink";

const Conatiner = styled.header`
  display: flex;
  justify-content: space-between;
  height: 10vh;
`;
const Name = styled.h3`
  color: white;
  @import url("https://fonts.googleapis.com/css?family=Do+Hyeon");
  font-family: "Do Hyeon", sans-serif;
  margin-left: 2em;
`;
const Header = () => {
  return (
    <Conatiner>
      <HomeLink>
        <Name>JONGKEUN</Name>
      </HomeLink>
      <BurgerMenu />
    </Conatiner>
  );
};

export default Header;
