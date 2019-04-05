var array = [];
for (i = 999; i >= 100; i--){
    for(y = i; y >= 100; y--){
        result = i * y;
        resultReversed = reverseNum(result);
        if (result == resultReversed){
            array.push(resultReversed);           
        }
    }
}
console.log(Math.max(...array));

function reverseNum(number){
    var str = number.toString();
    var str2 = str.split('').reverse().join('');
    parseInt(str2);
    number = str2;
    return number;
    
}

