import { GatsbyNode } from "gatsby";
import { createBlogPosts } from "./createBlogPosts";

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
  try {
    await createBlogPosts(graphql, actions, reporter);
  } catch (error) {
    throw new Error(error);
  }
};