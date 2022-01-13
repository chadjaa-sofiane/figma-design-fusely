import React from "react";
import { ParagrapheTitle, Paragraphe } from "../../components/core";
import { LinksContainer, LinksWrapper } from "./style";

// eslint-disable-next-line react/prop-types
const FooterLink = ({ title, links = [] }) => {
  return (
    <LinksWrapper>
      <ParagrapheTitle>{title}</ParagrapheTitle>
      <LinksContainer>
        {links.map((link, index) => (
          <li key={index}>
            <Paragraphe type="body_sm">{link}</Paragraphe>
          </li>
        ))}
      </LinksContainer>
    </LinksWrapper>
  );
};

export default FooterLink;
