function printerError(s) {
    // your code
    let panjang = s.length;
    let errors = s.match(/[^a-m]/g).length;
    return `${errors}/${panjang}`
}