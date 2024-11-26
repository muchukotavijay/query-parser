const nearley = require("nearley");
const grammar = require("./grammer");
const lexer = require("./lexer");

function parseInput(input) {
  try {
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    parser.feed(input);

    if (parser.results.length > 1) {
      throw new Error("Ambiguous grammar detected!");
    }

    return parser.results[0];
  } catch (err) {
    return `Error: ${err.message}`;
  }
}

// Test examples
const examples = [
  "1 + 2 = 3",
  "6 = 10 / 2 + 1",
  "12 + 3 != 4 / 2 + 5",
  "2 + 3 * 2 = 10",
  "2 * 3 + 4 != 10",
];

examples.forEach((example) => {
  console.log(`Input: ${example} → Output: ${parseInput(example)}`);
});
