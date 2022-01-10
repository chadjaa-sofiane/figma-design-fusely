import styled from "styled-components";

const buttonThemeProps = ({
  theme,
  size = "medium",
  variant = "contained",
}) => {
  variant = ["contained", "outlined"].includes(variant) ? variant : "contained";
  size = ["medium", "large"].includes(size) ? size : "meduim";
  return {
    color: theme.button[variant].color,
    backgroundColor: theme.button[variant].backgroundColor,
    borderColor: theme.button[variant].borderColor,
    fontSize: size === "medium" ? "0.875rem" : "1em",
    padding: size === "medium" ? "1em 1.875em" : "1em 2.9375em",
  };
};

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: ${(props) => buttonThemeProps(props).padding};
  font-weight: bold;
  font-size: ${(props) => buttonThemeProps(props).fontSize};
  background-color: ${(props) => buttonThemeProps(props).backgroundColor};
  color: ${(props) => buttonThemeProps(props).color};
  border: ${(props) => buttonThemeProps(props).borderColor} 1px solid;
  border-radius: 0.125em;
  cursor: pointer;
`;

export default Button;
