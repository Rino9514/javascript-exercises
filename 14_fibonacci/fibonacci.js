const fibonacci = function(index) {
    let converted_index = Number(index);
    console.log(converted_index)
    if (typeof converted_index !== "number" || !isFinite(converted_index) || converted_index < 0){
        return "OOPS";
    }
    let array_fibo = [0,1];
    for(let ii=1; ii<=converted_index;ii++) {
        array_fibo.push(array_fibo[ii]+array_fibo[ii-1])
    }
    return array_fibo[converted_index];
};

// Do not edit below this line
module.exports = fibonacci;
