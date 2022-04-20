import React, { useRef, useEffect } from "react";
import { Title1, Paragraphe, Button } from "../../../components/core";
import { HeroField, HeroContent, HeroImageField } from "./style";
import HeroImage from "../../../assets/svgs/hero_image.svg";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTrigger);

const Hero = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(contentRef.current, {
      scrollTrigger: contentRef.current,
      x: -150,
      opacity: 0,
      duration: 1,
    });
    gsap.from(imageRef.current, {
      scrollTrigger: imageRef.current,
      x: 150,
      opacity: 0,
      duration: 1,
    });
  }, []);
  return (
    <HeroField>
      <HeroContent ref={contentRef}>
        <Title1>Let&apos;s get fusely together</Title1>
        <Paragraphe type="body_lg">
          Outcome-centered product that reduce churn, optimize pricing, and grow
          your subscription business end-to-end.
        </Paragraphe>
        <Button color="primary"> Get Started </Button>
      </HeroContent>
      <HeroImageField ref={imageRef}>
        <HeroImage />
      </HeroImageField>
    </HeroField>
  );
};

export default Hero;
