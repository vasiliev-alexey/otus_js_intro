// Вывести в консоль сумму всех целых чисел от 50 до 100.
function sumOfAllIntegers(start = 50, end = 100) {
  let sum = 0;

  for (let i = start; i < end; i += 1) {
    sum += i;
  }
  console.log(sum);
}

module.exports = { sumOfAllIntegers };
