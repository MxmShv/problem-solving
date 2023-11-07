const input = [1, -11, 2, 1, 1, 1];

function findOdd(A) {
  let answer = 0;
  A.forEach((element) => {
    let count = 0;
    for (i = 0; i < A.length; ++i) {
      A[i] === element ? count++ : null;
    }
    // return count % 2 == 0 ? element : null;

    // console.log("count: ", count, "element: ", element);
    if (count % 2 != 0) {
      answer = element;
    }
    null;
  });
  return answer;
}

console.log(findOdd(input));
