const palindromes = function (string) {
    let string_without_poncutation = string.replace(/[.,\/#!$%\^&\*;:{}= \-_`~()'"?!¿¡]/g, "").toLowerCase();
    for(let ii=0; ii<=Math.floor(string_without_poncutation.length/2); ii++){
        if (string_without_poncutation[ii] !== string_without_poncutation[string_without_poncutation.length - ii - 1]){
            return false;
        } 
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
