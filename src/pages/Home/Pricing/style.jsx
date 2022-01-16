import styled from "styled-components";

export const PricingWrapper = styled.div`
  width: 100%;
  margin-top: 13.75em;
  h2 {
    text-align: center;
  }
`;

export const PricesCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(22em, 100%), 1fr));
  margin-top: 5.625em;
`;
