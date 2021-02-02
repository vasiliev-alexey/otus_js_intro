// Создайте массив целых чисел из 10 элементов.
// 1. Выведите в консоль сумму всех элементов массива.

function sumArray(array) {
  console.log(array.reduce((a, v) => a + v));
}

module.exports = { sumArray };
