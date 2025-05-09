const removeFromArray = function(array_to_remove, ...number_to_remove) {
    newArray = [];
    array_to_remove.forEach((element) => {
        if (!number_to_remove.includes(element)) {
            newArray.push(element)
        }
    });
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
