import React from "react";
import { Paragraphe, Link } from "../core";
import {
  BlogCardWrapper,
  BlogImageField,
  BlogCardContent,
  BlogCardTitle,
} from "./style";

// eslint-disable-next-line react/prop-types
const BlogCard = ({ src = "", title, excerpt }) => {
  return (
    <BlogCardWrapper>
      <BlogImageField>
        <img src={src} />
      </BlogImageField>
      <BlogCardContent>
        <BlogCardTitle>{title}</BlogCardTitle>
        <Paragraphe type="body_sm"> {excerpt} </Paragraphe>
        <Link href="#"> Read more </Link>
      </BlogCardContent>
    </BlogCardWrapper>
  );
};

export default BlogCard;
