import React from "react";
import { Title1, Paragraphe, Button } from "../../../components/core";
import { HeroField, HeroContent } from "./style";
import HeroImage from "../../../assets/svgs/Hero_Image.svg";

const Hero = () => {
  return (
    <HeroField>
      <HeroContent>
        <Title1>Let&apos;s get fusely together</Title1>
        <Paragraphe type="body_lg">
          Outcome-centered product that reduce churn, optimize pricing, and grow
          your subscription business end-to-end.
        </Paragraphe>
        <Button color="primary"> Get Started </Button>
      </HeroContent>
      <HeroImage />
    </HeroField>
  );
};

export default Hero;
