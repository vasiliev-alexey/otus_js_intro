const func = require("./task1");

describe("test sumArray", () => {
  test.each([
    ["zero", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0],
    ["ten", [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10],
    ["negative to zero", [-1, 1, -1, 1, -1, 1, -1, 1, -1, 1], 0],
  ])("max(%s, %s) should return %i", (a, b, expected) => {
    //   expect(func.sumArray(b)).toBe(expected);
    const consoleSpy = jest.spyOn(console, "log");
    func.sumArray(b);
    expect(consoleSpy).toBeCalledWith(expected);
  });
});
