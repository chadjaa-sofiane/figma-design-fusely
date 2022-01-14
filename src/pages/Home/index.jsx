import React from "react";
import Partners from "../../components/Partners";
import Hero from "./Hero";
import SectionOne from "./section_one";
import SectionThree from "./section_three";
import SectionTwo from "./section_two";
import Pricing from "./Pricing";
import Blogs from "./Blogs";
import ContactBanner from "./ContactBanner";
import { MainWrapper } from "./style";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <MainWrapper>
        <Partners />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Pricing />
        <Blogs />
        <ContactBanner />
        <Footer />
        <br />
      </MainWrapper>
    </>
  );
};

export default Home;
