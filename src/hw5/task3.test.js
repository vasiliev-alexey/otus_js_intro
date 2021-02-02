const func = require("./task3");

describe("test max", () => {
  test.each([
    ["zero", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0, 0],
    ["uno", [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], 0, 1],
    ["negative", [0, -1, 0, 0, 0, 0, 0, 1, 0, 0], -1, 1],
  ])("arrayMinMax %s (%s) should return %i %i", (t, src, min, max) => {
    const consoleSpy = jest.spyOn(console, "log");
    func.arrayMinMax(src);
    expect(consoleSpy).toBeCalledWith(min, max);
  });
});
