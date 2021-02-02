// 2.Вывести в консоль таблицу умножения на 7.
// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 9 = 63

function multiplicationTableOfNum(inputNum) {
  let retString = "";
  for (let i = 1; i < 10; i += 1) {
    retString += `${inputNum} x ${i} = ${i * inputNum}\n`;
  }

  console.log(retString.trim());
}

module.exports = { multiplicationTableOfNum };
