// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// First attempt..
// function anagrams(stringA, stringB) {
//     const cleanStringA = stringA.replace(/[^\w]+/g, '').toLowerCase();
//     const cleanStringB = stringB.replace(/[^\w]+/g, '').toLowerCase();
//     const stringMapA = {};
//     const stringMapB = {};
//     for ( let char of cleanStringA ) {
//         stringMapA[ char ] = stringMapA[ char ] + 1 || 1;
//     }
//     for ( let char of cleanStringB ) {
//         stringMapB[ char ] = stringMapB[ char ] + 1 || 1;
//     }

//     const keysA = Object.keys( stringMapA );
//     const keysB = Object.keys( stringMapB );

//     // It's not an anagram if the number of chars are not the same.
//     if ( keysA.length !== keysB.length ) {
//         return false;
//     }

//     let isAnagram = true;
//     keysA.forEach( key => {
//         if ( stringMapA[ key ] !== stringMapB[ key ] ) {
//             isAnagram = false;
//         }   
//     } );

//     return isAnagram;
// }


// Second take... (cleaned up).
// function anagrams(stringA, stringB) {

//     const stringMapA = buildCharMap( stringA );
//     const stringMapB = buildCharMap( stringB );;

//     // It's not an anagram if the number of chars are not the same.
//     if ( Object.keys( stringMapA ).length !== Object.keys( stringMapB ).length ) {
//         return false;
//     }

//     // Check both char maps have same chars and values, otherwise not an anagram (return false).
//     for ( let char in stringMapA ) {
//         if ( stringMapA[ char ] !== stringMapB[ char ] ) {
//             return false;
//         }   
//     }

//     return true;
// }

// function buildCharMap( str ) {
//     const charMap = {};
//     for ( let char of str.replace(/[^\w]+/g, '').toLowerCase() ) {
//         charMap[ char ] = charMap[ char ] + 1 || 1;
//     }

//     return charMap;
// }

// Another take...
function anagrams(stringA, stringB) {
    const cleanStringA = stringA.replace(/[^\w]+/g, '').toLowerCase().split('').sort().join();
    const cleanStringB = stringB.replace(/[^\w]+/g, '').toLowerCase().split('').sort().join();

    return cleanStringA === cleanStringB;

}

module.exports = anagrams;
