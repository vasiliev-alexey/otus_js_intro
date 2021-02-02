const func = require("./task1");

describe("test max", () => {
  test.each([
    [0, 0, 0],
    [1, 2, 2],
    [-1, 1, 1],
    [-1, -4, -1],
    [1, undefined, 1],
    [0, undefined, 0],
    [1, Infinity, Infinity],
  ])("max(%i, %i) should return %i", (a, b, expected) => {
    expect(func.max(a, b)).toBe(expected);
  });
});
