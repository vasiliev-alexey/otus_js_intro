const func = require("./task1");

describe("test isPatternMatch", () => {
  test.each([
    ["2021-01-28", func.Patterns.DATE, true],
    ["28/01/2021", func.Patterns.DATE, true],
    ["28.01.2021", func.Patterns.DATE, true],
    ["32/01/2021", func.Patterns.DATE, false],
    ["simple@example.com ", func.Patterns.ADDRESS, true],
    ["example@localhost", func.Patterns.ADDRESS, false],
    ["(123) 456-7890", func.Patterns.PHONE, true],
    ["(123)456-7890", func.Patterns.PHONE, true],
    ["(123)456-7890", func.Patterns.EROROR, false],
  ])("isPatternMatch(%s , %s ) should return %s", (src, type, expected) => {
    expect(func.isPatternMatch(src, type)).toBe(expected);
  });
});
