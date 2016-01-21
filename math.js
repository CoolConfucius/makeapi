module.exports = {
  add: function sum(x){
    return x.reduce(function(acc, curr){
      return acc + curr; 
    }, 0);
  }, 
  subtract: function difference(x){
    if (x.length === 1) { return x; };
    return x.reduce(function(acc, curr){
      return acc - curr; 
    });
  } , 
  multiply: function product(x){
    return x.reduce(function(){
      return acc * curr; 
    }, 1);
  }, 
  divide: function quotient(x){
    if (x.length === 1) { return 'infinity'; };
    return x.reduce(function(acc, curr){
      return acc / curr; 
    })
  }, 
  square: function secondpower(x){
    if (typeof x === number) { return x*x; };
    return x.map(function(entry){
      return x*x; 
    });
  }
};