function padString(string,lengthString,symbol,toStart=false){
    let symbolSting ='',
        result = '';

    for(let i = string.length; i < lengthString;i++){
        symbolSting += symbol;
    }

    if (toStart === true){
        result =  symbolSting + string;
    }else {
        result = string + symbolSting;
    }
    return result;
}
let result = padString('Dasha',8,'*',true);
console.log(result);

