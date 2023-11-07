const input = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
function moveZeros(arr) {
  let answer = [...arr];
  let arrayNew = arr.forEach((element, index) => {
    console.log("element: ", element, "index: ", index);
    if (element === 0) {
      arr.splice(index);
      console.log("splice");
    }
  });
  //   let array = arr.forEach((element) => {
  // element === 0 ? answer.push("0") : null;
  // console.log(answer);
  //   });
  //   console.log(arrayFilteredWout0);
  //   return answer;
}
console.log(moveZeros(input));
