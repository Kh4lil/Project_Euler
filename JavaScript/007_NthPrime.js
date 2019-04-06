function isPrime(number){
    if(number == 2){
        return true;
    }
    if (number % 2 == 0 || number <= 1){
        return false;
    }
    for(var i = 3; i <= number-1; i++, i++){
        if(number % i == 0){
            return false;
        }
    }
    return true;
}

function NthNumber(num){
    var array = [];
    for (var i = 2; i <= 10000000000000; i++){
        if(isPrime(i) && array.length != num){
            array.push(i);          
        }if(array.length == num){
            break;
        }
    }console.log(array[num-1]);
}

NthNumber(10001);