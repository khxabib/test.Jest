const positiveSum = require("././script2");

test(
  'Проверяем противоположное значие',
  () => {
    expect(positiveSum(-5)).toBe(5);
  }
)
