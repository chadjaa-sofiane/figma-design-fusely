import styled from "styled-components";

export const Link = styled.a`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes["body_md"]};
  font-weight: 600;
  color: ${({ theme }) => theme.link.color};
  transition: color 600ms;
  transition-timing-function: cubic-bezier(0.001, 0.001, 0.999, 1);
`;
