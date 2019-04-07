
function primeNumbersBelow(number){
    var a = 0;
    var b = 0;
    var i = 2;
    while (i < number){
        var isPrime_ = true;
        for (var y = 2; y <= Math.sqrt(i); y++) 
        {
            if (i % y == 0 || i % 2 == 0)
            {
                isPrime_ = false; //Prime is only divisible by 1 and itself
            }
        }if (isPrime_ == true)
        {
            a = i;
            b = b + a;
            a = 0;
        }i++
}
console.log(b);
}

primeNumbersBelow(2000000);
