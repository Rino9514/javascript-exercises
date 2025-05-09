const reverseString = function(string) {
    let reverse_string = "";
    for(i=string.length-1;i>=0;i--){
        console.log(string[i])
        reverse_string +=  string[i];
    }
    return reverse_string;
};
console.log(reverseString("hello"))
// Do not edit below this line
module.exports = reverseString;
