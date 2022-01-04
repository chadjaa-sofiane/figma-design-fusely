import React from "react";
import { StyledButton } from "./style";

// eslint-disable-next-line react/prop-types
const Button = ({ children, color }) => {
  return <StyledButton color={color}> {children} </StyledButton>;
};

export default Button;
