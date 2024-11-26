# Query Parser

A simple query parser using [Nearley](https://nearley.js.org/) for parsing and [Moo](https://github.com/no-context/moo) for lexical analysis.

## Requirements

To run this project, you need the following installed on your system:

- [Node.js](https://nodejs.org/) (v12 or later)
- npm (Node Package Manager)

## Installation

Follow these steps to set up the project:

1. Clone the repository:
   ```bash
   git clone https://github.com/muchukotavijay/query-parser.git
   ```
2. Clone the repository:
   ```bash
   cd query-parser
   ```
3. Clone the repository:
   ```bash
   npm install
   ```

## Scripts

1. Compile: Compiles the Nearley grammar file (src/grammar.ne) into a JavaScript file (src/grammar.js).
   ```bash
   npm run compile
   ```
2. Test:
   This script runs the following steps:
   - Compiles the grammar using npm run compile.
   - Executes the test suite located in tests/test-runner.js.
   - You can edit the test-cases to add more tests
   ```bash
   npm run test
   ```
