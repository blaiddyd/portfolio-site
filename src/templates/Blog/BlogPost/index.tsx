/** @jsx jsx */
import React from "react";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { css, jsx } from '@emotion/react'

import { BlogPostQuery } from "codegen";

interface BlogPostPageContext {
  pageContext: {
    id: string;
    prismicId: string;
    slug: string;
  }
};

const BlogPost = (props: PageProps<BlogPostQuery, BlogPostPageContext>): JSX.Element => {
  const { prismicBlogPost } = props.data;

  const { title, featuredImage, content, date, category } = prismicBlogPost.data;

  return (
    <div className="blog-post">
      <h1 dangerouslySetInnerHTML={{ __html: title.text }} />
      <GatsbyImage image={featuredImage.gatsbyImageData} alt="featured image" />
      <article dangerouslySetInnerHTML={{ __html: content.html }} /> 
    </div>
  );
};


export const query = graphql`
  query BlogPost($id: String!) {
    prismicBlogPost (id: { eq: $id }) {
      data {
        title: blog_title {
          text
        }
        featuredImage: featured_image {
          gatsbyImageData(placeholder: BLURRED, height: 450, width: 450)
        }
        content: post_content {
          html
        }
        date(locale: "en-AU")
        category: blog_category {
          document {
            ... on PrismicBlogCategory {
              id
              prismicId
              data {
                name: category_name
              }
              uid
            }
          }
        }
      }
      prismicId
      lastUpdated: last_publication_date(locale: "en-AU")
      uid
      url
      type
      id
    }
  }`;

export default BlogPost;