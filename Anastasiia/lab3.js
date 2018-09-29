//1. Write a JavaScript function to validate whether a given value type is boolean or not. Go to the editor

function bool(value) {
    return value === true || 
    value === false ||
    toString.call(value) === "[object Boolean]";
}
console.log(bool(true));
console.log(bool("bar"));

//2. Write a JavaScript function to validate whether a given value type is error or not.

//3. Write a JavaScript function to validate whether a given value type is NaN or not.

function nan(value) {
    return value !== value;
}
console.log(nan(NaN));
console.log(nan("bar"));

//4. Write a JavaScript function to validate whether a given value type is null or not.

//5. Write a JavaScript function to validate whether a given value is number or not.

//6. Write a JavaScript function to validate whether a given value type is char or not

//7. Write a JavaScript function to check whether given value types are same or not.
