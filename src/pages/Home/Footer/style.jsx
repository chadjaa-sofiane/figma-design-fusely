import styled from "styled-components";

export const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 6.03em;
`;

export const FooterContent = styled.div`
  width: 56.25em;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 6.033em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.breakPoints["mobile"]}) {
    column-gap: 5.875em;
    justify-content: unset;
    row-gap: 3.75em;
  }
`;

export const SocialMediaLinks = styled.span`
  display: block;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FooterBottom = styled.div`
  width: 100%;
  margin-top: 4.8425em;
  display: flex;
  justify-content: space-between;
  svg {
    width: 3.75em;
  }
`;

export const FooterBackground = styled.div`
  position: absolute;
  inset: 0;
  height: calc(100% - 10em);
  transform: translateY(10em);
  z-index: -1;
`;
