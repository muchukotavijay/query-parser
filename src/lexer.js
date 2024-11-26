const moo = require("moo");

const lexer = moo.compile({
  ws: /[ \t]+/,
  comparisonOperator: ["=", "!="],
  additiveOperator: ["+", "-"],
  multiplicativeOperator: ["*", "/"],
  number: { match: /[0-9]+/, value: (str) => Number(str) },
});

module.exports = lexer;
