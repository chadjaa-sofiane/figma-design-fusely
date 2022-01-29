import React, { useContext } from "react";
import { ChangeThemeContainer } from "./style";
import SunIcon from "../../assets/svgs/sun.svg";
import MoonIcon from "../../assets/svgs/moon.svg";
import { AppContext } from "../../App";

const ChangeTheme = () => {
  const { switchThemes, theme } = useContext(AppContext);
  return (
    <ChangeThemeContainer onClick={switchThemes}>
      {theme === "light" && <SunIcon />}
      {theme === "dark" && <MoonIcon />}
    </ChangeThemeContainer>
  );
};

export default ChangeTheme;
