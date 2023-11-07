//Функция удаляющая согласные буквы из входящей строки
//Пример:
// Input: "This website is for losers LOL!"
// Output: "Ths wbst s fr lsrs LL!"
// Input: "No offense but,\nYour writing is among the worst I've ever read"
// Output: "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
// Input: "What are you, a communist?"
// Output: "Wht r y,  cmmnst?"

// console.log(arrayVowels.includes("a"));
let input = "No offense but,\nYour writing is among the worst I've ever read";
// рабочая и самая короткая через строку
function disemvowel(str) {
  str = str.replace(/[aAeEiIoOuU]/gi, "");
  return str;
}
console.log(disemvowel(input));
// рабочая и не эффективная
function disemvowel1(str) {
  let arrayVowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let strArray = str.split(""); // создание массива из входящей строки
  let answer = strArray.filter(function sort(element) {
    return arrayVowels.includes(element) ? false : true;
  });
  str = answer.join("");
  return str;
}
console.log(disemvowel1(input));
// ниже не рабочая
function disemvowel2(str) {
  let arrayVowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  str = str.split("");
  str.forEach((element, index) => {
    // console.log(element + ": " + index);
    arrayVowels.includes(element)
      ? str.splice(index, 1)
      : // console.log("vowel")
        null;
  });
  str = str.join("");
  return str;
}
// console.log(disemvowel("This website is for losers LOL!"));
console.log(input, "=>");
console.log(disemvowel2(input));
