/* eslint-disable no-useless-escape */
//  Пользователь вводит текстовую строку. Определить с помощью регулярного выражения,
//   является ли введённая строка:
// 1. Датой
// 2. Адресом электронной почты
// 3. *Номером телефона.

const Patterns = { DATE: "date", ADDRESS: "address", PHONE: "phone" };

function getPatterns(patterns) {
  switch (patterns) {
    case Patterns.DATE:
      return [
        /^[0-9]{4}([-./])(0[1-9]|1[012])([-./])(0[1-9]|1[0-9]|2[0-9]|3[01])/,
        /^(0?[1-9]|[12][0-9]|^3[01])[-./](0?[1-9]|1[012])[-./]([0-9]{4})/,
        /^(0?[1-9]|1[012])[-./](0?[1-9]|[12][0-9]|3[01])[-./]([0-9]{4})/,
      ];
    case Patterns.ADDRESS:
      return [/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/];
    case Patterns.PHONE:
      return [/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im];
    default:
      return new Error("not valid pattern type");
  }
}

function isPatternMatch(sourceString, type) {
  const patterns = getPatterns(type);

  for (let i = 0; i < patterns.length; i += 1) {
    if (patterns[i].test(sourceString.trim())) {
      return true;
    }
  }
  return false;
}

module.exports = { isPatternMatch, Patterns };
