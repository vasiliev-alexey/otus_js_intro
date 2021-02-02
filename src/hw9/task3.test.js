const func = require("./task3");

describe("test rootsOfTheQuadraticEquation", () => {
  test.each([
    [3, -4, 2, undefined, undefined],
    [1, -6, 9, 3, undefined],
    [1, -4, -5, 5, -1],
  ])(
    "rootsOfTheQuadraticEquation(%i %i %i) should return [%i , %i]",
    (a, b, c, q1, q2) => {
      expect(func.rootsOfTheQuadraticEquation(a, b, c)).toEqual([q1, q2]);
    }
  );
});
