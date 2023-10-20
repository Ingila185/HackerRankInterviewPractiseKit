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
 * Complete the 'miniMaxSum' function below.
 
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    /*
    find out max number 
    find out min number
    max sum = maxNumber + rest of the array
    min sum = minNumber + rest of the array
    */
    
arr.sort();

var maxNum = Math.max(...arr)
var minNum = Math.min(...arr)    
var idxOfMaxNum = arr.indexOf(maxNum)
var idxOfMinNum = arr.indexOf(minNum)
var sum = 0;

if (maxNum === minNum)
{
    sum = maxNum * 4;
    return(console.log(sum , sum))
    
}

var restArray = arr.splice(idxOfMinNum+1,idxOfMaxNum-1);

restArray.forEach((item)=>
{
    sum += item;
})

console.log(sum + minNum , sum+maxNum )



}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
