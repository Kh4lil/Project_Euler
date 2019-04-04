// Function: 

function multipleOf(number){
    var temp = 0;
    for(var i = 1; i <number; i++){
        if (i % 3 == 0 || i % 5 == 0)
        temp = temp + i;          
    }
return temp;

}

console.log(multipleOf(10));
console.log(multipleOf(1000));