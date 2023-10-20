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

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
let total_length = arr.length;
let positiveNumbers = []
let zeroes = []
let negavtiveNumbers = []
let ratioPositive = 0;
let ratioNegative = 0;
let ratioZeroes = 0;


arr.forEach((item)=>
{
    if(item > 0)
    {
        positiveNumbers.push(item)
    }
    else if(item < 0)
    {
        negavtiveNumbers.push(item)
    }
    else{
        zeroes.push(item)
    }    
})


ratioPositive = (positiveNumbers.length/total_length).toFixed(6)
ratioNegative = (negavtiveNumbers.length/total_length).toFixed(6)
ratioZeroes = (zeroes.length/total_length).toFixed(6)

console.log(ratioPositive)
console.log(ratioNegative)
console.log(ratioZeroes)

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
