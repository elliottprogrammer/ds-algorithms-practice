// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

// First attempt
// function pyramid(n) {
//     for ( let row = 1; row <= n; row++ ) {
//         let stair = '';
//         for ( let col = 1; col <= col+2; col+=2 ) {
//             if ( col > 1 || col < col + 2 ) {
//                 stair = stair + '#'
//             } else {
//                 stair = stair + ' '
//             }
//         }
//         console.log( stair );
//     }
// }

// Alternate method..
// function pyramid(n) {
//     const max = n * n - 1;

//     for ( let row = 1; row <= n; row++ ) {
//         let stair = '';
//         for ( let col = 1; col <= max; col+2 ) {
//             if ( col <= (max - col) / 2 || col > ((max - col) / 2 ) + col ) {
//                 stair = stair + ' '
//             } else {
//                 stair = stair + '#'
//             }
//         }
//         console.log( stair );
//     }
// }

// Recursion attempt
function pyramid(n, row = 0, col = 0, stair = '') {
    const max = n * 2 - 1;
    const middle = Math.floor( max / 2 );
    if (row > n - 1) {
        return;
    }
    if (col > max - 1) {
        console.log(stair);
        
    }
    if ( col >= middle - row && col <= middle + row ) {
        stair = stair + '#';
    } else {
        stair = stair + ' ';
    }
    if (col >= max - 1) {
        console.log(stair);
        return pyramid(n, row+1, 0, '');
    } else {
        return pyramid(n, row, col+1, stair);
    }

    
}




module.exports = pyramid;
