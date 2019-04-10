

function getDigits (power) {
    var array_Digits = [];
    array_Digits[0] = 1;
    while (power > 0) {
        for (var i = array_Digits.length-1; i >= 0; i--) {
            array_Digits[i] *= 2;
            if (array_Digits[i] > 9) {
                array_Digits[i] -= 10;
                array_Digits[i+1] = array_Digits[i+1] || 0;
                array_Digits[i+1] += 1;
            }
        }
        power--;
    }

    var sum = 0;
    var result_Sum = 0;
    
    for(i = 0; i <= array_Digits.length; i++){
        if (array_Digits[i] > 0){
            temp = array_Digits[i];
            result_Sum = temp + result_Sum;}
        
}console.log(result_Sum)

    //return array_Digits;
}


getDigits(1000);

