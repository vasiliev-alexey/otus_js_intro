// 1. Напишите функцию diff, которая получает в качестве параметров 2 числа и
// возвращает разницу между наибольшим и наименьшим.

function diff(numberOne, numberTwo) {
  return Math.max(numberOne, numberTwo) - Math.min(numberOne, numberTwo);
}

module.exports = { diff };
