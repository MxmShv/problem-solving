// Разбить строку на массив строк каждая длиной по 2 символа
// Если длины символов не хватает, то подставить _
const input = "abcdefg";
function solution(str) {
  let arr = [];
  for (i = 0; i < str.length; i += 2) {
    // console.log("str[i]:", str[i], "str[i+1]:", str[i + 1]);
    let double = "";
    str[i + 1] === undefined
      ? (double = str[i] + "_")
      : (double = str[i] + str[i + 1]);
    // console.log("str[i]:", str[i], "str[i+1]:", str[i + 1]);
    // console.log(double);
    arr.push(double);
    // console.log(nub);s
  }
  return arr;
}
console.log(solution(input));
