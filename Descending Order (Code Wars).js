const input = 145263;
//рабочка
function descendingOrder(n) {
  n = n.toString().split("");
  console.log(n);
  let answer = n.sort().reverse().join("");
  return parseInt(answer);
}

console.log(descendingOrder(input));
