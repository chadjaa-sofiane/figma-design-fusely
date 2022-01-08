import styled from "styled-components";

const cardThemeProps = ({ variant = "none", theme }) => {
  variant = ["none", "contained"].includes(variant) ? variant : "none";
  return {
    backgroundColor: variant === "none" ? "#FFF" : theme.colors.primary[400],
    color:
      variant === "none"
        ? theme.colors.neutral[400]
        : theme.colors.neutral[100],
  };
};

export const Card = styled.div`
  background-color: ${(props) => cardThemeProps(props).backgroundColor};
  color: ${(props) => cardThemeProps(props).color};
`;
