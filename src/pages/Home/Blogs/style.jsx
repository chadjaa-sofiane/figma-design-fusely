import styled from "styled-components";

export const BlogsWrapper = styled.div`
  width: 100%;
  margin-top: 13.75em;
`;

export const BlogsHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BlogsContent = styled.div`
  width: 100%;
  margin-top: 5.625em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  column-gap: 2.8125em;
`;
