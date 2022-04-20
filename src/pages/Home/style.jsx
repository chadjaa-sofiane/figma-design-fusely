import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 100%;
  margin-top: 7.5em;
`;

export const MainSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 13.75em;
  column-gap: 3em;
  row-gap: 3.125em;
  svg {
    flex: 1 1 25em;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints["tablet"]}) {
    margin-top: 8.75em;
    svg {
      order: 2;
    }
  }
`;
export const SectionContent = styled.div`
  flex: 1 1 25em;
  max-width: 100%;
  a {
    display: block;
  }
  p,
  a {
    margin-top: 1.5em;
  }
`;

export const SectionImageField = styled.div`
  max-width: 100%;
  svg {
    max-width: 100%;
  }
`;
