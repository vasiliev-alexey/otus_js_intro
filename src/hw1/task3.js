// Написать программу, которая запрашивает у пользователя ввод трёхзначного числа,
// а потом выводит в консоль сумму цифр введённого числа.

function sumOfDigitsOfNumber() {
  const absNumber = +prompt("введите трехзначное число");

  console.log(
    Math.trunc(absNumber / 100) +
      Math.trunc((absNumber % 100) / 10) +
      Math.trunc(absNumber % 10)
  );
}

module.exports = { sumOfDigitsOfNumber };
