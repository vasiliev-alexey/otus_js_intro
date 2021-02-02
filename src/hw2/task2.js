// Запросить у пользователя ввод числа от 1 до 12.
// Вывести в консоль название месяца, соответствующее этому числу (1 —январь, 2 —февраль и т.д.).
export function number2month(inputNum) {
  switch (inputNum) {
    case 1:
      return "Январь";
    case 2:
      return "Февраль";
    case 3:
      return "Март";
    case 4:
      return "Апрель";
    case 5:
      return "Май";
    case 6:
      return "Июнь";
    case 7:
      return "Июль";
    case 8:
      return "Август";
    case 9:
      return "Сентябрь";
    case 10:
      return "Октябрь";
    case 11:
      return "Ноябрь";
    case 12:
      return "Декабрь";

    default:
      return undefined;
  }
}
