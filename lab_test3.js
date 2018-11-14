// 1. Write a JavaScript function to validate whether a given value type is boolean or not. Go to the editor
function validateBool(bool){
    if(typeof bool === "boolen"){
        console.log("It is a Boolean");
}
validateBool(true);

// 2. Write a JavaScript function to validate whether a given value type is error or not.
function validateError(err){
    let err = new Error("is this an error");
    err instanceof Error
}
validateError();
// 3. Write a JavaScript function to validate whether a given value type is NaN or not.
function validateNan(nan){
    isNaN(parseFloat("geoff"));
}
// 4. Write a JavaScript function to validate whether a given value type is null or not.
function validateNull(nullnot){

}
// 5. Write a JavaScript function to validate whether a given value is number or not.
function validateNum(num){
    if(isNaN(num)){
        console.log("not a number");
    }else{
        console.log("is a number");
    }
}
function validateNum1(num1){
    if(typeof num1 === "number"){
        console.log("is a number"); 
    }else{
        console.log("is not a number");
    }
}
// 6. Write a JavaScript function to validate whether a given value type is char or not
function validateChar(letter){
    if(typeof letter === char){
        
    }
}
// 7. Write a JavaScript function to check whether given value types are same or not. 
function sameType(value1, value2){
    if(typeof value1 === typeof value2){
        console.log("it is the same value type");
    }else{
        console.log("it is not the same value type");
    }
}