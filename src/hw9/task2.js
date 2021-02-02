// 2. Пользователь вводит число R. Написать программу,
//  которая выведет в консоль длину окружности и площадь круга с радиусом R.

function printCircumferenceAndAreaOfACircle(radius) {
  const circumference = 2 * Math.PI * radius;
  const areaOfACircle = Math.PI * radius ** 2;
  // eslint-disable-next-line no-console
  console.log(`L=${circumference.toFixed(2)} S=${areaOfACircle.toFixed(2)}`);
}

module.exports = { printCircumferenceAndAreaOfACircle };
