const repeatString = function(str,num) {
    let repeatStr=[];
    if(num>=0){
        for (let i = 0; i < num; i++) {
            repeatStr[i]=str;
            
        }
    }
    else{
        return "ERROR"
    }
    return repeatStr.join("");
    
};

// Do not edit below this line
module.exports = repeatString;
