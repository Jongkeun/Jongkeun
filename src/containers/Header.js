import React from "react";
import BurgerMenu from "../components/BurgerMenu";
import HomeLink from "../components/HomeLink";

const Header = () => {
  return (
    <header>
      <HomeLink>Jongkeun</HomeLink>
      <BurgerMenu />
    </header>
  );
};

export default Header;
