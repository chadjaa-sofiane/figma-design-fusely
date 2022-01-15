import styled from "styled-components";

export const BlogCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  flex-wrap: wrap;
  a {
    margin-top: 1.625em;
    display: block;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints["tablet"]}) {
    flex-direction: row;
    column-gap: 1.6875em;
  }
`;

export const BlogImageField = styled.div`
  width: 22.6875em;
  max-width: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const BlogCardContent = styled.div`
  width: 22.6875em;
  max-width: 100%;
  flex: 1;
  margin-top: 1.625em;
  display: flex;
  flex-direction: column;
  p:nth-of-type(2) {
    flex: 1;
    margin-top: 0.375em;
    line-height: 1.5em;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints["tablet"]}) {
    margin-top: 0;
    padding: 2.125em 0;
  }
`;

export const BlogCardTitle = styled.p`
  font-size: 1.375rem;
  font-weight: 600;
`;
