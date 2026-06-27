const reverseString = function(str) {
    let revStr = "";
    const len = str.length;
    for(let i = len-1; i >= 0; i--){
        revStr+=str[i];
    }
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
