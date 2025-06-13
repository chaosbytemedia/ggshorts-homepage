const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    // Copy the `public` directory to the output
    eleventyConfig.addPassthroughCopy("public");
    
    // Copy CSS files
    eleventyConfig.addPassthroughCopy("src/css");
    
    // Copy JavaScript files
    eleventyConfig.addPassthroughCopy("src/js");
    
    // Copy assets directory
    eleventyConfig.addPassthroughCopy("src/assets");
    
    // Explicitly copy audio files
    eleventyConfig.addPassthroughCopy("src/assets/**/*.mp3");
    eleventyConfig.addPassthroughCopy("src/assets/**/*.wav");
    eleventyConfig.addPassthroughCopy("src/assets/**/*.ogg");
    
    // Add the currentYear filter
    eleventyConfig.addFilter("currentYear", function() {
        return new Date().getFullYear();
    });

    // Add syntax highlighting plugin
    eleventyConfig.addPlugin(syntaxHighlight);
    
    return {
        // Set the input and output directories
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_includes"
        },
        // Watch for changes in CSS, JS and audio files
        templateFormats: ["njk", "html", "css", "js", "mp3", "wav", "ogg"],
        watchTargets: ["src/**/*.css", "src/**/*.js", "src/**/*.mp3", "src/**/*.wav", "src/**/*.ogg"]
    };
}; 