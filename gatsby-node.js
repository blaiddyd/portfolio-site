require("source-map-support").install();
require("ts-node").register();
require("dotenv").config();

exports.createPages = require("./gatsbyNode/index").createPages;