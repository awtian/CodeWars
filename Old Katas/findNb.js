function findNb(m) {
    // your code
    let result = 0;
    for (let i = 1; result <= m; i++) {
        result += Math.pow(i, 3)
        if (result === m) return i;
    }
    return -1
}
