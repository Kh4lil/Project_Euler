var baseNumbers = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

var baseTens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

var countLettersCountingToOneThousand = function() {
    var count = 0;

    //1-9
    for (var i = 0; i < baseNumbers.length; i++) {
        var baseNumber = baseNumbers[i];
        count += baseNumber.length;
    }

    //10-19
    for (var i = 0; i < teens.length; i++) {
        var teen = teens[i];
        count += teen.length;
    }

    //20-99
    for (var i = 0; i < baseTens.length; i++) {
        var baseTen = baseTens[i];
        for (var j = 0; j < baseNumbers.length; j++) {
            var baseNumber = baseNumbers[j];
            count += baseTen.length + baseNumber.length;
        }
    }

    var oneToOneHundred = count;

    //100-999
    for (var i = 1; i < baseNumbers.length; i++) {
        var hundredsPrefix = baseNumbers[i] + "hundred";

        count += hundredsPrefix.length;
        count += oneToOneHundred;
        count += 99 * (hundredsPrefix + "and").length;
    }

    //1000
    count += "onethousand".length;

    return count;
};


console.log(countLettersCountingToOneThousand());