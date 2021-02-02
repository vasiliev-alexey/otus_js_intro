const func = require("./task2");

describe("test arrayDoubler", () => {
  test.each([
    ["zero", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
    ["double", [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]],
    [
      "negative",
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-2, -2, -2, -2, -2, -2, -2, -2, -2, -2],
    ],
    [
      "mixed",
      [-1, 1, 1, 1, 1, 1, 1, 1, 1, -1],
      [-2, 2, 2, 2, 2, 2, 2, 2, 2, -2],
    ],
  ])("arrayDoubler  should return  %s", (a, b, exp) => {
    const rez = func.arrayDoubler(b);
    expect(rez).toEqual(exp);
  });
});
