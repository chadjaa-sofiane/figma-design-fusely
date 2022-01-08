import React from "react";
import BlogCard from "../../../components/BlogCard";
import { Title2, Button } from "../../../components/core";
import BlogOneImage from "../../../assets/images/blog_1.png";
import BlogTwoImage from "../../../assets/images/blog_2.png";
import BlogThreeImage from "../../../assets/images/blog_3.png";
import { BlogsWrapper, BlogsHead, BlogsContent } from "./style";

const Blogs = () => {
  return (
    <BlogsWrapper>
      <BlogsHead>
        <Title2>From Our Blog</Title2>
        <Button variant="outlined">View All</Button>
      </BlogsHead>
      <BlogsContent>
        <BlogCard
          src={BlogOneImage}
          title="What's Fusely?"
          excerpt={
            "A brand new company, created for everyone. This article will help you understand what \"fusely\" stands for."
          }
        />
        <BlogCard
          src={BlogTwoImage}
          title="Introducing Fusely Engage"
          excerpt="We&apos;re happy to announce the Fusely Engage. The first growth automation platform designed for the digital interactions."
        />
        <BlogCard
          src={BlogThreeImage}
          title="Premium vs Enterprise plan"
          excerpt="Let&apos;s compare our most popular plans: Premium and Enterprise. This article will help you decide which one will be better for your needs."
        />
      </BlogsContent>
    </BlogsWrapper>
  );
};

export default Blogs;
