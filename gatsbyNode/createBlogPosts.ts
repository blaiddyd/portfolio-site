import { Actions, Reporter } from "gatsby";
import path from "path";

import { BlogPostsQueryResult } from "./types";

const { BLOG_POST_PER_PAGE = "10" } = process.env;

export const createBlogPosts = async (graphql, actions: Actions, reporter: Reporter) => {
    const { createPage } = actions;

    // Query all blog posts
    const blogPosts: BlogPostsQueryResult = await graphql(`
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
    }`);

    if (blogPosts.data) {
      const allPosts = blogPosts.data.allPrismicBlogPost.edges.map((edge) => edge.node);

      const blogPostTemplate = path.resolve("./src/templates/Blog/BlogPost/index.tsx");

      allPosts.forEach((post) => {
        createPage({
            path: `/blog/${post.data.blog_category.document.uid}/${post.uid}`,
            component: blogPostTemplate,
            context: {
              id: post.id,
              prismicId: post.prismicId,
              slug: post.uid
            }
        });

        reporter.info(`Created blog post ${post.uid}`);
      });
    } else {
      reporter.info(`No blog posts to create. Skipping.`);
    }
};