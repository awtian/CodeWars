function solution(digits){
    let highest = 0;
    for (let i = 0; i < digits.length-4; i++) {
        const proses = +digits.slice(i,i+5);
        if (proses > highest) highest = proses;
    }
    return highest;    
}
