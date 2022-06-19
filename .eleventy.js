const markdownIt = require("markdown-it");
const mdItFn = require('markdown-it-footnote');

module.exports = function(eleventyConfig) {
  let options = {
    linkify: true
  };

  eleventyConfig.setLibrary("md", markdownIt(options).use(mdItFn));

  eleventyConfig.addPassthroughCopy('assets')
};