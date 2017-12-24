var maxSequence = function(arr){
    // ...
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let highest = 0;
        let total = 0;
        for (let j = i; j < arr.length; j++) {
            total += arr[j]
            if (total > highest) highest = total;
        }
        if (highest > max) max = highest;
    }
    return max;
  }