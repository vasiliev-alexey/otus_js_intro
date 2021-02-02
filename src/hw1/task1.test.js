const func = require("./task1");

describe("test adds", () => {
  test.each([
    [0, 0, 0],
    [1, 1, 2],
    [-1, 1, 0],
    [1, undefined, NaN],
    [1, NaN, NaN],
  ])("sum(%i, %i) should return %i", (a, b, expected) => {
    const consoleSpy = jest.spyOn(console, "log");
    func.sum(a, b);
    expect(consoleSpy).toBeCalledWith(expected);
  });
});
describe("test multiply", () => {
  test.each([
    [2, 3, 6],
    [0, 3, 0],
    [-1, 1, -1],
    [1, undefined, NaN],
    [1, NaN, NaN],
  ])("multiply(%i, %i) should return %i", (a, b, expected) => {
    const consoleSpy = jest.spyOn(console, "log");
    func.multiply(a, b);
    expect(consoleSpy).toBeCalledWith(expected);
  });
});
