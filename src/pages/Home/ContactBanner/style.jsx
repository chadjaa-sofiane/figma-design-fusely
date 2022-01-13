import styled from "styled-components";

export const ContactBannerWrapper = styled.div`
  width: 56.25em;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 13.75em;
  padding: 5.25em;
  background-color: ${({ theme }) => theme.colors.neutral[500]};
  color: #fff;
`;

export const ContactBannerContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  h3 {
    width: 7em;
  }
`;
