/** @jsx jsx */
import React from "react";
import { graphql, PageProps } from "gatsby";
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

import { BlogPostQuery } from "codegen";


interface BlogPostPageContext {
    pageContext: {
        id: string;
        prismicId: string;
        slug: string;
    }
};

export const BlogPost = (props: PageProps<BlogPostQuery, BlogPostPageContext>) => {
    const { prismicBlogPost } = props.data;

    const { title, featuredImage, content, date, category } = prismicBlogPost.data;

    r
};

export const query = graphql`
    query BlogPost($id: String!) {
        prismicBlogPost (id: { eq: $id }) {
            data {
            title: blog_title {
              html
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