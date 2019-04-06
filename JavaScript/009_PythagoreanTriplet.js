
for(i = 200; i < 1000; i++){
    for(y = 200; y < 1000; y++){
        for(z = 200; z < 1000; z++){
            if ((i < y) && (i + y + z == 1000) && ((i*i + y*y == z*z))){
                console.log("a = " + i + " b = " + y + " c = " + z);
                console.log("Product = " + i*y*z);
            }        
        }
    }
}