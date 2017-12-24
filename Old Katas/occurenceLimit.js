function deleteNth(arr,n){
    // ...
    let answer = [];
    let freq = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const index = answer.indexOf(element);
        if (index === -1) {
            answer.push(element)
            freq.push(1)
        } else {
            if (freq[index] < n) {
                answer.push(element);
                freq[index]++;
                freq.push('repeated');
            }
        }
    }
    return answer;
}
