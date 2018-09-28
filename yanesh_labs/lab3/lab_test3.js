/*
1. Write a JavaScript function to validate whether a given value type is boolean or not. Go to the editor
*/

// returns true if boolean, false otherwise
function validateBoolean(value) {
  return typeof(value) === "boolean";
}

/*
2. Write a JavaScript function to validate whether a given value type is error or not.
*/

// returns true if value is of type Error, false otherwise
function validateError(value) {
  return value instanceof Error;
}


/*
3. Write a JavaScript function to validate whether a given value type is NaN or not.
*/

// returns true if NaN, false otherwise
function validateNaN(value) {
  return isNaN(value);
}

/*
4. Write a JavaScript function to validate whether a given value type is null or not.
*/

// returns true if null, false otherwise
function validateNull(value) {
  return value === null;
}

/*
5. Write a JavaScript function to validate whether a given value is number or not.
*/

// returns true if TYPE number, false otherwise
function validateNumber(value) {
  return typeof(value) === "number";
}

// as the question(5) does not specify if we are considering the type of
// the given value, this solution returns true if value is number
// (including stringly-typed numbers), false otherwise
function validateNumber2(value) {
  return !isNaN(value);
}

/*
6. Write a JavaScript function to validate whether a given value type is char or not
*/
function validateChar(value) {
  //check if value is string and single char
  if (typeof(value) == "string" && value.length == 1){
    // checking if char is UTF-8 (ASCII)
    return value.charCodeAt() <= 127;
  } else {
    return false;
  }
}

/*
7. Write a JavaScript function to check whether given value types are same or not. 
*/
function isSameType(value1, value2) {
  return typeof(value1) === typeof(value2);
}
