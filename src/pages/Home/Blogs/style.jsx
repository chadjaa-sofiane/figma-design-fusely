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
  @media (max-width: ${({theme}) => theme.breakPoints["mobile"]} ){
    h2{
      font-size: ${({theme}) => theme.fontSizes["xs"]};
    }
  }
`;

export const BlogsContent = styled.div`
  width: 100%;
  margin-top: 5.625em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(20em, 100%), 1fr));
  grid-auto-rows: 1fr;
  column-gap: 2.8125em;
  row-gap: 2.8125em;
`;
