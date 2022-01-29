import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import ChangeTheme from "./components/changeTheme";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { themes, GlobalStyle, Container } from "./styles";

export const AppContext = createContext({});

const App = () => {
  const [theme, setTheme] = useState("dark");

  // a function toggle between light and dark theme and return the value of the theme
  const switchThemes = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <AppContext.Provider value={{ switchThemes, theme }}>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <NavBar />
        <Container>
          <Home />
        </Container>
        <ChangeTheme />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
