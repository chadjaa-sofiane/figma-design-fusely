import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 1em 1.875em;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${({ color, theme }) =>
    color == "primary" ? theme.colors.primary[500] : "FFF"};
  color: ${({ color, theme }) =>
    color == "primary" ? "FFF" : theme.colors.primary[500]};
`;
