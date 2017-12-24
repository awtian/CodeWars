function rot13(message){
    //your code here
    let arr = message.split('');
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let index = alpha.indexOf(element.toLowerCase());
        let rot13 = (index + 13)%26;
        arr[i] === arr[i].toUpperCase() ? arr[i] = arr[rot13].toUpperCase() : arr[i] = arr[rot13];
    }
    return arr.join('');
  }