import React from "react";
import { PartnersWrapper } from "./style";
import BinatorLogo from "../../assets/svgs/binator_logo.svg";
import BuyomeLogo from "../../assets/svgs/buyme_logo.svg";
import LoogipsumLogo from "../../assets/svgs/loogipsum_logo.svg";
import UmbrellaLogo from "../../assets/svgs/umbrella_logo.svg";
import SquareLogo from "../../assets/svgs/square_logo.svg";

const Partners = () => {
  return (
    <PartnersWrapper>
      <BinatorLogo />
      <BuyomeLogo />
      <LoogipsumLogo />
      <UmbrellaLogo />
      <SquareLogo />
    </PartnersWrapper>
  );
};

export default Partners;
