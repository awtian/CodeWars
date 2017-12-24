// OBJECT IS SO EFFICIENT. 
var sum_pairs=function(ints, s){
    var seen = {}
    for (var i = 0; i < ints.length; ++i) {
      if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
      seen[ints[i]] = true
    }
}


// var sum_pairs=function(ints, s){
//     //your code here
//     let ans;
//     let max = ints.length;
//     for (let i = 0; i < ints.length; i++) {
//         let pair = s - ints[i];
//         let pairIndex = ints.indexOf(pair);
//         let high;
//         if ((pairIndex !== i) && (pairIndex !== -1)) high = Math.max(i, pairIndex);
//         if ((high < max))  {
//         ans = [ints[i], ints[pairIndex]];
//         max = high;
//         };
//         if (i > max) break;
//     }
//   return ans;
// }


//test
let l= [1, 4, 8, 7, 3, 15];
console.log(sum_pairs(l, 8));


// var sum_pairs=function(ints, s){
//     //your code here
//     let ans;
//     let max = ints.length;
//     for (let i = 0; i < ints.length; i++) {
//         const elementi = ints[i];
//         for (let j = i+1; j < ints.length; j++) {
//             const elementj = ints[j];
//             let high = Math.max(i, j);
//             if (high < max && (elementi+elementj === s)){
//                 ans = [elementi, elementj]
//                 max = high;
//             }
//         }
//     }
//     return ans;
// }