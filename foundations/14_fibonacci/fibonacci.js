const fibonacci = function(num) {
    let total=[0,1];
    if(num<0)
        return "OOPS"
    for(let i=2;i<num+1;i++){
        total[i]=total[i-1]+total[i-2]
    }
    return total[num]
};

// Do not edit below this line
module.exports = fibonacci;
