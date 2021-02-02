const func = require("./task2");

describe("test printCircumferenceAndAreaOfACircle", () => {
  test.each([
    [3, "L=18.85 S=28.27"],
    [5, "L=31.42 S=78.54"],
    [0, "L=0.00 S=0.00"],
  ])("isRightTriangle(%i) should return %s", (radius, expected) => {
    const consoleSpy = jest.spyOn(console, "log");
    func.printCircumferenceAndAreaOfACircle(radius);
    expect(consoleSpy).toBeCalledWith(expected);
  });
});
