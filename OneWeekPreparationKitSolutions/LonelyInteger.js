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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function findOccurences (arr, num)
{
    let count = 0;
    
    arr.forEach((item)=>{
        
        if(item == num)
        {
            count ++
        }
    })
    return count;
    
}

function lonelyinteger(a) {
    // Write your code here

    var numCount = 0;
    var ans = 0
   a.forEach((item)=>
    {
        numCount = findOccurences(a, item)
        if (Number(numCount) === 1) 
            ans = item
        
    })

return ans
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}
