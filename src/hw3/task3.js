// *Запросить у пользователя ввод числа N. Вывести в консоль среднее арифметическое
// всех нечётных чисел от 1 до N

export function sumOfOddNumbers(endNum) {
  let returnResult = 0;
  let count = 0;
  for (let i = 1; i <= endNum; i += 2, count += 1) {
    returnResult += i;
  }
  return (returnResult / count).toFixed(2);
}
