// 2. Напишите функцию isWord, которая принимает на вход текстовую строку.
// Функция возвращает true, если строка состоит из одного слова и false, если из нескольких.

function isWord(dataString) {
  return (
    dataString.match(/\s/) == null && dataString.match(/[,.!?;:()]/) == null
  );
}
module.exports = { isWord };
