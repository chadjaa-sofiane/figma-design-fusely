import styled from "styled-components";

const cardThemeProps = ({ variant = "none", theme }) => {
  variant = ["none", "contained"].includes(variant) ? variant : "none";
  return {
    backgroundColor: theme.card[variant].backgroundColor,
    color: theme.card[variant].color,
  };
};

export const Card = styled.div`
  background-color: ${(props) => cardThemeProps(props).backgroundColor};
  color: ${(props) => cardThemeProps(props).color};
  transition: background-color 600ms;
  transition-timing-function: cubic-bezier(0.001, 0.001, 0.999, 1);
`;
