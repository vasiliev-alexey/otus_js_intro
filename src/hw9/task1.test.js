const func = require("./task1");

describe("test isRightTriangle", () => {
  test.each([
    [3, 4, 5, true],
    [3, 4, 6, false],
  ])("isRightTriangle(%i , %i , %i ) should return %s", (a, b, c, expected) => {
    expect(func.isRightTriangle(a, b, c)).toBe(expected);
  });
});
