import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import GlobalStyle from "./styles/global";
import Container from "./styles/container";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Container>
        <Home />
      </Container>
    </>
  );
};

export default App;
