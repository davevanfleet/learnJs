# Learn JS

This repository contains practice for those learning javascript, organized by topic. Each topic contains pairs of js files (where the student will enter modify/write code) and test files.

## Installation

Install all needed dependencies with `npm install`

## TDD

This repo can be used to practice javascript via test driven development (TDD). The expected work flow is:

1. Look at a javascript file in your current topic and read any comments that explain what work is expected.
2. Run the test file that is built for that specific javascript file (for example, the test file for `variables.js` is `variables.test.js`). Instructions for running the tests can be found below.
3. Add your code to the javascript file (don't modify the test files).
4. Run the tests again.
5. Repeat 3 and 4 until all tests are green!

### Running the Tests

Jest is used as the test runner for this project. Tests can be run as follows:

- A single test file (recommended):

```
npm run test -- 01_variables_and_functions/variables.test.js
```

- All the tests in a topic directory:

```
npm run test -- 01_variables_and_functions
```

- All the tests in the repo:

```
npm run test
```
