import React, { useContext } from "react";
import { ChangeThemeWrapper, ChangeThemeContainer, ThemeCircle } from "./style";
import SunIcon from "../../assets/svgs/sun.svg";
import MoonIcon from "../../assets/svgs/moon.svg";
import { AppContext } from "../../App";
import { createPortal } from "react-dom";

const ChangeTheme = () => {
  const { switchThemes, theme } = useContext(AppContext);

  return (
    <ChangeThemeWrapper>
      <ChangeThemIcons theme={theme} switchThemes={switchThemes} />
      <ThemeCircle themeType={theme} />
    </ChangeThemeWrapper>
  );
};

const ChangeThemIcons = ({ theme, switchThemes }) => {
  return createPortal(
    <ChangeThemeContainer onClick={switchThemes}>
      {theme === "light" && <SunIcon />}
      {theme === "dark" && <MoonIcon />}
    </ChangeThemeContainer>,
    document.getElementById("portal")
  );
};

export default ChangeTheme;
