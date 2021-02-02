// Создайте массив целых чисел из 10 элементов.
// 3. *Найдите и выведите в консоль наибольший и наименьший элементы исходного массива.
function arrayMinMax(sourceArray) {
  let min = sourceArray[0];
  let max = sourceArray[0];
  sourceArray.forEach((element) => {
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
  });

  console.log(min, max);
}

module.exports = { arrayMinMax };
