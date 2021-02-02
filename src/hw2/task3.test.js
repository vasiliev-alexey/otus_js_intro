const func = require("./task3");

describe("test max", () => {
  test.each([
    [0, 0, true],
    [1, 1, false],
    [1, 10, true],
    [10, 1, false],
  ])("willTheCircleFitInASquare(%i, %i) should return %s", (a, b, expected) => {
    expect(func.willTheCircleFitInASquare(a, b)).toBe(expected);
  });
});
