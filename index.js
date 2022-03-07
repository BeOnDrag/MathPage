const parser = require("./parser/out/parser");
const fs = require("fs");

module.exports = {
    parse: (content) => () =>
        parser.parseMPLS(
            content,
            JSON.parse(fs.readFileSync("./mathpage.json").toString())
        ),
};
