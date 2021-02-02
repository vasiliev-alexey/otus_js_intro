// В переменных a и b хранятся числа.
// Написать программу, которая выводит в консоль произведение и сумму этих чисел.

function sum(a, b) {
  console.log(a + b);
}

function multiply(a, b) {
  console.log(a * b);
}

module.exports = { sum, multiply };
