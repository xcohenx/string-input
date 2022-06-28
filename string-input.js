let myBtn = document.getElementById("myBtn");
let inputText = document.getElementById("input");
let p = document.getElementById("message");
//Making a function that recognize if we have letters
function doesIncludeLetters(val) {
  if (!val) return true;
  const re = /^[a-zA-Z]+$/;
  return re.test(val);
}
//Adding a function that will work in case the function found letters and make the button disable if that condition is true
inputText.addEventListener("input", function (e) {
  const value = e.target.value;
  if (doesIncludeLetters(value)) myBtn.disabled = true;
  else myBtn.disabled = false;
});

myBtn.addEventListener("click", () => {
  p.innerHTML = inputText.value;
});

/*function find_longest_word(str) {
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for (var x = 1; x < array1.length; x++) {
    if (result.length < array1[x].length) {
      result = array1[x];
    }
  }
  return result;
}
console.log(find_longest_word("ido help me"));*/

function findLongestWord(str) {
  //split string into array
  const currectNumbers = 124971377725890;
  const splStrArray = currectNumbers.split(" ");

  //find the length of each item in the string
  const lengthofStringArray = splStrArray.map((item) => item.length);

  //find the max length
  const maxLengthinArr = Math.max(...lengthofStringArray);

  //match the word with the length
  const result = splStrArray.find((item) => item.length === maxLengthinArr);
  return result;
}
console.log(findLongestWord("124971377725890"));
