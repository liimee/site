const markdownIt = require("markdown-it");
const automaticNoopener = require('eleventy-plugin-automatic-noopener');

module.exports = function (eleventyConfig) {
  let options = {
    linkify: true,
    html: true
  };

  eleventyConfig.addPlugin(automaticNoopener, {
    ignore: null,
    elements: ['a', 'area', 'form'],
    noopener: false,
    noreferrer: true,
  });

  const md = markdownIt(options)

  // Remember old renderer, if overridden, or proxy to default renderer
  var defaultRender = md.renderer.rules.link_open || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    // If you are sure other plugins can't add `target` - drop check below
    var aIndex = tokens[idx].attrIndex('rel');

    // shitty eg
    if (aIndex < 0) {
      tokens[idx].attrPush(['rel', 'noreferrer']); // add new attribute
    } else {
      tokens[idx].attrs[aIndex][1] = 'noreferrer';    // replace value of existing attr
    }

    // pass token to default renderer.
    return defaultRender(tokens, idx, options, env, self);
  };

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPassthroughCopy('assets')
};