//return the total number of smiling faces in the array
function countSmileys(arr) {
    let count = 0;
    const faces = /:|;/;
    const noses = /-|~/;
    const smiles = /D|[)]/;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(faces.test(element[0]) && (smiles.test(element[1]) || (noses.test(element[1]) && smiles.test(element[2])))) {
          count++
        }
        }
    return count;
}

console.log(countSmileys([]));
console.log(countSmileys([':D',':~)',';~D',':)']));
console.log(countSmileys([':)',':(',':D',':O',':;']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));