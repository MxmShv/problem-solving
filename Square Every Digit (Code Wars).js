//надо вернуть квадрат каждого числа в инпуте(число)
const input = 3212; // expected: 9414 (3sqrt2 = 9; 2sqrt2 = 4; 1sqrt2 = 1; 2sqrt2 = 4)
function squareDigits(num) {
  let arr = +[...num.toString()].map((num) => Math.pow(num, 2)).join("");
  return arr;
}
console.log(squareDigits(input));
