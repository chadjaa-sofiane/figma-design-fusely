import styled from "styled-components";

export const PartnersWrapper = styled.div`
  width: 56.25em;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.breakPoints["mobile"]}) {
    justify-content: center;
    column-gap: 1.5em;
    row-gap: 2em;
  }
`;