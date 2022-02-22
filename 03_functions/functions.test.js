import functions from "./functions";

test("sum() calculates correctly", () => {
  expect(functions.sum(1, 2)).toBe(3);
  expect(functions.sum(10, 2)).toBe(12);
});

test("subtract() calculates corrects", () => {
  expect(functions.subtract(3, 1)).toBe(2);
  expect(functions.subtract(10, 2)).toBe(8);
  expect(functions.subtract(2, 10)).toBe(-8);
});

test("multiply() calculates correctly", () => {
  expect(functions.multiply(1, 2)).toBe(2);
  expect(functions.multiply(10, 2)).toBe(20);
  expect(functions.multiply(10, -2)).toBe(-20);
});

test("divide() calculates correctly", () => {
  expect(functions.divide(2, 2)).toBe(1);
  expect(functions.divide(10, 2)).toBe(5);
  expect(functions.divide(10, -2)).toBe(-5);
});

test("addThreeNumbers() calculates correctly", () => {
  expect(functions.addThreeNumbers(1, 2, 3)).toBe(6);
  expect(functions.addThreeNumbers(10, 2, 1)).toBe(13);
});
