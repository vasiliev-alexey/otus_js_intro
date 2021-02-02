const task2 = require("./task2");

describe("test symbolCount", () => {
  test.each([
    ["", "", 0],
    ["a", "", 1],
    ["a", "b", 2],
    [":)", "b", 3],
    ["aaa", "bbb", 6],
  ])("symbolCount(%s, %s) should return %i", (a, b, expected) => {
    const consoleSpy = jest.spyOn(console, "log");
    task2.symbolCount(a, b);
    expect(consoleSpy).toBeCalledWith(expected);
  });
});
