//1. sort parameters
//2. return error if negative, non-integer, non-number
//3. sum of every integer between (inclusive between them)

const sumAll = function(a, b) {
    if(!(typeof(a) === 'number' && typeof(b) === 'number')
        || (a < 0 || b < 0) 
        || (a % 1 !== 0 || b % 1 !== 0)){
        return 'ERROR';
    }
    else{
        let arr = [a, b];
        arr.sort((a, b) => a - b);
        const range = arr[1] - arr[0];
        let sum = 0;
        for(let i = arr[0]; i <= arr[1]; i++){
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
