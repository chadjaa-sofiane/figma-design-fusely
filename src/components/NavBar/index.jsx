import React from "react";
import { NavBarWrapper } from "./style";
import Logo from "../../assets/svgs/Logo.svg";
import Links from "./Links";

const Header = () => {
  return (
    <NavBarWrapper>
      <Logo />
      <Links />
    </NavBarWrapper>
  );
};

export default Header;
