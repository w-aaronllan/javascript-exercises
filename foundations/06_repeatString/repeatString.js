const repeatString = function(str, rep) {
    if(rep >= 0){
        let strFinal = "";
        for(let i = 1; i <= rep; i++){
            strFinal+=str;
        }
        return strFinal;
    }
    else{
        return 'ERROR';
    }

};

// Do not edit below this line
module.exports = repeatString;
