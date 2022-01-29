import styled from "styled-components";

export const Link = styled.a`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes["body_md"]};
  font-weight: 600;
  color: ${({ theme }) => theme.link.color};
`;
