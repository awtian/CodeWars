function createPhoneNumber(numbers){
    let stringed = numbers.map(x => x.toString()).join('')
    return `(${stringed.slice(0,3)}) ${stringed.slice(3,6)}-${stringed.slice(6)}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
