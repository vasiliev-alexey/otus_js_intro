const func = require("./task3");

describe("test findYounger", () => {
  test.each([
    ["28.01.2021", "28.01.2000", 2],
    ["28.01.2000", "28.01.2001", 1],
    ["28.01.2021", "28.01.2021", 0],
  ])(
    "findYounger(%s %s) should return %i",
    (birthFirst, birthSecond, expected) => {
      expect(func.findYounger(birthFirst, birthSecond)).toBe(expected);
    }
  );
});
