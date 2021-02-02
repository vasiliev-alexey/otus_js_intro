// 1. Даны длины трёх сторон треугольника.
// Определить, является ли треугольник прямоугольным.

function isRightTriangle(a, b, c) {
  const scores = [a, b, c].sort();
  return scores[0] ** 2 + scores[1] ** 2 === scores[2] ** 2;
}

module.exports = { isRightTriangle };
