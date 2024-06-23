/* eslint-disable no-undef */
// test("testing sederhana", () => {
//   expect(true).toBe(true);
// });

test("menjumlahkan nilai", () => {
  expect(1 + 1).toBe(2);
  expect(2 * 3).toBe(6);
});

test("fungsi menjumlahkan nilai 2", () => {
  function sum(a, b) {
    return a + b;
  }
  expect(sum(1, 2)).toBe(3);
  expect(sum(-1, 1)).toBe(0);
});
