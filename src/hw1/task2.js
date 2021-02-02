// В двух переменных хранятся строки символов.
// Написать программу, которая выведет в консоль суммарное количество символов в обоих строках.

function symbolCount(a, b) {
  console.log(a.toString().length + b.toString().length);
}
module.exports = { symbolCount };
