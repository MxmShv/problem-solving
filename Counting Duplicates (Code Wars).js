// входит строка, выходит число означающее количество знаков строки повторяющихся 2 и более раз
// например "Indivisibility" - ответ 1 потому что i повторяется 2 и более раз
// но уже в слове "Indivisibilities" - ответ 2 потому что i и s повторяются 2 и более раз
// решение должно быть регистро независимым, если в строке bB то уже идет в счетчик

const input = "Indivisibilities";
// let arr = [];
// let lowInput = input.toLowerCase();
// for (i = 0; i < lowInput.length; ++i) {
//   let regexp = new RegExp(`${lowInput[i]}`, "g");
//   console.log(`match ${lowInput[i]}`, lowInput.match(regexp).length);
//   if (lowInput.match(regexp).length >= 2) {
//     arr.push(lowInput[i]);
//   }

//   //   console.log(regexp);
//   //   console.log(`match ${input[i]}`, input.match(regexp));
// }
// let answ = [...new Set(arr)].length;
// console.log(arr);
// console.log(answ);
console.log("exec f: ", /i/gi.exec(input));
console.log("match f: ", input.matchAll(/i/gi));
// console.log("match f length: ", input.match(/f/gi).length);
console.log("test f: ", /i/gi.test(input));

function duplicateCount(text) {
  let answer = 0;
  let arr = [];
  let lowInput = input.toLowerCase();
  for (i = 0; i < lowInput.length; ++i) {
    let regexp = new RegExp(`${lowInput[i]}`, "g");
    console.log(`match ${lowInput[i]}`, lowInput.match(regexp).length);
    if (lowInput.match(regexp).length >= 2) {
      arr.push(lowInput[i]);
    }
  }
  answer = [...new Set(arr)].length;
  return answer;
}
console.log(duplicateCount(input));
