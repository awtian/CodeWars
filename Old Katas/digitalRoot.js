function digital_root(n) {
    let stringed = String(n);
    let slength = stringed.length;
    let result = 0;
    for (let i = 0; i < stringed.length; i++) {
        const element = stringed[i];
        result += +element;
    }
    if (String(result).length === 1) {
        return result;
    } else {
        return digital_root(result);
    }
  }
  console.log(digital_root(16));
  console.log(digital_root(162));
  console.log(digital_root(1632));
  console.log(digital_root(16222));