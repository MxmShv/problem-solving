// входящая строка должна содержать 4 символа от 0 до 9
let input = "-a3455";
// console.log(input);
function validatePIN(pin) {
  //RegExp:
  // \d - любая цифра
  // \D - любой символ, кроме цифры
  // ^ - не
  // {4} либо {6} - требуемое кол-во знаков
  // $ - конец
  return /^(\d{4}|\d{6})$/.test(pin);
}
console.log(validatePIN(input));

// var filterInt = function (value) {
//   if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) return true;
//   return false;
// };
// console.log(filterInt("-1.243a"));
// NaN
