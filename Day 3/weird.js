/*
    Task
    Given an integer, , perform the following conditional actions:

    If  is odd, print Weird
    If  is even and in the inclusive range of  to , print Not Weird
    If  is even and in the inclusive range of  to , print Weird
    If  is even and greater than , print Not Weird
    Complete the stub code provided in your editor to print whether or not  is weird.
*/
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/* Main Function */

function main() {
    const N = parseInt(readLine().trim(), 10);
    if (N %2 != 0 || N <= 6 && N <= 20 ) {
        console.log('Weird');
    } else {
        console.log('Not Weird');
    }
}
