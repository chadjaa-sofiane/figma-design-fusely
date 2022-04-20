import styled from "styled-components";

export const HeroField = styled.div`
  width: 100%;
  margin: 2.5em 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 3em;
  svg {
    flex: 1 1 25em;
  }
`;
export const HeroContent = styled.div`
  flex: 0 1 20em;
  max-width: 100%;
  margin: 2.5625em 0;
  @media (max-width: ${({ theme }) => theme.breakPoints["tablet"]}) {
    flex-grow: 1;
  }
  p,
  button {
    margin-top: 1.875em;
  }
`;

export const HeroImageField = styled.div`
  max-width: 100%;
  svg {
    max-width: 100%;
  }
`;
