function processData(input) {
    //Enter your code here
    var arrayInput = input.split("\n")
    var arrayData = arrayInput[2].split(" ")
    var firstHalf = []
    var secHalf = [];
    var ans = []
        
    var max = Math.max(...arrayData)
    /**
     * find the max number from array
     * remove the max number from list
     * split the remaining list into two substrings
     * sort one substring in asc
     * sort other substring in desc
     * merge all three together
     *  */    
    
    var fullArray =  arrayData.slice(0, arrayData.indexOf(max.toString()))
    var halfArrLen = fullArray.length/2;
        
    for(var i = 0; i < halfArrLen; i++)
    {
        firstHalf.push(Number(fullArray[i]))
    }
    
    for(var  j = halfArrLen; j < fullArray.length; j++)
    {
        secHalf.push(Number(fullArray[j]))
    }

firstHalf.sort((a,b)=>{return a - b})
secHalf.sort((a,b)=>{return b-a})
ans.push(...firstHalf)
ans.push(Number(max))
ans.push(...secHalf)

console.log(ans.join(' '))


} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
