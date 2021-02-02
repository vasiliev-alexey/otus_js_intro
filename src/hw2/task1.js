// В переменных a и b хранятся числа. Вывести в консоль наибольшее из них
function max(inputNum1, inputNum2) {
  if (inputNum1 < inputNum2) {
    return inputNum2;
  }
  return inputNum1;
}

module.exports = { max };
