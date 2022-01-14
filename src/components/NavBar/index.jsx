import React from "react";
import Logo from "../../assets/svgs/Logo.svg";
import Links from "./Links";
import Buttons from "./Buttons";
import MenuBurgerIcon from "../../assets/svgs/burger_icon.svg";
import {
  NavBarWrapper,
  MenuBarBtn,
  NavBarContent,
  MenuBtnInput,
} from "./style";

const Header = () => {
  return (
    <NavBarWrapper>
      <MenuBtnInput type="checkbox" id="menu_btn" hidden />
      <Logo />
      <NavBarContent>
        <Links />
        <Buttons />
      </NavBarContent>
      <MenuBarBtn htmlFor="menu_btn">
        <MenuBurgerIcon />
      </MenuBarBtn>
    </NavBarWrapper>
  );
};

export default Header;
