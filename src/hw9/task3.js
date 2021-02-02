// 3. *Пользователь вводит числа a, b и c.
// Написать программу, выводящую корни квадратного уравнения с коэффициентами a, b и c.

// * Пользователь вводит числа a, b и c.
// Написать программу, выводящую корни квадратного уравнения с коэффициентами a, b и c.

export function rootsOfTheQuadraticEquation(a, b, c) {
  const disc = b ** 2 - 4 * a * c;

  if (disc < 0) {
    return [undefined, undefined];
  }
  if (disc === 0) {
    return [-b / (2 * a), undefined];
  }
  return [(-b + disc ** 0.5) / (2 * a), (-b - disc ** 0.5) / (2 * a)];
}
// module.exports = { rootsOfTheQuadraticEquation };
