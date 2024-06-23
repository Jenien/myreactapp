/* eslint-disable no-undef */
test("operasi aritmatika dasar", () => {
  expect(3 + 2).toBe(5);
  expect(7 - 3).toBe(4);
  expect(2 * 4).toBe(8);
});

test("fungsi penjumlahan", () => {
  function add(a, b) {
    return a + b;
  }
  expect(add(2, 3)).toBe(5);
  expect(add(-3, 3)).toBe(0);
});

test("fungsi pengurangan", () => {
  function subtract(a, b) {
    return a - b;
  }
  expect(subtract(5, 2)).toBe(3);
  expect(subtract(7, 3)).toBe(4);
});

test("fungsi perkalian", () => {
  function multiply(a, b) {
    return a * b;
  }
  expect(multiply(3, 3)).toBe(9);
  expect(multiply(5, -2)).toBe(-10);
});
