const func = require("./task1");

describe("test max", () => {
  test("should assign Age", () => {
    const user = {
      name: "Jon Snow",
    };
    func.assignAge(user, 10);
    expect(user.age).toBe(10);
  });
});
