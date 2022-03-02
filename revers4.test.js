const repeatStr = require("././script4");
describe(
  "проверяем что то",
   () => {
  expect(repeatStr(3, 'B')).toBe('BBB');
}
),
test("проверяем что то 2", () => {
  expect(repeatStr(4, '*')).toBe('****');
});
