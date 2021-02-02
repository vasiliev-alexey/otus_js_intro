const func = require("./task2");

describe("test month", () => {
  test.each([
    [0, undefined],
    [1, "Январь"],
    [2, "Февраль"],
    [3, "Март"],
    [4, "Апрель"],
    [5, "Май"],
    [6, "Июнь"],
    [7, "Июль"],
    [8, "Август"],
    [9, "Сентябрь"],
    [10, "Октябрь"],
    [11, "Ноябрь"],
    [12, "Декабрь"],
    [13, undefined],
    [undefined, undefined],
  ])("number2month(%i) should return %s", (a, expected) => {
    expect(func.number2month(a)).toBe(expected);
  });
});
