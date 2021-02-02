const func = require("./task2");

describe("test dayOfWeekByDate", () => {
  test("should", () => {
    const date = new Date();
    const totalMinutes = 60 * date.getHours() + date.getMinutes();

    const consoleSpy = jest.spyOn(console, "log");
    func.minutesByCurrentDate();
    expect(consoleSpy).toBeCalledWith(totalMinutes);
  });
});
