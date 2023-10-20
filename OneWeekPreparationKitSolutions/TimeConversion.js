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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    var timeArray = [];
    var ans = "";
    timeArray = (s.split(":"))
    ans = Number(timeArray[0])
        
    if(s.search("PM") > -1)
    {
       // console.log("PM")
        if (ans != 12){
            ans = ans + 12
        }  
        
        else ans = "12"     
    }
    
    
    if(s.search("AM") > -1)
    {
                console.log(s.search("AM"))

        if(ans == 12)
        {
            ans = "00"
        }
    }
    
    return ans.toString().padStart(2,'0')+":"+timeArray[1]+":"+timeArray[2].substring(0,2);
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
