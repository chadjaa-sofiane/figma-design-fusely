import styled from "styled-components";

export const ContactBannerWrapper = styled.div`
  width: 56.25em;
  max-width: 100%;
  margin: 0 auto;
  padding: 5.25em;
  background-color: ${({ theme }) => theme.colors.neutral[500]};
  color: #fff;
  @media (max-width: ${({ theme }) => theme.breakPoints["tablet"]}) {
    padding: 1.25em;
  }
`;

export const ContactBannerContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 1.875em;
  h3 {
    width: 7em;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints["tablet"]}) {
    flex-direction: column;
    h3 {
      width: 100%;
      text-align: center;
      padding-bottom: 0.5em;
    }
  }
`;
