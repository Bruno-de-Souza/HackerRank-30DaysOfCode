function processData(input) {
    //Enter your code here
    const inputs = input.split('\n').slice(1);

    // console.log(inputs)

    for (let i = 0; i < inputs.length; i++) {
        let str = inputs[i];
        let str1 = "";
        let str2 = ""
        for (let j = 0; j < str.length; j++) {
            if (j % 2 === 0) {
                str1 += str[j]
            } else {
                str2 += str[j]
            }
        }
        console.log(str1, str2)
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
