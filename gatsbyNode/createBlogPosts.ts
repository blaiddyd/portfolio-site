import { PrismicBlogPostConnection } from "codegen";
import { Actions, Reporter } from "gatsby";
import { BlogPostsQueryResult } from "./types";

const { BLOG_POST_PER_PAGE = "10" } = process.env;

export const createBlogFeed = async (graphql, actions: Actions, reporter: Reporter) => {
    const { createPage } = actions;

    // Query all blog posts
    const blogPosts: BlogPostsQueryResult = await graphql`
    {
        allPrismicBlogPost {
          edges {
            node {
              data {
                blog_title {
                  html
                  text
                }
                featured_image {
                  gatsbyImageData(placeholder: BLURRED, height: 450, width: 450)
                }
                post_content {
                  html
                }
                date(locale: "en-AU")
                blog_category {
                  document {
                    ... on PrismicBlogCategory {
                      id
                      prismicId
                      data {
                        category_name
                      }
                      uid
                    }
                  }
                }
              }
              prismicId
              last_publication_date(locale: "en-AU")
              uid
              id
            }
          }
        }
    }`;

    if (blogPosts.data) {
        const allPosts = blogPosts.data.allPrismicBlogPost.edges.map((edge) => edge.node);

        allPosts.forEach((post) => {
            createPage({
                path: `/blog/${post.data.blog_category.slug}/${post.uid}`,

            });
        });
    }
};