// В переменных circle и square хранятся площади круга и
// квадрата соответственно. Написать программу, которая определяет, поместится ли круг в квадрат
function willTheCircleFitInASquare(circle, square) {
  const d1 = 2 * Math.sqrt(circle / Math.PI);
  const d2 = Math.sqrt(square);
  return d1 <= d2;
}

module.exports = { willTheCircleFitInASquare };
