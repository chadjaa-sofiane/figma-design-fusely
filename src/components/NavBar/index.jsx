import React from "react";
import Logo from "../../assets/svgs/Logo.svg";
import Links from "./Links";
import Buttons from "./Buttons";
import MenuBurgerIcon from "../../assets/svgs/burger_icon.svg";
import MenuCloseIcon from "../../assets/svgs/close_icon.svg";
import {
  NavBarWrapper,
  MenuBarBtn,
  NavBarContent,
  MenuBtnInput,
  NavBarHeader
} from "./style";

const Header = () => {
  return (
    <>
      <MenuBtnInput type="checkbox" id="menu_btn" hidden />
      <NavBarWrapper>
        <NavBarHeader>
          <Logo />
          <MenuBarBtn htmlFor="menu_btn">
            <MenuBurgerIcon />
            <MenuCloseIcon />
          </MenuBarBtn>
        </NavBarHeader>
        <NavBarContent>
          <Links />
          <Buttons />
        </NavBarContent>
      </NavBarWrapper>
    </>
  );
};

export default Header;
