const leapYears = function(years) {
    if(typeof years!== "number"){return "ERROR"}
    if(!Number.isInteger(years)){return "ERROR"}
    if((years % 4) === 0){
        if ((years % 100) === 0){
            if ((years % 400) === 0){
                return true;
            }
            return false;
        }
        return true;
    }
    else{
        return false;
    }
};
console.log(leapYears(1650));
// Do not edit below this line
module.exports = leapYears;
