const func = require("./task3");

describe("test sumOfDigitsOfNumber", () => {
  test.each([
    [999, 27],
    [100, 1],
    [123, 6],
    [-123, -6],
    [-999, -27],
    [300, 3],
    [NaN, NaN],
    [undefined, NaN],
  ])("sumOfDigitsOfNumber(%i) should return %i", (a, expected) => {
    const consoleSpy = jest.spyOn(console, "log");
    window.prompt = jest.fn(() => a);
    func.sumOfDigitsOfNumber();
    expect(window.prompt).toBeCalled();
    expect(consoleSpy).toBeCalledWith(expected);
  });
});
