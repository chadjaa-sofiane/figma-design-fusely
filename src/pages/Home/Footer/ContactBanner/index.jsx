import React from "react";
import { Title3, Button } from "../../../../components/core";
import { ContactBannerWrapper, ContactBannerContent } from "./style";

const ContactBanner = () => {
  return (
    <ContactBannerWrapper>
      <ContactBannerContent>
        <Title3>Interested in getting fusely?</Title3>
        <Button size="large">Let&apos;s talk</Button>
      </ContactBannerContent>
    </ContactBannerWrapper>
  );
};

export default ContactBanner;
