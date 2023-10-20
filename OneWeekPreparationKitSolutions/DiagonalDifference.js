'use strict';

const fs = require('fs');

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
/*
n = 4
1 1 1   1
2 2 2   2       
3 3 3   3
4 4 4   4

right to left diagonal = arr[0][3] + arr[1][2] + arr[2][1] + arr[3][0]


n = 3
1. Traverse the array from left to right i.e. arr[0][0] + arr[1][1] + arr[2][2] 
2. Traverse the array from right to left i.e. arr[0][2] + arr[1][1] + arr[2][0]
3. ans = Math.abs(leftSum - rightSum)
*/
var arrLen = arr.length;
var countLeftToRightDiagonal = 0;
var countRightToLeftDiagonalRow = 0;
var countRightToLeftDiagonalCol = Number(arrLen) - 1;
var sumLeftToRight = 0;
var sumRightToLeft = 0;



for(countLeftToRightDiagonal = 0; countLeftToRightDiagonal < arr.length; countLeftToRightDiagonal ++)
{
    let item = arr[countLeftToRightDiagonal][countLeftToRightDiagonal]
    console.log(item)    
    sumLeftToRight = sumLeftToRight + Number(item)
    }

for (var diagonal = 0; diagonal < arrLen; diagonal ++)
{
    
    let item = arr[countRightToLeftDiagonalRow][countRightToLeftDiagonalCol]
    sumRightToLeft = sumRightToLeft + Number(item)

    countRightToLeftDiagonalRow = countRightToLeftDiagonalRow + 1;
    countRightToLeftDiagonalCol = countRightToLeftDiagonalCol -1;
    
    
}

return Math.abs(sumLeftToRight - sumRightToLeft)


}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
