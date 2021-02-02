// 2. Написать программу, которая выводит в консоль количество минут,
// прошедшее с начала сегодняшнего дня

function minutesByCurrentDate() {
  const date = new Date();
  console.log(60 * date.getHours() + date.getMinutes());
}

module.exports = { minutesByCurrentDate };
