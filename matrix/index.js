// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result[i] = Array(n - 1);
    }
    let count = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while(startCol <= endCol && startRow <= endRow) {
        for( let i = startCol; i <= endCol; i++ ) {
            result[startRow][i] = count;
            count += 1;
        }
  		startRow += 1;
  		for( let i = startRow; i <= endRow; i++ ) {
            result[i][endCol] = count;
            count += 1;
        }
  		endCol -= 1;
  		for( let i = endCol; i >= startCol; i-- ) {
            result[endRow][i] = count;
            count += 1;
        }
  		endRow -= 1;
  		for( let i = endRow; i >= startRow; i-- ) {
            result[i][startCol] = count;
            count += 1;
        }
  		startCol += 1;    
    }
    console.log(result);
    return result;
}

module.exports = matrix;
