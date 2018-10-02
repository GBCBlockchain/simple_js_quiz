//Write a JavaScript program that accept two integers and display the larger.Go to the editor
function biggernumber(num1, num2){
    window.alert(Math.max(num1, num2);
    //return Math.max(num1,num2)
}

//Write a JavaScript conditional statement to find the sign of product of three numbers. 
//Display an alert box with the specified sign. Go to the editor Sample numbers : 3, -7, 2 Output : The sign is -
function signofthreenumbers(num1, num2, num3){
    let Outputtext = "The sign is ";
   
    if (num1*num2*num3>=0)
    window.alert(Outputtext + "+");
    else
    window.alert(Outputtext + "-");
}

//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 
//Go to the editor Sample numbers : 0, -1, 4 Output : 4, 0, -1
function sortthreenumbers(num1, num2, num3){
    let arr = [num1,num2,num3];
    arr.sort();
   window.alert(arr[0] + ", " + arr[1] + ", " + arr[2]);
}

//Write a JavaScript conditional statement to find the largest of five numbers. 
//Display an alert box to show the result. Go to the editor Sample numbers : -5, -2, -6, 0, -1 Output : 0
function largestoffivenumbers(num1, num2, num3, num4, num5){
   window.alert(Math.max(num1,num2,num3,num4,num5));
}

//Write a JavaScript for loop that will iterate from 0 to 15. 
//For each iteration, it will check if the current number is odd or even, and display a message to the screen. 
//Go to the editor Sample Output : "0 is even" "1 is odd" "2 is even"
function display15oddeven(){
    for (i=0; i<=15; i++){
        if (i%2==0)//if even
            window.alert(i + " is even");
        else
            window.alert(i + " is odd");
    }
 }

//Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.
//Student Name	Marks David	80 Vinoth	77 Divya	88 Ishitha	95 Thomas	68 The grades are computed as follows :
//Range	Grade <60	F <70	D <80	C <90	B <100	A
function aggregategradeasletter(){
    let grades = [80,77,88,95, 68];
        let sumgrades = 0;
        for (i=0;i<grades.length;i++){
            sumgrades+=grades[i];
        }
        sumgrades/=(i);

        let lettergrade = "";
        if (sumgrades<60) lettergrade = "F";
        else if (sumgrades<70) lettergrade = "D";
        else if (sumgrades<80) lettergrade = "C";
        else if (sumgrades<90) lettergrade = "B";
        else lettergrade = "A";      
        console.log("The aggregate class grade is " + lettergrade);
}

//Write a JavaScript program which iterates the integers from 1 to 100. 
//But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
//For numbers which are multiples of both three and five print "FizzBuzz". Go to the editor
function FizzBuzzDisplay(){
    for (i=0;i<=100;i++){
        if (i%15==0) console.log("FizzBuzz");
        else if (i%3==0) console.log("Fizz");
        else if (i%5==0) console.log("Buzz");
        else console.log(i);
        }

}

//According to Wikipedia a happy number is defined by the following process :
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, 
//and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
//Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)". 
//Write a JavaScript program to find and print the first 5 happy numbers. Go to the editor
function ishappy(num){
    if (num == 1)
        return true;

    var digitsquaredsum = 0;
    var numstr = num.toString();
    for (i=0;i<numstr.length;i++){
        digitsquaredsum+=numstr[i]*numstr[i];
    }
    return ishappy(digitsquaredsum);
}
function displayhappy5(){
    let n=0;
    for (i=0;n<5;i++)
        if (ishappy(i)){
            console.log(i);
            n++;
        }
}
//come back and fix stack overflow problem!
function ishappy(num,tries){
    if (tries > 5) ;//should be break here instead of else
    else{
        if (num == 1)
            return true;

        var digitsquaredsum = 0;
        var numstr = num.toString();
        for (i=0;i<numstr.length;i++){
            digitsquaredsum+=numstr[i]*numstr[i];
        }
        return ishappy(digitsquaredsum,tries+1);
    }
}
function displayhappy5(){
    let n=0;
    for (i=0;n<5;i++)
        if (ishappy(i,0)){
            console.log(i);
            n++;
        }
}


//Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor Note : 
//An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. 
//For example, 371 is an Armstrong number since 33 + 73 + 1**3 = 371.
function isarms(num){

    var numstr = num.toString();
    if ( ( Math.pow(numstr[0],3) + Math.pow(numstr[1],3)  + Math.pow(numstr[2],3)) == num) 
        return true;
}
function displayarmstrongs(){

    for (i=100;i<=1000;i++)
        if (isarms(i)){
            console.log(i);
        }
}//This question is ambiguous as to what is requiredS



//Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor
//*
//**
//***
//****
//*****
function dispstars(){
    let outtext = "";
    for (i=0;i<=5;i++){
        for (n=0;n<i;n++){
            outtext += "*";
        }
        outtext +="\n";
    }
    console.log(outtext);
}

//Write a JavaScript program to sum the multiples of 3 and 5 under 1000. Go to the editor
function summults(){
    let sum = 0;
    for (i=0;i<1000;i++)
        if (i%3 == 0 || i%5 == 0)
        {
            sum += i;
            //console.log(i);
        }
    console.log("The sum is " + sum);
}

///TEST THREE STARTS HERE
//Write a JavaScript function to validate whether a given value type is boolean or not. Go to the editor
function isbool(varr){
    return (typeof(varr)=="boolean")
}

//Write a JavaScript function to validate whether a given value type is error or not.
function iserror(varr){
    return (typeof(varr)=="error")
}

//Write a JavaScript function to validate whether a given value type is NaN or not.
function is_NaN(varr){
    return (isNaN(varr))
}

//Write a JavaScript function to validate whether a given value type is null or not.
function isnull(varr){
    return (varr==null)
}

//Write a JavaScript function to validate whether a given value is number or not.
function isnumber(varr){
    return (typeof(varr)=="number")
}

//Write a JavaScript function to validate whether a given value type is char or not
function ischar(varr){
    return (typeof(varr)=="string" && varr.length==1)
}

//Write a JavaScript function to check whether given value types are same or not.
function ischar(varr,varr2){
    return (typeof(varr)==typeof(varr2))
}


