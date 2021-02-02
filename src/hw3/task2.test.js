const func = require("./task2");

describe("test multiplicationTableOfNum", () => {
  test.each([
    [
      7,
      "7 x 1 = 7\n" +
        "7 x 2 = 14\n" +
        "7 x 3 = 21\n" +
        "7 x 4 = 28\n" +
        "7 x 5 = 35\n" +
        "7 x 6 = 42\n" +
        "7 x 7 = 49\n" +
        "7 x 8 = 56\n" +
        "7 x 9 = 63",
    ],
  ])("multiplicationTableOfNum(%i) should return %s", (a, expected) => {
    const consoleSpy = jest.spyOn(console, "log");
    func.multiplicationTableOfNum(a);
    expect(consoleSpy).toBeCalledWith(expected);
  });
});
