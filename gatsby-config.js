require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const linkResolver = require('./linkResolver').linkResolver;

const { GATSBY_PRISMIC_REPO_NAME, PRISMIC_ACCESS_TOKEN, PRISMIC_CUSTOM_TYPES_API_TOKEN } = process.env;

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Portfolio Site",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-emotion",
      options: {
        sourceMap: true,
        cssPropOptimization: true,
      }
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: GATSBY_PRISMIC_REPO_NAME,
        accessToken: PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: (doc) => linkResolver(doc),
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-typescript",
    "gatsby-plugin-graphql-config",
    {
      resolve: "gatsby-plugin-gatsby-cloud",
      options: {
        headers: {
          "/fonts/*": ["Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable"],
          "**/*.woff": ["Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable"],
          "**/*.woff2": ["Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable"],
        },
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
