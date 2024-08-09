module.exports = function reverse (n) {
    let initNumber = n;
    if (n < 0) initNumber = -initNumber
    const stringReverse = String(initNumber).split('').reverse().join('');
    return Number(stringReverse)
}
