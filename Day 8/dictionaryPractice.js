/*
    Task
    Given  names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each  queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for  is not found, print Not found instead.

    Note: Your phone book should be a Dictionary/Map/HashMap data structure.
*/

function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var n = parseInt(input[0]);
    var phoneBook = new Map();
    for(var i = 1; i <= n; i++){
        var temp = input[i].split(' ');
        phoneBook.set(temp[0], temp[1]);
    }
    for(var i = n+1; i < input.length; i++){
        if(phoneBook.has(input[i])){
            console.log(input[i] + '=' + phoneBook.get(input[i]));
        } else {
            console.log('Not found');
        }
    }
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
