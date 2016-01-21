var wordCount = function(text){
  var count = 0;
  for (var i = 0; i < text.length; i++){
    if (text[i] === " ") {
      count = count + 1; 
    };
  }
  return count + 1; 
}; 

var letters = function(text){
  var regexp = /[a-z]/gi;
  var array = text.match(regexp); 
  return array.length; 
};

var spaceCount = function(text){
  var count = 0; 
  for (var i = 0; i < text.length; i++) {
    if (text[i] === " "){
      count = count + 1;
    }
  }
  return count; 
};

var superCounter = function(text){
  var singleObject = {
    words: wordCount(text),
    spaces: spaceCount(text), 
    letters: letters(text)
  };
  return singleObject;
};

module.exports = superCounter; 