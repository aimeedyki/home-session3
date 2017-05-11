'use strict';

function StringSplosion (word) {
this.word = word;
let splodeArray = [];
  
this.manipulate = function (word) {
	for( let counter = 1; counter <= this.word.length; counter++){
   
    let splodeWord = this.word.substr(0, counter);
    splodeArray.push(splodeWord);
    }
return splodeArray.join('');
}
return this;
  
}


module.exports = StringSplosion;
