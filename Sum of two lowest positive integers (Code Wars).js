const input = [3, 87, 45, 12, 7];
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => {
    return a - b;
  });
  return numbers[0] + numbers[1];
}
console.log(sumTwoSmallestNumbers(input));
