// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     let arr = [0,1];
    
//     for(let i = 2; i <= n; i++) {
//         const num1 = arr[i - 1];
//         const num2 = arr[i - 2];
//         arr.push(num1 + num2);
//     }
    
//     return arr[n];
// }

// Recursive solution
// function fib(n, arr = [0,1], i = 1) {
//     if (i >= n) {
//         return arr[n];
//     }
//     const num1 = arr[i];
//     const num2 = arr[i - 1];
//     arr.push(num1 + num2);
    
//     return fib(n, arr, i + 1);

// }

// // Recursive solution (memorize this!)
// function fib(n) {
//     if (n < 2) {
//         return n;
//     }
    
//     return fib(n - 1) + fib(n - 2);
// }

// Memoization (Remember/memorize this!)
function memoize(fn) {
    const cache = {};

    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}

// Recursive solution (with memoization)
function fib(n) {
    if (n < 2) {
        return n;
    }
    
    return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
