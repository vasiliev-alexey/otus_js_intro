const func = require("./task1");

describe("test sumOfAllIntegers", () => {
  test.each([
    [0, 0, 0],
    [undefined, undefined, 3725],
    [100, undefined, 0],
    [99, undefined, 99],
    [50, 50, 0],
  ])("sumOfAllIntegers(%i, %i) should return %i", (a, b, expected) => {
    const consoleSpy = jest.spyOn(console, "log");
    func.sumOfAllIntegers(a, b);
    expect(consoleSpy).toBeCalledWith(expected);
  });
});
