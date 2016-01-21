'use strict'; 

var http = require('http');  
var math = require('./math'); 
var sentence = require('./sentence');
// var md5 = require('md5'); 
// var _ = require('lodash'); 

var PORT = 4000; 

var server = http.createServer(function(req, res){
  console.log('url:', req.url); 

  var urlParts = req.url.match(/[^/]+/g); 
  console.log('urlParts,', urlParts);

  switch(urlParts[0]) {
    case 'time':
      var timestamp = Date.now(); 
      res.end(timestamp + '\n');
      break; 
    case 'math': 
      switch(urlParts[1]) {
        case 'add': 
          var numbers = []; 
          for (var i = 2; i < urlParts.length; i++) {
            numbers.push( parseInt(urlParts[i]) ); 
          };
          var sum = math.add(numbers); 
          res.end(sum + '\n'); 
          break; 

        case 'subtract': 
          var numbers = []; 
          for (var i = 2; i < urlParts.length; i++) {
            numbers.push( parseInt(urlParts[i]) ); 
          };
          var difference = math.subtract(numbers); 
          res.end(difference + '\n'); 
          break; 

        case 'multiply':
          var numbers = []; 
          for (var i = 2; i < urlParts.length; i++) {
            numbers.push( parseInt(urlParts[i]) ); 
          };
          var product = math.multiply(numbers); 
          res.end( product + '\n'); 
          break;           

        case 'divide': 
          var numbers = []; 
          for (var i = 2; i < urlParts.length; i++) {
            numbers.push( parseInt(urlParts[i]) ); 
          };
          var quotient = math.divide(numbers); 
          res.end(quotient + '\n'); 
          break; 

        case 'square': 
          if (urlParts.length === 3) {
            var squared = math.square( parseInt(urlParts[2]) );
            res.end(squared + '\n'); 
          } else {
            var numbers = [];
            for (var i = 2; i < urlParts.length; i++) {
              numbers.push( parseInt(urlParts[i]) );
            };
            var squares = math.square(numbers).join(' ');
            res.end(squares + '\n');
          }
          break; 

        case 'cube': 
          if (urlParts.length === 3) {
            var cubed = math.cube( parseInt(urlParts[2]) );
            res.end(cubed + '\n'); 
          } else {
            var numbers = [];
            for (var i = 2; i < urlParts.length; i++) {
              numbers.push( parseInt(urlParts[i]) );
            };
            var cubes = math.cube(numbers).join(' ');
            res.end(cubes + '\n');
          }
          break; 

        case 'root':
          if (urlParts.length === 3) {
            var squareroot = Math.sqrt( parseInt(urlParts[2]) );
            res.end(squareroot + '\n'); 
          } else {
            var numbers = [];
            for (var i = 2; i < urlParts.length; i++) {
              numbers.push( Math.sqrt( parseInt(urlParts[i]) ) );
            };
            var roots = numbers.join(' ');
            res.end(roots + '\n');
          }
          break;           

        default: 
          if (urlParts[2]) {
            var mod = parseInt(urlParts[1]) % parseInt(urlParts[2]);
            res.end(mod + '\n'); 
          } else {
            if (urlParts[1]) {
              res.end(urlParts[1] + '\n');
            } else {
              res.end('No math'); 
            }
          }

      } // end of math start of sentence 
    case 'sentence': 
      var decoded = decodeURI(urlParts[1]); 
      var object = sentence(decoded); 
      res.write(decoded + '\n');
      res.write('Words: '+object.words+'\n');
      res.write('Spaces: '+object.spaces+'\n');
      res.write('Letters: '+object.letters+'\n');
      res.end();



      break; 
    default: 
    res.end('nothing');
  }
}); 

server.listen(PORT, function(){       
  console.log("Server now listening on port " + PORT + "! ;)")
});

console.log('end of file'); 
