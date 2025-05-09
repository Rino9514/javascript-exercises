const repeatString = function(string, num) {
    let return_string = "";
    if (num === 0) {
        return "";
    }
    else if(num > 0) {
        if ((typeof string === "string") && (string.length> 0)){
            for(i=0;i<num;i++){
                return_string = return_string + string;
            }
            return return_string;
        }
        return ""
    }
    else{
        return "ERROR"
    }
};

console.log(repeatString("zbeub",1));
// Do not edit below this line
module.exports = repeatString;
