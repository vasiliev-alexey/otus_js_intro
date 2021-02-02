// *Записать все значения полей объекта admin в отдельные переменные.
// Имена переменных должны совпадать с названиями полей.

function destructAdmin(obj) {
  const { name, admin } = obj;
  return { name, admin };
}

module.exports = { destructAdmin };
