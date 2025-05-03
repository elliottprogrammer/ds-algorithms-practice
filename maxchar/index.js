// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// 1st Brute force solution..
// function maxChar(str) {
//     const charsObj = {};
//     let largest = 0;
//     let largestKey = str[0];
    
//     for ( char of str) {
//         if ( ! charsObj.hasOwnProperty(char) ) {
//             charsObj[char] = 1;
//         } else {
//             charsObj[char] += 1;
//         }
//         if ( charsObj[char] > largest ) {
//             largest = charsObj[char];
//             largestKey = char;
//         }
//     }

//     return largestKey;
// }

// Optimized (cleaned up)
function maxChar(str) {
    const charMap = {};
    let largest = 0;
    let largestKey = str[0];
    
    for ( let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
        
        if ( charMap[char] > largest ) {
            largest = charMap[char];
            largestKey = char;
        }
    }

    return largestKey;
}

module.exports = maxChar;
