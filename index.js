const fs = require('fs');
const constants = require('./constants');
sevenSegParser = (inputFile,outputFile) => {
    var input = fs.readFileSync(inputFile);
    var inputSplit = input.toString().split('\n');
    var result = '';
    let legal = 0;
    for (let i = 0; i < inputSplit.length; i = i + 2) {
        var arr = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        let j = 0;
        if (inputSplit[i] == undefined || inputSplit[i] == null) {
            continue;
        }
        let elm = inputSplit[i].split('');
        for (let k = 1; k < elm.length; k = k + 3) {
            if (elm[k] == '_') {
                arr[j][0] = true;
            }
            j++;
        }
        if (i < inputSplit.length) {
            i++;
            if (inputSplit[i] == undefined || inputSplit[i] == null) {
                continue;
            }
            elm = inputSplit[i].split('');
            j = 0;
            for (let k = 0; k < elm.length; k++) {
                if (elm[k] == '|') {
                    arr[j][5] = true;
                }
                k++;
                if (elm[k] == '_') {
                    arr[j][6] = true;
                }
                k++;
                if (elm[k] == '|') {
                    arr[j][1] = true;
                }
                j++;
            }
        }
        if (i < inputSplit.length) {
            i++;
            if (inputSplit[i] == undefined || inputSplit[i] == null) {
                continue;
            }
            elm = inputSplit[i].split('');
            j = 0;
            for (let k = 0; k < elm.length; k++) {
                if (elm[k] == '|') {
                    arr[j][4] = true;
                }
                k++;
                if (elm[k] == '_') {
                    arr[j][3] = true;
                }
                k++;
                if (elm[k] == '|') {
                    arr[j][2] = true;
                }
                j++;
            }
        }
        for (let m = 0; m < arr.length; m++) {
            let val = 0;
            for (let n = 0; n < arr[m].length; n++) {
                if (arr[m][n]) {
                    val += Math.pow(2, n);
                }
            }
            let value = keys(val) + '';
            if (value == '?') {
                legal = 1;
            }
            result += value;

        }
        if (legal == 1) {
            result += ' ILLEGAL';
            legal = 0;
        }
        result += '\n';
        fs.writeFileSync(outputFile, result);
    }
}
function keys(n) {
    switch (n) {
        case 63:
            return 0;
        case 6:
            return 1;
        case 91:
            return 2;
        case 79:
            return 3;
        case 102:
            return 4;
        case 109:
            return 5;
        case 125:
            return 6;
        case 7:
            return 7;
        case 127:
            return 8;
        case 111:
            return 9;
        default:
            return '?';
    }
};
module.exports = {sevenSegParser}