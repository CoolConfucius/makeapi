'use strict'

var port = '4000'; 

var main = {
  init: function(){

    $('#getTime').click(main.getTime);
    $('#getUrl').click(main.getUrl);
    $('#exSquare').click(main.exSquare);
    $('#exAdd').click(main.exAdd);
    $('#exSentence').click(main.exSentence);
    $('#exGravatar').click(main.exGravatar);
  },

  getTime: function(){
    $.get('http://localhost:'+port+'/time', function(data){
      console.log(data);
      $('#timestamp').text(data); 
    })
  },
  
  getUrl: function(){
    main.url = $('#url').val();
    main.slash(); 
    $.get('http://localhost:'+port+ main.url , function(data){      
      if (main.url.match(/[^/]+/g)[0] === 'gravatar') { 
        $('#image').attr('src', 'http://'+data);
      };
      $('#resUrl').text(data); 
    })
  }, 

  slash: function(){
    if (main.url.split('')[0] !== '/') { 
      main.url = '/'+main.url;
    };
  }, 

  examples: {
    square: '/math/square/5', 
    add: '/math/add/3/3/3',
    sentence: '/sentence/A%20Sentence%20here',
    gravatar: '/gravatar/samer.buna@gmail.com'
  }, 

  exSquare: function(){
    $('#url').attr('value', main.examples.square);
  },
  exAdd: function(){
    $('#url').attr('value', main.examples.add);
  },
  exSentence: function(){
    $('#url').attr('value', main.examples.sentence);
  },
  exGravatar: function(){
    $('#url').attr('value', main.examples.gravatar);
  }, 


};

$(document).ready(main.init);