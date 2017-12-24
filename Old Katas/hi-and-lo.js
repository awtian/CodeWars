function highAndLow(numbers){
    // ...
    let arr = numbers.split(' ');
    arr.sort((a ,b) => b - a);
    return arr[0] + ' ' + arr[arr.length-1]
  }