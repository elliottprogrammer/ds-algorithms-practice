// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// First attempt.
// function steps(n) {
//     for ( let row = 1; row <= n; row++ ) {
//         let stair = '';
//         for ( let col = 1; col <= n; col++ ) {
//             if ( col <= row ) {
//                 stair = stair + '#'
//             } else {
//                 stair = stair + ' '
//             }
//         }
//         console.log( stair );
//     }
// }

// // Recursive attempt
// function steps(n) {

//     printStair(n, row)
// }

// function printStair(n = 0, row = 1) {
//      if (row > n) {
//         return;
//      }
//      let stair = '#'.repeat(row);
//      stair = stair + ' '.repeat(n - row);
//      console.log(stair);
//      row += 1;
//      printStair(n, row);
// }

// Another recursive attempt!

// steps(3)
function steps(n, row = 1) {
    if (row > n) {
        return;
    }
    let stair = '#'.repeat(row);
    stair += ' '.repeat(n - row);
    console.log(stair);
    row ++;
    steps(n, row);
}

module.exports = steps;
