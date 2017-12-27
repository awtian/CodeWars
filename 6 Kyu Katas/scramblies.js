function scramble(str1, str2) {
    var arr1 = str1.split("").sort();
    var arr2 = str2.split("").sort();
    var i = 0;
    for(var x = 0; i < arr2.length && x < arr1.length; x++) {
        if(arr2[i] === arr1[x]) i++;
    }
    return i === arr2.length;
}