const parseExpression = require("../src/parser");
const lexer = require("../src/lexer");
const testCases = require("./test-cases");

testCases.forEach(async ({ input, expected }, index) => {
  try {
    const result = await parseExpression(input);
    const passed = result === expected;
    console.log(
      `Test ${index + 1}: ${input} → ${result} (${
        passed ? "PASSED" : "FAILED"
      })`
    );
  } catch (error) {
    console.error(`Test ${index + 1}: ${input} → ERROR (${error.message})`);
  }
});
