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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Write your code here
    
        let ans = '';
        let regExp = /[^a-zA-Z]/g;
        for (let a of s)
        {
            if (!regExp.test(a)){
            let decryptedCode = a.charCodeAt() + k%26
            
            if(decryptedCode <= 122)
        {
            ans += String.fromCharCode(decryptedCode)
            
        }
        else
        {
            ans += String.fromCharCode(96+(decryptedCode%122))
        }
        }
        else
         {
             ans += a        
        }
        }
       

return ans;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
