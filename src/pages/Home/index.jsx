import React from "react";
import Partners from "../../components/Partners";
import Hero from "./Hero";
import SectionOne from "./section_one";
import SectionThree from "./section_three";
import SectionTwo from "./section_two";
import { MainWrapper } from "./style";

const Home = () => {
  return (
    <>
      <Hero />
      <MainWrapper>
        <Partners />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </MainWrapper>
    </>
  );
};

export default Home;
