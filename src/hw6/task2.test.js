const func = require("./task2");

describe("test isWord", () => {
  test.each([
    ["Мама мыла раму", false],
    ["single", true],
    ["Мамин-Сибиряк", true],
    ["Мамин!Сибиряк!", false],
  ])("diff(%i %i) should return %i", (data, expected) => {
    expect(func.isWord(data)).toBe(expected);
  });
});
