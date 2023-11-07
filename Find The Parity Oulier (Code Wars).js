// нужно найти либо четное число в массиве не четных
// либо нечетное число в массиве четных
const input = [2, 4, 0, 100, 4, 11, 2602, 36];
function findOutlier(integers) {
  let answer = 0;
  let countTrue = 0;
  let countFalse = 0;
  integers.forEach((element) => {
    element % 2 == 0 ? ++countTrue : ++countFalse;
    // console.log("True: ", countTrue, "False: ", countFalse);
    // console.log(typeof element, element, element % 2 == 0 ? true : false);
  });
  countTrue > countFalse
    ? integers.forEach((element) => {
        element % 2 != 0 ? (answer = element) : null;
      })
    : integers.forEach((element) => {
        element % 2 == 0 ? (answer = element) : null;
      });
  //   console.log(typeof integers, integers);
  return answer;
}
console.log(findOutlier(input));
