function sumStrings(a,b) { 
    let newNum = "";
    let extras = 0;
    let maxlength = Math.max(a.length, b.length);
    for (let i = 1; i <= maxlength; i++) {
        let digit = (+a[a.length-i] || 0) + (+b[b.length-i] || 0) + (extras)
        if (digit > 9) {
            extras = Math.floor(digit/10);
            digit = digit%10; 
        } else {
            extras = 0
        }
       newNum = digit + newNum;
    }
    if (extras > 0) newNum = extras + newNum;
    if (newNum[0] == 0) newNum = newNum.slice(1)
    return newNum;
  }

  //my solution is one hella hacky shit.