const reverseString = function(str) {
    let array=str.split("")
    let tempArray=[]
    let j=0
    for (let index = array.length-1; index >= 0; index--) {
        tempArray[j]=array[index]
        j++;
        
    }
    
    return tempArray.join("")
};

// Do not edit below this line
module.exports = reverseString;
