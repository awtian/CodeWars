// function longestSlideDown (pyramid) {
//  let total = pyramid[0][0];
//  for (let i = 0; i < pyramid.length; i++) {
//      const element = pyramid[i];
//      total += element[i-1]
//  }    
//  return total;
// }

// LACK UNDERSTANDING
// function longestSlideDown (pyramid) {
//     let pyramidSum = [];
//     pyramid.forEach((r, i) => {
//       pyramidSum.push(r.map((e) => {
//         return (i === pyramid.length - 1) ? e : 0;
//       }));
//     });
  
//     for (let i = pyramidSum.length - 2; i >= 0; i--) {
//         for (let j = 0; j < pyramidSum[i].length; j++) {
//             pyramidSum[i][j] = pyramid[i][j] + Math.max(pyramidSum[i+1][j], pyramidSum[i+1][j+1]);
//         }
//     }
//     return pyramidSum[0][0];
//   }

function longestSlideDown (pyramid) {
    let pyramidSum = pyramid.slice(0);
        pyramidSum = pyramidSum.map(e => e.map(d => 0));
        pyramidSum[pyramid.length-1] = pyramid[pyramid.length-1]
    console.log(pyramid);
    console.log(pyramidSum);
  
    for (let i = pyramidSum.length - 2; i >= 0; i--) {
        for (let j = 0; j < pyramidSum[i].length; j++) {
            pyramidSum[i][j] = pyramid[i][j] + Math.max(pyramidSum[i+1][j], pyramidSum[i+1][j+1]);
        }
    }
    return pyramidSum;
  }

  //CODEWARS SOLUTION 
//   brianpck - understandable
// function longestSlideDown (pyramid) {
//     for (var i = pyramid.length - 2; i > -1; i--) {
//       for (var j = 0; j < pyramid[i].length; j++) {
//         pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
//       }
//     }
//     return pyramid[0][0];
//   }

// perkee, dubdjon!, pompeu2004 -- right now not understandable
// function longestSlideDown (pyramid) {
//   return pyramid.reduceRight((last,current)=>current.map(
//     (v,i)=>v+Math.max(last[i],last[i+1])
//   ))[0];
// }


  console.log(longestSlideDown(
    [[3],
     [7, 4],
     [2, 4, 6],
     [8, 5, 9, 3]]));
  

//   console.log(longestSlideDown(
//     [[75],
//      [95, 64],
//      [17, 47, 82],
//      [18, 35, 87, 10],
//      [20,  4, 82, 47, 65],
//      [19,  1, 23, 75,  3, 34],
//      [88,  2, 77, 73,  7, 63, 67],
//      [99, 65,  4, 28,  6, 16, 70, 92],
//      [41, 41, 26, 56, 83, 40, 80, 70, 33],
//      [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
//      [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
//      [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
//      [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
//      [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
//      [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]]));
  