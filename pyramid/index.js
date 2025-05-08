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

function pyramid(n) {
    for ( let row = 1; row <= n; row++ ) {
        let stair = '';
        for ( let col = 1; col <= col+2; col+=2 ) {
            if ( col > 1 || col < col + 2 ) {
                stair = stair + '#'
            } else {
                stair = stair + ' '
            }
        }
        console.log( stair );
    }
}

module.exports = pyramid;
