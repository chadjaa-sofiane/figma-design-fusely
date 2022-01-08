import React from "react";
import { PriceText } from "./style";

// eslint-disable-next-line react/prop-types
const Price = ({ price = 0, variant = "none" }) => {
  return (
    <PriceText variant={variant}>
      {price === 0 ? (
        "free"
      ) : (
        <>
          ${price}<span>/month</span>
        </>
      )}
    </PriceText>
  );
};

export default Price;
