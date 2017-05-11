'use strict';

function reverseString (word) {
  let reverseWord = "";
   if(word === "") {
				return null;
	}
 
	for(let counter = word.length-1; counter >= 0; counter--){
     
     reverseWord += word.charAt(counter);
    }
  if (reverseWord == word){
    return true;
  } else {
    return reverseWord;
  }
}

module.exports = {
    reverseString : reverseString
};