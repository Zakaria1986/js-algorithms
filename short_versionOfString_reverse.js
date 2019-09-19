// Function this function is returning str after minipultion

// First a function takes a list of arrays as an argument. 
function reverseIntoPlaces(str =[]){
  // Run a for loop, first inext is set to 0 then checks  to see if the index is less them str leng. str.length/2 gives us half of the array length
  for( var i = 0; i < (str.length/2); i++){
    // story the looped array in the localVar; 
    var localVar = str[i];
    // Now Setting the first element of array to the last element of array. Here - i in the str[str.length -1 - i] is the most important bit and thats what gets give the counter position of the i positon 
    str[i] = str[str.length -1 - i];
    // Here last element of the arry to the firt element of array and bu tthis will set the index to current index position
    str[str.length -1 - i] = localVar;
  }
  return str;
}

// string bellow turned into a string by using split function. 
reverseIntoPlaces('Hell0, we are getting reversed, so watch us'.split(' '));

