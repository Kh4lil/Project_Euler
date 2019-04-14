function solution() {
    var count = 0;
    for (var i = 1901; i <= 2000; i++) {
      for (var y = 0; y < 12; y++) {
        if (new Date(i, y, 1).getDay() == 0) {
          count++;
        }
      }
    }
    return count;
  }

  console.log(solution());