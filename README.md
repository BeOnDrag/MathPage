# MathPage

A math problem page generator.

## If you're cloning this repo directly...

### Generating

First install dependencies (`tsc` and `eleventy`).

Add problem lists (`*.mpls`) to `/pages` (see the format of the example).

Add `mathpage.json` in your root directory, logo (`/out/static/logo.png`) and main page (`/out/index.html`). Then run `eleventy`.

Your output will be ready in `/out`.

## If you'd like to install the package...

Please use `npm i -D mathpage`.

### Using `eleventy`

Add file `.eleventy.js` to your root directory:

```javascript
const parse = require("./index").parse;

module.exports = (eleventyConfig) => {
    eleventyConfig.addTemplateFormats("mpls");

    eleventyConfig.addExtension("mpls", {
        compile: parse,
    });

    return {
        dir: {
            input: /* INPUT DIRECTORY */,
            output: out,
        },
    };
};
```

Be sure to delete the `/* INPUT DIRECTORY */` and change it into paths.

Add `mathpage.json` in your root directory, logo (`/out/static/logo.png`) and main page (`/out/index.html`). Then run `eleventy`.

Your output will be ready in `/out`.
