import styled from "styled-components";

export const BlogCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  a {
    display: block;
    margin-top: 1.625em;
  }
`;

export const BlogImageField = styled.div`
  width: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const BlogCardContent = styled.div`
  width: 100%;
  margin-top: 1.625em;
  min-height: 4.875em;
  p {
    margin-top: 0.375em;
    font-weight: 400;
  }
`;

export const BlogCardTitle = styled.p`
  font-size: 1.375rem;
  font-weight: 600;
`;
