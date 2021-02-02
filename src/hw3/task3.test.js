const func = require("./task3");

describe("test sumOfOddNumbers", () => {
  test.each([
    [0, "NaN"],
    [1, "1.00"],
    [3, "2.00"],
    [10, "5.00"],
  ])("sumOfOddNumbers(%i) should return %i", (a, expected) => {
    expect(func.sumOfOddNumbers(a)).toBe(expected);
  });
});
