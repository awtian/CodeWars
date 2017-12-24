function queueTime(customers, n) {
    //TODO
    let process = customers.splice(0, n)
    let time = 0;
    if (customers.length === 0) return time;
    else { 
      while(customers.length > 0) {
        let findzero = process.indexOf(0);
        while (findzero === -1) {
            process.map(every => every-1)
            time++
            findzero = process.indexOf(0);
        }

        if (findzero !== -1) {
            process.splice(findzero,1);
            if (customers.length > 0) process.push(customers.splice(0,1)); 
        }

        if (process.length === 0) {
            return time
        }
    }
    }
  }
  
console.log(queueTime([], 1));
console.log(queueTime([1,2,3,4], 1));
console.log(queueTime([2,2,3,3,4,4], 2));
console.log(queueTime([1,2,3,4,5], 100));

// http://www.codewars.com/kata/57b06f90e298a7b53d000a86/solutions/solutions