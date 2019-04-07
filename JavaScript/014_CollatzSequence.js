
var masterArray = [];
function Collatz_Sequence(startNumber){
    var sequenceList = [startNumber];
    var next = 0;
    var next_startNumber = startNumber + 1;
    while (next != 1){
       if(startNumber % 2 == 0){
           startNumber = startNumber/2;
           sequenceList.push(startNumber);
           next = startNumber;
       }else{
           startNumber = 3*startNumber + 1;
           sequenceList.push(startNumber);
           next = startNumber;
       }
    } 
    masterArray.push(sequenceList);  
    return masterArray;
   
}
for (i = 13; i < 1000000; i++){
    Collatz_Sequence(i);
}

console.log(masterArray.reduce(function(a,i,ii){
    if (ii === 1){
      return a
    };
    if (i.length > a.length){
      return i
    }
    return a
  })[0]);





