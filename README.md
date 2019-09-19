# js-algorithms
This are my version of basic JS Algorithms.

Three differnt approch to reversing string and arrays
# 1
function reverseString(str){
// splitting the sentence into word of arrays
var strWord = str.split(' '); 
// created an empty erry to store reversed arrays
var newStr = []; 
// Looping through the array from last index, and looping back 
for(var i = strWord.length -1; i >= 0; i--){
  // spliting the words into invidual letters of array
  var word = strWord[i].split('');
  // empty string will be appending during the second loop. 
  var newWord = '';
  // looping rhought the last index array of letters
  for(var l = word.length -1; l >= 0; l--){
    // adding the letter in to newWord; 
    newWord+=word[l]; 
  } 
  console.log(newWord);
  // pushing the indivudal words into array 
  newStr.push(newWord); 
   }
// this is where newStr, array of reversed word is join to   reseved long string. 
  return newStr.join(' '); 
  }

  reverseString('reversing entire string that includes words and the letters. run the code to see it for yourself'); 
