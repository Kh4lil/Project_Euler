function triangularSum(number) {
    var sum = 0;
    for(var i = 1; i <= number; i++) {
      sum = sum + i;
    }
    return sum;
  }

  function numberFactor(number) {
    var factors = [];
    var limit = number - 1;
    factors.push(1);
    factors.push(number);
      
    for(var i = 2; i < limit; i++) {
      if(number % i == 0) {
        factors.push(i);
        factors.push(number / i);
        limit = number / i;
      }
    }
    return factors.length;
  }

  function triangularNumberOverLimit(minFactor) {
    var number, tri_sum, divisors = 0;
      
    for(number = 1; divisors < minFactor; number++) {
      tri_sum = triangularSum(number);
      divisors = numberFactor(tri_sum);
    }
    return tri_sum;
  }
  
  console.log(triangularNumberOverLimit(500));

