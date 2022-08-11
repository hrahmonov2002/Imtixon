// =========== 1-masala =========
function reverseString(str) {

    var splitString = str.split(" ");
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(" "); 
  
    return joinArray; 
};
 
reverseString("Alisher Qodirov");

// ============ 2-masala ===========

let wordListTaker = [];

let wordListResult = [];

function wordsDouble(word) {
  wordListTaker = word.split('');

  for (let i = 0; i < wordListTaker.length; i++) {
    wordListResult.push(wordListTaker[i], wordListTaker[i]);
  }

  let resultWord = wordListResult.join('');

  return resultWord; 
}

console.log(wordsDouble('Salom dunyo!'));

// ============== 3-masala ============

let listOfNumers = [2, 9, 12, 13, 22, 36, 122, 560];

let endingResult = [];

function logicMath() {
  for (let i = 0; i < listOfNumers.length; i++) {
    if ((Math.sqrt(listOfNumers[i]) % 1) == 0) {
      endingResult.push (Math.sqrt(listOfNumers[i]));
    } else {
      endingResult.push(Math.pow(listOfNumers[i], 2));
    }
  }

}
logicMath();

console.log(endingResult);

