const func = require("./task3");

describe("test destructAdmin", () => {
  test("should deep copy and assign role admin", () => {
    const user = {
      name: "Jon Snow",
      admin: "admin",
    };
    const { name, admin } = func.destructAdmin(user);
    expect("admin").toBe(admin);
    expect("Jon Snow").toBe(name);
  });
});
