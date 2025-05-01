// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// This one is most performant!
// At most it's O(n) / 2 (O of n divided by 2)
function palindrome(str) {
    const strArr = str.split('');
    let middle = Math.round( strArr.length / 2 );
    let same = true;
    for (let i = 0; i <= middle; i++) {
        if ( strArr[i] !== strArr[strArr.length - (i + 1)] ) {
            same = false;
            break;
        }
    }

    return same;
}

// This one is O(n)

// function palindrome(str) {
//     return str.split('').every( ( char, index, array ) => {
//         return char === array[ array.length - (index + 1) ];
//     });
// }

// This one is O(n)

// function palindrome(str) {
//     const reverse = str.split('').reverse().join('');

//     return reverse === str;
// }

module.exports = palindrome;
