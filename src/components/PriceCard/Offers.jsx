import React from "react";
import { OffersContainer } from "./style";
// eslint-disable-next-line react/prop-types
const Offers = ({ offers = [] }) => {
  return (
    <OffersContainer>
      {offers.map((offer, index) => (
        <li key={index}> {offer} </li>
      ))}
    </OffersContainer>
  );
};

export default Offers;
