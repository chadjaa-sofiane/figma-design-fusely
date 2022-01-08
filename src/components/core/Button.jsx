import styled from "styled-components";

const buttonThemeProps = ({ theme, variant = "contained" }) => {
  variant = ["contained", "outlined"].includes(variant) ? variant : "contained";
  return {
    color: theme.button[variant].color,
    backgroundColor: theme.button[variant].backgroundColor,
    borderColor: theme.button[variant].borderColor,
  };
};

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 1em 1.875em;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${(props) => buttonThemeProps(props).backgroundColor};
  color: ${(props) => buttonThemeProps(props).color};
  border: ${(props) => buttonThemeProps(props).borderColor} 1px solid;
  border-radius: 0.125em;
  cursor: pointer;
`;

export default Button;
