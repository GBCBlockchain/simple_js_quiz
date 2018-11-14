//Write a JavaScript program that accept two integers and display the larger.Go to the editor

var i = 3;
var p = 9;
console.log(Math.max( i , p));


//Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with
// the specified sign. Go to the editor Sample numbers : 3, -7, 2 Output : The sign is -

var x = 3;

var y = -7;

var z = 2;

    if ( x*y*z >= 0) {

       alert( " the sign is : positive");
    }   
        else

        alert( " the sign is : negative");
    

//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
// Go to the editor Sample numbers : 0, -1, 4 Output : 4, 0, -1

        var num = [ '0', '-1', '4' ];
        var array1 = [];

        
        
           if(num[0] >= num[1] && num[0] >= num[2]) {
                  
                array1[0] = num[0];

                if (num[1] >= num[2]){

                    array1[1] = num[1];
                    array1[2] = num[2];
                }
           }
           else if(num[1] >= num[0] && num[1] >= num[2]) {
             
             array1[0] = num[1];
                if (num[0] >= num[2]){

                    array1[1] = num[0];
                    array1[2] = num[2];
            }

           }
           else if(num[2] > num[0] && num[2] > num[1]){
           
                 array1[0] = num[2];
                     if (num[0] >= num[1]){

                     array1[1] = num[0];
                     array1[2] = num[1];
          } 
          

           
     
     console.log(array1.toString);

// Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
// Go to the editor Sample numbers : -5, -2, -6, 0, -1 Output : 0
    var arr = [];
for(var i = 0; i < 5; i++){
   arr.push(prompt("Enter a number"));
}
    var max1;

    for ( j = 0; j < 5; j++){

         if (max <= arr[j]) {
         max1 = arr[j];
        }
    }
    alert(max1.toString);




//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the
//current number is odd or even, and display a message to the screen. Go to the editor Sample Output : "0 is
// even" "1 is odd" "2 is even"

 for ( x = 1 ; x <= 15 ; x++ ) {

    if ( x % 2 == 0){

        console.log(  x + " is even");
    }
    else 

        console.log( x + " is odd");
}    

//Write a JavaScript program which compute, the average marks of the following students Then, this average is used
//to determine the corresponding grade. Go to the editorStudent Name	Marks David	80 Vinoth	77 Divya	88 Ishitha
//95 Thomas	68 The grades are computed as follows :
//Range	Grade <60	F <70	D <80	C <90	B <100	A

    var David = 80;
    var Vinoth = 77;
    var Divya = 88;
    var Ishitha = 95;
    var Thomas = 68;
    var a = (David+Vinoth+Divya+Ishitha+Thomas)/5;

    if ( a <= 100 && a >=90 ) {

        console.log( " The mark is A");

        } else if( a <= 90 && a >= 80 ){

            console.log( " The mark is B");
        } else if ( a <=80 && a>= 70) {

            console.log(" The mark is c");
        } else if ( a <= 70 && a >= 60){

            console.log(" The mark is D");
        } else

            console.log(" The mark is F");
    

//Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead
//of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five
//print "FizzBuzz".

var x

for ( x = 1 ;  x <= 100 ; x++ ) {

    if (( x % 3) == 0  && ( x % 5) == 0) {

       console.log( "FizzBuzz" );

    } else 

        if (( x % 3) == 0) {

            console.log("Fizz");

        } else if((x % 5) == 0 ){

        console.log("Buzz")

                }
}
 //According to Wikipedia a happy number is defined by the following process : "Starting with any positive integer,
//replace the number by the sum of the squares of its digits, and repeat the process until the number 
//equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which
 //this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
  //Write a JavaScript program to find and print the first 5 happy numbers.



//Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor Note : An Armstrong number of
//three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example,
//371 is an Armstrong number since 33 + 73 + 1**3 = 371.


for ( a= 0 ; a < 1000 ; a = a + 1) {

    function sumCubeDigits(a) {
        
        var sum = 0;
      
        var a = a.toString().split("");
      
        while(a.length > 0) {
          
          sum = sum + Math.pow((parseInt(a[0], 10)) , 3);
      
          a.splice(0, 1);
       
          sumDigits(a.join(''));
        }
      
        return sum;
      }

      if( sum == a ){

        console.log("number " + sum + " is an Armstrong number")
      }
}


//Write a JavaScript program to construct the following pattern, using a nested for loop.
//*
//* *
//* * *
//* * * *
//* * * * *

var result = "*";
for ( i = 0 ; i < 5 ; i  = i + 1 ) {
    console.log(result)

    result += "*";

}

//Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var sum = 0;

for (  i= 1 ;  i <= 1000 ; i++ ) {

    if (( i % 3) == 0 || ( i % 5) == 0){

        sum += i;
    }

    
}
//push the branch, send to github