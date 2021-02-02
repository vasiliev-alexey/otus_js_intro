const func = require("./task1");

describe("test diff", () => {
  test.each([
    [-1, 1, 2],
    [0, 0, 0],
    [NaN, 0, NaN],
    [undefined, 0, NaN],
  ])("diff(%i %i) should return %i", (one, two, expected) => {
    expect(func.diff(one, two)).toBe(expected);
  });
});
