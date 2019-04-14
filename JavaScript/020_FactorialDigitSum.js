function factorial_Of(number){
    var result = 1n;
    for (i = number; i >= 1n; i--){
        var y = 1n;
        y = i;
        result = result * y;
    }
    return sum_Of_Result(result);
}

function sum_Of_Result(result){
    var result_InArray = Array.from(result.toString()).map(Number);
    var sum = 0;
    for (i = 0; i < result_InArray.length; i++){
        temp = result_InArray[i];
        sum = sum + temp;
        temp = 0;
        
    }return sum;
}

console.log(factorial_Of(100n));
