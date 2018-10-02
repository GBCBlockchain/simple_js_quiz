// Lab Test 1
// Yanesh

/* 
1. Write a JavaScript program that accept two integers and display the larger.Go to the editor 
*/

// As a function: 
function displayMax(a, b) {
  return (a > b) ? a : b;
}
// Can also use Math.Max:
function displayMathMax(a, b) {
  return Math.max(a, b);
}

/*
2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - 
*/
function productSign(a, b, c) {
  let result = a * b * c;
  alert("The sign is " + (result < 0) ? "-" : "+");
}

/*
3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 
*/
function sortNum(a, b, c) {
  let nums = [a, b, c];
  nums.sort(function (x, y) { return y - x; });
  alert(nums.toString());
}

/*
4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 
*/
function findLargest(a, b, c, d, e) {
  let nums = [a, b, c, d, e];
  nums.sort(function (x, y) { return y - x; });
  alert(nums[0]);   // First integer in sorted array is largest
}

/*
5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Go to the editor 
Sample Output : 
"0 is even" 
"1 is odd" 
"2 is even" 
*/
function oddEvenForLoop() {
  for(var i = 0; i <= 15; i++) {
    console.log(i + " is " + (i % 2 == 0 ? "even" : "odd"));
  }
}

/*
6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. Go to the editor

Student Name	Marks
David	80
Vinoth	77
Divya	88
Ishitha	95
Thomas	68
The grades are computed as follows :

Range	Grade
<60	F
<70	D
<80	C
<90	B
<100 A
*/
function averageGrades() {
  let grades = [80, 77, 88, 95, 68];
  let result;
  let sum = 0;
  
  // finding sum to calc avg
  for (var i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  
  let average = sum / grades.length;
  
  // switch statement for grade ranges
  switch(true) {
    case (average < 60):
      result = "F";
      break;
    case (average < 70):
      result = "D";
      break;
    case (average < 80):
      result = "C";
      break;
    case (average < 90):
      result = "B"
      break;
    default:
      result = "A"
  }
  
  // output
  console.log("Average: " + average);
  console.log("Grade: " + result);
}

/*
7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". Go to the editor 
*/
function fizzBuzz() {
  for(var i = 1; i <= 100; i++){
    if (i % (3 * 5) == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

/*
8. According to Wikipedia a happy number is defined by the following process : 
"Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)". 
Write a JavaScript program to find and print the first 5 happy numbers. Go to the editor 
*/
function fiveHappyNumbers() {
  let num = 1;
  let result = [];
  
  // Loop until we get 5 results
  while (result.length < 5) {

    let numArray = num.toString().split('');

    // Loop through number and sum squared digits
    do {
      let sum = 0;
      numArray.forEach((i) => {
        sum += parseInt(i) ** 2;
      });
      numArray = sum.toString().split('');
    } while (numArray.length > 1);

    // if happy, add to results array
    if(numArray[0] === "1") {
      result.push(num);
    }
    num++;
  }
  console.log(result);
}


/*
9. Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor 
Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. 
*/
function threeDigitArmstrong() {
  let result = [];
  
  for (var i = 100; i < 1000; i++) {
    let digitArray = i.toString().split('');
    let d1 = parseInt(digitArray[0]);
    let d2 = parseInt(digitArray[1]);
    let d3 = parseInt(digitArray[2]);
    
    if ((d1**3 + d2**3 + d3**3) == i) {
      result.push(i);
    }
  }
  console.log(result);
}

/*
10. Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor

*  
* *  
* * *  
* * * *  
* * * * *  
*/
function stars() {
  let str = "";
  for(var i = 0; i <= 5; i++){
    for(var j = 0; j < i; j++) {
      str += "* ";
    }
    str += "\n";
  }
  console.log(str);
}

/*
11. Write a JavaScript program to sum the multiples of 3 and 5 under 1000. Go to the editor 
*/
function sumMultiples() {
  var sum = 0;
  for (var i = 0; i < 1000; i++) {
    // multiples of 3 AND 5 = multiples of 15 (wording in question)
    // if (i % (3 * 5) == 0) {
    //    sum += i;
    //}
    
    // multiples of 3 OR 5 implemented below:
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  
  console.log(sum);
}

