function sumDigPow(a, b) {
    // Your code here
    let answer = [];
    for (let i = a; i < b; i++) {
        let stringed = String(i);
        let sLength = stringed.length;
        let total = 0;
        for (let i = 0; i < sLength; i++) {
            total += Math.pow(+stringed[i], i+1);
        }
        if (total === i) answer.push(i);
    }
    return answer;
  }
  