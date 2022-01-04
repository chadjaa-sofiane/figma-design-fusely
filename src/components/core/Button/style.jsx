import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 1em 1.875em;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${({ color, theme }) =>
    color == "primary" ? theme.colors.primary[400] : "#FFF"};
  color: ${({ color, theme }) =>
    color == "primary" ? "#FFF" : theme.colors.primary[400]};
  border-radius: 0.125em;
  border: ${({ theme }) => theme.colors.primary[400]} 1px solid;
`;
