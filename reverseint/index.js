// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     const isNeg = n < 0 ? true : false;
//     return isNeg
//         ? - Math.abs( parseInt( n.toString().split('').reverse().join('') ) )
//         : parseInt( n.toString().split('').reverse().join('') );
// }

// OR...
function reverseInt(n) {
    // Using Math.sign() to determine if it's positive or negative number.
    return parseInt( n.toString().split('').reverse().join('') ) * Math.sign( n );
}

module.exports = reverseInt;
