import React from "react";
import { graphql, PageProps } from "gatsby";
import { BlogFeedQuery } from "codegen";

interface BlogFeedPageContext {
  pageNumber: number;
  humanPageNumber: number;
  skip: number;
  limit: number;
  numberOfPages: number;
  previousPagePath?: string;
  nextPagePath?: string;
}

const BlogFeed = (props: PageProps<BlogFeedQuery, BlogFeedPageContext>) => {
   return <div className="main">Hello!</div>
};

export const query = graphql`
  query BlogFeed ($limit: Int!, $skip: Int!) {
    allPrismicBlogPost (limit: $limit, skip: $skip) {
      edges {
        node {
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
      }
    }
  }
`;

export default BlogFeed;