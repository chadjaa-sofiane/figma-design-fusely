import styled from "styled-components";
import { Card } from "../core/Card";

export const PriceCardContainer = styled(Card)`
  padding: ${({ variant }) => (variant === "contained" ? "4.375em" : "2.875em")} 0;
  text-align: center;
  p {
    color: inherit;
  }
  button {
    margin-top: 2.5em;
  }
`;

export const PriceText = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes["lg"]};
  margin-top: 0.875em;
  color: ${({ theme, variant }) =>
    variant === "none" ?  theme.colors.neutral[500] : theme.colors.neutral[100]};
    
  span {
    font-size: ${({ theme }) => theme.fontSizes["body_sd"]};
    font-weight: lighter;
  }
`;

export const OffersContainer = styled.ul`
  list-style: none;
  margin-top: 2.5em;
  li {
    color: inherit;
    font-weight: lighter;
    margin-top: 0.875em;
  }
`;
