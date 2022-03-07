const parse = require("./index").parse;

module.exports = (eleventyConfig) => {
    eleventyConfig.addTemplateFormats("mpls");

    eleventyConfig.addExtension("mpls", {
        compile: parse,
    });

    return {
        dir: {
            input: "pages",
            output: "out",
        },
    };
};
