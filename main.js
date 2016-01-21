'use strict'

var port = '4000'; 
// var main.url; 

var main = {
  init: function(){

    $('#getTime').click(main.getTime);
    $('#getUrl').click(main.getUrl);
    $('#getMath').click(main.getMath);
    $('#getAdd').click(main.getAdd);
    $('#exSquare').click(main.exSquare);
  },
  getTime: function(){
    $.get('http://localhost:'+port+'/time', function(data){
      console.log(data);
      $('#timestamp').text(data); 
    })
  },
  getMath: function(){
    main.url = $('#math').val(); 
    main.slash(); 
    // main.slash2();
    $.get('http://localhost:'+port+'/math'+main.url, function(data){
      console.log(data);
      $('#solution').text(data); 
    })
  },
  getAdd: function(){
    main.url = $('#add').val(); 
    main.slash(); 
    // main.slash2();
    $.get('http://localhost:'+port+'/math/add'+main.url, function(data){
      $('#solution').text(data); 
    })
  },
  getUrl: function(){
    main.url = $('#url').val();
    main.slash(); 
    $.get('http://localhost:'+port+ main.url , function(data){
      console.log(data);
      console.log('url',main.url);
      console.log('url array',main.url.match(/[^/]+/g)[0]);
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

  slash2: function(){
    var array = main.url.split(/[\W | \, | \_, | \-]/);
    main.url = array.join('/');
  }, 

  examples: {
    square: '/math/square/5', 
    add: '/math/add/3/3/3',
    sentence: '/sentence/A%20Sentence%20here',
    gravatar: '/gravatar/samer.buna@gmail.com'
  }
  // , 

  // exSquare: function(){
  //   $('#url')
  // }


};

$(document).ready(main.init);