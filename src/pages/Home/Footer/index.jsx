import React from "react";
import FooterLink from "../../../components/FooterLink";
import { FooterWrapper, FooterContent, SocialMediaLinks } from "./style";
import FacebookIcon from "../../../assets/svgs/facebook.svg";
import TwitterIcon from "../../../assets/svgs/twitter.svg";
import InstragramIcon from "../../../assets/svgs/instagram.svg";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLink
          title="Product"
          links={["How it works", "Features", "Pricing", "FAQ", "Download"]}
        />
        <FooterLink
          title="Company"
          links={[
            "About",
            "Blog",
            "Partnership",
            "Terms of use",
            "Privacy policy",
          ]}
        />
        <FooterLink title="Support" links={["Help center", "Contact us"]} />
        <FooterLink
          title="Get In Touch"
          links={[
            // eslint-disable-next-line react/jsx-key
            <SocialMediaLinks>
              <FacebookIcon />
              <TwitterIcon />
              <InstragramIcon />
            </SocialMediaLinks>,
          ]}
        />
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
