// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// First attempt. Array.splice() method.
// function chunk(array, size) {
//     const numChunks = Math.ceil( array.length / size );
//     const chunked = [];
//     for ( let i = 1; i <= numChunks; i++ ) {
//         const slice = array.splice( 0, size );
//         chunked.push( slice );
//     }

//     return chunked;
// }

// Iterating each element (without Array.splice() function)
function chunk(array, size) {
    const chunked = [];
    for ( let element of array ) {
        const last = chunked[ chunked.length - 1 ];
        if ( ! last || last.length === size ) {
            chunked.push( [ element ] );
        } else {
            last.push( element );
        }
    }

    return chunked;
}

module.exports = chunk;
