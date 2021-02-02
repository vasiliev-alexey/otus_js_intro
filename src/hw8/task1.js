// 1. Запросите у пользователя дату в формате ДД.ММ.ГГГГ.
// Напишите программу, выводящую день недели по введённой дате

function dayOfWeekByDate(inputDate) {
  const result = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];

  const [dt, montn, year] = inputDate.split(".");

  const date = new Date(Number(year), Number(montn) - 1, Number(dt));

  return result[date.getDay()];
}

module.exports = { dayOfWeekByDate };
