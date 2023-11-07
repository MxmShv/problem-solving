// разбивка camelCase на строку с пробелами
const input = "camelCasingSq";
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}
console.log(solution(input));
