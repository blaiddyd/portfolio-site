import { PrismicBlogCategoryConnection, PrismicBlogPostConnection } from "../src/codegen";

export interface BlogPostsQueryResult {
    data: {
        allPrismicBlogPost: PrismicBlogPostConnection;
    }
}