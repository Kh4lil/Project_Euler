var sumOfSquaresEach = 0;
var sumOfSquaresGroup = 0;

for (var i = 1; i <= 100; i++){
    sumOfSquaresEach = sumOfSquaresEach + Math.pow(i, 2);
}

for (var i = 1; i <= 100; i++){
    sumOfSquaresGroup = sumOfSquaresGroup + i;
}
sumOfSquaresGroup = Math.pow(sumOfSquaresGroup, 2);

console.log(sumOfSquaresGroup - sumOfSquaresEach);