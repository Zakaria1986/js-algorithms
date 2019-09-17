// reusable function to reverse str 

function revStr(str){
  // 'str' argument is split into arrays of words using the 'split()'
var strSplit = str.split(' '); 
var revStr = []; // this empty string will be use to store reversed words 
// Arry.isArray() is the check if the strSplit is an array, if its true then it runs the forEach looping function to loop through the  strSplit, which then take a callback function. 
if(Array.isArray(strSplit)){
 strSplit.forEach(word =>{
   // words are split into invidual letters and stored in the local variable. First word is split into invididual letters arrays, then gets reversed and join back to whole word using join('') function. 
    var localWord = word.split('').reverse().join(''); 
    revStr.push(localWord);// localWord gets pushed to globle revStr array. 
    });
}else{
  console.log(str);
}
// revStr array get join and back to string as reversed string
return revStr.join(' ');
}

revStr('reverse the individual words and impress me');
