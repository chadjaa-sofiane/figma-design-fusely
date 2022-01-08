import React from "react";
import { MainSection, SectionContent } from "./style";
import SectionThreeIllustration from "../../assets/svgs/section_three_illustration.svg";
import { Title2, Paragraphe, Link } from "../../components/core";

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
        <Link href="#">Learn More</Link>
      </SectionContent>
    </MainSection>
  );
};

export default SectionThree;
