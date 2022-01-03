import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import HeroImage from "./assets/svgs/Hero_image.svg";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <HeroImage />
    </>
  );
};

export default App;
