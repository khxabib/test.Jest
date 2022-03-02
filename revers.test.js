const positiveSum = require("././script");

// test("проверяем что то", () => {
//   expect(positiveSum([4, 4, 4])).toBe(12);
// });
// test("проверяем что то 2", () => {
//   expect(positiveSum([4, 4, 4])).toBe(12);
// });
describe("arr sum", () => {
  const testCases = [
    {
      popochka: "([5, 8, 2])",
      expected: (15),
    },
    {
      popochka: "([2, 8, 2,])",
      expected: (12),
    },
    {
      popochka: "([4, 8, 2])",
      expected: 14,
    },
  ];
  testCases.forEach((test) => {
    it( `входящий массив : ${test.popochka} ожидание: ${test.expected}`, () => {
      const re = positiveSum(test.popochka);
      expect(re).toBe(test.expected);
    });
  });
});
