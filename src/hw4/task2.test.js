const func = require("./task2");

describe("test deepCopy", () => {
  test("should deep copy and assign role admin", () => {
    const user = {
      name: "Jon Snow",
    };
    const admin = func.deepCopy(user, "admin");
    expect(admin.role).toBe("admin");
    expect(user).not.toBe(admin);
  });
});
