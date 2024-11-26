const nearley = require("nearley");
const grammar = require("./grammar");

async function parseExpression(input) {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  try {
    parser.feed(input);
    const ast = parser.results[0];
    return ast;
  } catch (error) {
    const location = error.offset || input.length;
    throw new Error(`Error at character ${location}: ${error.message}`);
  }
}

module.exports = parseExpression;
