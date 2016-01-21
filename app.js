'use strict'; 

var http = require('http');  
var math = require('./math'); 
// var sentence = require('./sentence');
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

        default: 
          if (urlParts[3]) {
            var mod = parseInt(urlParts[2]) % parseInt(urlParts[3]);
            res.end(mod + '\n'); 
          } else {
            if (urlParts[2]) {
              res.end(urlParts[2] + '\n');
            } else {
              res.end('No math'); 
            }
          }

      }
      break; 
    default: 
    res.end('nothing');
  }
}); 

server.listen(PORT, function(){       
  console.log("Server now listening on port " + PORT + "! ;)")
});

console.log('end of file'); 
