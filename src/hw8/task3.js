// 1. Запросите у пользователя дату в формате ДД.ММ.ГГГГ.
// Напишите программу, выводящую день недели по введённой дате

function string2Date(input) {
  const [dt, month, year] = input.split(".");
  return new Date(Number(year), Number(month) - 1, Number(dt));
}

function findYounger(birthFirst, birthSecond) {
  const db1 = string2Date(birthFirst);
  const db2 = string2Date(birthSecond);

  switch (Math.sign(db1.getTime() - db2.getTime())) {
    case -1:
      return 1;
    case 1:
      return 2;
    default:
      return 0;
  }
}

module.exports = { findYounger };
