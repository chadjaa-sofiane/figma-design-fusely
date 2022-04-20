import React from "react";
import { MainSection, SectionContent, SectionImageField } from "./style";
import SectionOneIllustration from "../../assets/svgs/section_one_illustration.svg";
import { Title2, Paragraphe, Link } from "../../components/core";

const SectionOne = () => {
  return (
    <MainSection>
      <SectionImageField>
        <SectionOneIllustration />
      </SectionImageField>
      <SectionContent>
        <Title2> Detailed Examivnation </Title2>
        <Paragraphe>
          A daily dataset to keep you up to date on subscription market trends
          and what&apos;s happening in your vertical.
        </Paragraphe>
        <Link href="#"> Learn More </Link>
      </SectionContent>
    </MainSection>
  );
};

export default SectionOne;
