// Создайте массив целых чисел из 10 элементов.
// Создайте новый массив на основе исходного, в котором каждый элемент будет вдвое больше
// элемента исходного массива с таким же индексом. (a[1] = 3, b[1] = 6,
// где a—исходный массив, b—новый массив).

function arrayDoubler(inputNum) {
  const newArr = [];
  inputNum.forEach(function doubleFunc(part, index) {
    newArr.push(this[index] * 2);
  }, inputNum);
  return newArr;
}

module.exports = { arrayDoubler };
