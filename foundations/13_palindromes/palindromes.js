const palindromes = function (str) {
    str=str.toLowerCase();
    const array=str.split("").filter(char => /[a-z0-9]/.test(char));
    let j=0;
    const reverseArray=[]
    console.log(array)
    for (let i = array.length-1; i >= 0; i--) {
        reverseArray[j]=array[i]
        j++;
    }
    console.log(reverseArray)
    for (let i = 0; i < array.length; i++) {
        if(array[i] !== reverseArray[i])
            return false
  
    }
    return true

};

// Do not edit below this line
module.exports = palindromes;
