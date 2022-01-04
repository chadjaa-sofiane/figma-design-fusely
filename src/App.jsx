import React from "react";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { theme, GlobalStyle, Container } from "./styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  );
};

export default App;
