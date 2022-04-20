import React from "react";
import { MainSection, SectionContent, SectionImageField } from "./style";
import SectionTwoIllustration from "../../assets/svgs/section_two_illustration.svg";
import { Title2, Paragraphe, Link } from "../../components/core";

const SectionTwo = () => {
  return (
    <MainSection>
      <SectionContent>
        <Title2> Creative Solutions </Title2>
        <Paragraphe>
          Creativity is our second name. We&spos;re full of inventive ideas and
          we&apos;re happy to present them to you.
        </Paragraphe>
        <Link href="#"> Learn More </Link>
      </SectionContent>
      <SectionImageField>
        <SectionTwoIllustration />
      </SectionImageField>
    </MainSection>
  );
};

export default SectionTwo;
