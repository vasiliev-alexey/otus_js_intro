const func = require("./task3");

describe("test pow", () => {
  test.each([
    [0, 0, 1],
    [2, 2, 4],
    [2, 3, 8],
    [2, -1, 0.5],
  ])("pow %s (%s) should return %i %i", (basic, exponent, expected) => {
    expect(func.pow(basic, exponent)).toBe(expected);
  });
});
