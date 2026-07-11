const removeFromArray = function(arr) {
    const len = arguments.length;
    if(len > 1){
        for(let i = 1; i < len; i++){
            let remove = arguments[i];
            let included = arr.includes(remove);
            let index = arr.indexOf(remove);
            if(included && index >= 0){
                arr.splice(index, 1);
                if(included){
                    i--;
                }
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
