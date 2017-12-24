String.prototype.toJadenCase = function () {
    //...
    let arr = String.split(' ');
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let arrEle = element.split('');
        arrEle[0] = arrEle[0].toUpperCase();
        ans.push(arrEle.join(''))
    }
    return ans.join(' ');
  };