import React from "react";
import { MainSection, SectionContent } from "./style";
import SectionThreeIllustration from "../../assets/svgs/section_three_illustration.svg";
import { Title2, Paragraphe } from "../../components/core";

const SectionThree = () => {
  return (
    <MainSection>
      <SectionThreeIllustration />
      <SectionContent>
        <Title2>Professional Team</Title2>
        <Paragraphe>
          Well, obviously, we&pose;re professionals. Don&pose;t hesitate - get
          to know us better.
        </Paragraphe>
        <a href="#">Learn More</a>
      </SectionContent>
    </MainSection>
  );
};

export default SectionThree;
