function GetSum( a,b )
{
   //Good luck!
   let base;
   let upper; 
    a > b ? base = b: base = a;
    base === a ? upper = b: upper = a;
    let result = 0;
    for (let i = base; i < upper; i++) {      
        result += i;
    }
    return result;
}