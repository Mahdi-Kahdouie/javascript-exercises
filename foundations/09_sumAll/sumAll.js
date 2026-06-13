const sumAll = function(num1,num2) {
    let array=[num1,num2]
    let result=0
    let first=0
    let second=0
    if(num1<0 || num2<0 || !Number.isInteger(num1) || !Number.isInteger(num2) || isNaN(num1) || isNaN(num2))
        return "ERROR"
    if(num1>num2){
        first=num2
        second=num1
    }
    else{
        first=num1
        second=num2
    }
    for (let i = first; i<= second; i++) {
        result+=i
        
    }
    return result
    console.log(array)
    console.log(result)
};

// Do not edit below this line
module.exports = sumAll;
