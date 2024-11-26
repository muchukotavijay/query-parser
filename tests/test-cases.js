const testCases = [
  { input: "1 + 2 = 3", expected: true },
  { input: "6 = 10 / 2 + 1", expected: true },
  { input: "12 + 3 != 4 / 2 + 5", expected: true },
  { input: "2 + 3 * 2 = 10", expected: false },
  { input: "2 * 3 + 4 != 10", expected: false },
];

module.exports = testCases;
