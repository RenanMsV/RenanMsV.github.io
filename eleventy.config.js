module.exports = function(eleventyConfig) {
  // sets up public assets folder for js, css, img
  eleventyConfig.addPassthroughCopy({ "src/public": "/" });
  // returns a var by name even with hyphen - hacky fix
  eleventyConfig.addNunjucksFilter("getVar", function(name) {
    return this.getVariables()[name];
  });
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
