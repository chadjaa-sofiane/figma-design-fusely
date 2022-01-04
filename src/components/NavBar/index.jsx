import React from "react";
import { NavBarWrapper } from "./style";
import Logo from "../../assets/svgs/Logo.svg";
import Links from "./Links";
import Buttons from "./Buttons";

const Header = () => {
  return (
    <NavBarWrapper>
      <Logo />
      <Links />
      <Buttons />
    </NavBarWrapper>
  );
};

export default Header;
