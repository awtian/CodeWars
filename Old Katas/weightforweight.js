function orderWeight(strng) {
    // your code
    let arr = strng.split(' ')
    let urut = arr.map(x => x.reduce((a,b)=>a+b))
    console.log(urut);
    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        element.reduce((a,b) => a+b)
    }
}

console.log(orderWeight("103 123 4444 99 2000"));
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));

