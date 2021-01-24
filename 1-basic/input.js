var sqrt = function(x) {
    var isGoodEnough = function(guess) {
      return Math.abs(guess * guess - x) / x < 0.001;
    };
    
    var improve = function(guess) {
      return (guess + x / guess) / 2;
    };
    
    var sqrIter = function(guess) {
      return (isGoodEnough(guess)) ? guess : sqrIter(improve(guess))
    };
    
    return sqrIter(1.0);
  };
  console.log(sqrt(2))
  