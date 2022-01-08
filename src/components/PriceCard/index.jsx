import React from "react";
import { Button, Paragraphe } from "../core";
import { PriceCardContainer } from "./style";
import Price from "./Price";
import Offers from "./Offers";

// eslint-disable-next-line react/prop-types
const PriceCard = ({ variant, title, price, offers }) => {
  return (
    <PriceCardContainer variant={variant}>
      <Paragraphe type="body-md"> {title} </Paragraphe>
      <Price price={price} variant={variant} />
      <Offers offers={offers} />
      <Button variant="outlined"> Get Started </Button>
    </PriceCardContainer>
  );
};

export default PriceCard;
