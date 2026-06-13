const removeFromArray = function() {

    const args=Array.from(arguments)
    const arglength=args.length
    let array=args[0]
    let arg1=args[1]
    let arg2=args[2]
    let arg3=args[3]
    let arg4=args[4]
    let argCounter=0;

    for (let i= 0; i < array.length; i++) {
        if(array[i]===arg1){
            let index = array.indexOf(array[i]);
            array.splice(index, 1);
            i=0;
            ++argCounter;
            }
        if((argCounter !=arglength) && array[i]===arg2){
            let index = array.indexOf(array[i]);
            array.splice(index, 1);
            i=0;
            ++argCounter;
        }
        if((argCounter !=arglength) && array[i]===arg3){
            let index = array.indexOf(array[i]);
            array.splice(index, 1);
            i=0;
            ++argCounter;
        }

        if((argCounter !=arglength) && array[i]===arg4){
            let index = array.indexOf(array[i]);
            array.splice(index, 1);
            i=0;
            ++argCounter;
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
