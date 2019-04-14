
  
  function amicableNumbersUnder(num){
    var sum = 0; 
    for( i = 220; i < num; i++){
      var eq_Number = sumOfProperDivisors(i);
  
      if(eq_Number !== i && eq_Number < num && sumOfProperDivisors(eq_Number) === i){
        sum += i;
      }
    }
  
    return sum;
  }

  function sumOfProperDivisors(n){
    let sum = 1;
  
    for(let i = 2; i * i <= n; i++){
      if(n % i === 0){
        sum += i + (n / i);
      }
    }
  
    return sum;
  }

  console.log(amicableNumbersUnder(10000));