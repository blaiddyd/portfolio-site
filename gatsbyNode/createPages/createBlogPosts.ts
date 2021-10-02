import { Actions, Reporter } from "gatsby";
import { paginate } from "gatsby-awesome-pagination";

import path from "path";

import { PrismicBlogCategory } from "../../src/codegen";
import { BlogPostsQueryResult } from "../types";

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
            path: `/blog/${(post.data.blog_category.document as PrismicBlogCategory).uid}/${post.uid}/`,
            component: blogPostTemplate,
            context: {
              id: post.id,
              prismicId: post.prismicId,
              slug: post.uid
            }
        });

        reporter.info(`Created blog post ${post.uid}`);
      });

      const blogFeedTemplate = path.resolve("./src/templates/Blog/BlogFeed/index.tsx");
      paginate({
        createPage,
        items: allPosts,
        itemsPerPage: parseInt(BLOG_POST_PER_PAGE),
        pathPrefix: `/blog`,
        component: blogFeedTemplate
      });

    } else {
      reporter.info(`No blog posts to create. Skipping.`);
    }
};