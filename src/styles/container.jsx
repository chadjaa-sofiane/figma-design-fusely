import styled from "styled-components";

const Container = styled.div`
  width: 90em;
  max-width: 100%;
  margin: 2.5em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8.125em;
  @media (max-width: ${({ theme }) => theme.breakPoints["tablet"]}) {
    padding: 0 2.5em;
  }
`;

export default Container;
