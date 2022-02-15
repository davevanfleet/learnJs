import { sum, subtract, multiply, divide } from './functions'

test('sum() calculates correctly', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(10, 2)).toBe(12);
});

test('subtract() calculates corrects', () => {
  expect(subtract(3, 1)).toBe(2);
  expect(subtract(10, 2)).toBe(8);
  expect(subtract(2, 10)).toBe(-8);
});

test('multiply() calculates correctly', () => {
  expect(multiply(1, 2)).toBe(2);
  expect(multiply(10, 2)).toBe(20);
  expect(multiply(10, -2)).toBe(-20);
});

test('divide() calculates correctly', () => {
  expect(divide(2, 2)).toBe(1);
  expect(divide(10, 2)).toBe(5);
  expect(divide(10, -2)).toBe(-5);
});