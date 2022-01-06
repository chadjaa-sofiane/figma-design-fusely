import React from "react";
import { MainSection, SectionContent } from "./style";
import SectionOneIllustration from "../../assets/svgs/section_one_illustration.svg";
import { Title2, Paragraphe } from "../../components/core";

const SectionOne = () => {
  return (
    <MainSection>
      <SectionOneIllustration />
      <SectionContent>
        <Title2> Detailed Examivnation </Title2>
        <Paragraphe>
          A daily dataset to keep you up to date on subscription market trends
          and what&apos;s happening in your vertical.
        </Paragraphe>
        <a href="#"> Learn More </a>
      </SectionContent>
    </MainSection>
  );
};

export default SectionOne;
