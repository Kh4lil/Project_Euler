var a = 0; b = 1;
var c = 0;
var d = 0;  
for (var i = 1; i < 4000000; i++){
    c = b + a;
    a = b;
    b = c;  

    if (c % 2 == 0 && c < 4000000)
    {
        d = d + c;
    }
}
console.log(d);



