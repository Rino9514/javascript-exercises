const sumAll = function(int1,int2) {
    let min = Math.min(int1,int2);
    let max = Math.max(int1,int2);
    if (typeof int1 !=="number" || typeof int2 !=="number"){return "ERROR"}
    if (!Number.isInteger(min) || !Number.isInteger(max)){return "ERROR"}
    if (min<0 || max < 0){return "ERROR"}

    console.log(typeof(int1),typeof(int2))
    let sum = 0;
    for(let i=min;i<= max;i++){
        sum += i;
    }
    return sum;

};
console.log(sumAll(1,2));
// Do not edit below this line
module.exports = sumAll;
