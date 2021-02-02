const func = require("./task1");

describe("test dayOfWeekByDate", () => {
  test.each([
    ["28.01.2021", "четверг"],
    ["29.01.2021", "пятница"],
    ["30.01.2021", "суббота"],
    ["31.02.2021", "среда"],
  ])("dayOfWeekByDate(%s ) should return %s", (input, expected) => {
    expect(func.dayOfWeekByDate(input)).toBe(expected);
  });
});
