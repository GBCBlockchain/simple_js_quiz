//Write a JavaScript program that accept two integers and display the larger.Go to the editor

function displayLarger(x, y){
    if (x => y){
        console.log(x);
        return x;
    } else{
        console.log(y);
        return y;
    }
}
//Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Go to the editor 
//Sample numbers : 3, -7, 2 Output : The sign is -

function findSign(a, b, c){
    
    let product = a * b * c;
    
    if (product > 0){
        alert("The sign is + ");
    }else if (product < 0){
        alert("The sign is - ");
    }else{
        alert("The sign is neutral.");
    }
}
//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
//Sample numbers : 0, -1, 4 Output : 4, 0, -1

    let largest, middle; smallest;
    if (x > y){
        if (x > z){
            largest = x;
            if (z > y){
                smallest = y;
                middle = z;
            }
        }else{
            middle = x;
            smallest = y;
            largest = z;
        }
    }else if(x > z){
        middle = x;
        largest = y;
        smallest = z;
    }else{
        largest = z;
        smallest = x;
        middle = y;
    }
    alert(largest + ", " + middle + ", " + ", " + smallest);


//Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor 
//Sample numbers : -5, -2, -6, 0, -1 Output : 0
    var large;
    if(a >= b){
        if(a >= c){
            if(a >= d){
                if(a >= e){
                    large = a;
                }else{
                    large = e;
                }
            }else if(d >= e){
                large = d;
            }else{
                large = e;
            }
        }else if(c >= d){
            if (c >= e){
                large = c;
            }else{
                large = e;
            }
        }else if(d >= e){
            large = d;
        }else{
            large = e;
        }
    }else if(b >= c){
        if(b >= d){
            if(b >= e){
                large = b;
            }else{
                large = e;
            }
        }else if(d >= e){
            large = d;
        }else{
            large = e;
        }
    }else if(c >= d){
        if(c >= e){
            large = c;
        }else{
            large = d;
        }
    }else if(d >=e){
        large = d;
    }else{
        large = e;
    }
    alert(large);
    
    
//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number
//is odd or even, and display a message to the screen. Go to the editor 
//Sample Output : "0 is even" "1 is odd" "2 is even"

for (let n = 0; n <= 15; n++){
    if (n % 2 == 0){
        console.log(n + " is even");
    }else{
        console.log(n + " is odd");
    }
}
//Write a JavaScript program which compute, the average marks of the following students Then, this average is used to 
//determine the corresponding grade. Go to the editor
//Student Name	Marks David	80 Vinoth	77 Divya	88 Ishitha	95 Thomas	68 The grades are computed as follows :
//Range	Grade <60	F <70	D <80	C <90	B <100	A

function averageGrade(David, Vinoth, Divya, Ishitha, Thomas){
    var grade;
    var average = (David + Vinoth + Divya + Ishitha + Thomas) / 5;
    if (average < 60){
        grade = "F"; 
    }else if (average < 70){
        grade = "D";
    }else if (average < 80){
        grade = "C";
    }else if (average < 90){
        grade = "B";
    }else if (average < 100){
        grade = "A";
    }else{
        console.log("average is not in range / invalid");
    }
    console.log(grade);
}

//Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead 
//of the number and for the multiples of five print "Buzz". 
//For numbers which are multiples of both three and five print "FizzBuzz". Go to the editor

for(let i = 1; i <= 101; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }else if(i % 3 == 0){
        console.log("Fizz");
    }else if(i % 5 == 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}
//According to Wikipedia a happy number is defined by the following process : "Starting with any positive integer,
//replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 
//(where it will stay), or it loops endlessly in a cycle which does not include 1. 
//Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are 
//unhappy numbers (or sad numbers)". Write a JavaScript program to find and print the first 5 happy numbers. Go to the editor

for (let i = 0; i <= 5; i++){

    let x = positiveInt(Math.random());
    let xstring = [x.toString()];
    for (let c = 0; c <= xString.length; c++){
        let sum = sum + Math.pow(c,2);
        switch (sum) {
            case 1:
                console.log(p + " is a happy number");
                break; 
            default: 
                console.log(p + " is not a happy number");
        }
    }
    
}
function positiveInt (p){
    
}

//Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor 
//Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal 
//to the number itself. 
//For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

function armstrong(t, u, v){
    let x = Math.pow(t, 3);
    let y = Math.pow(u, 3);
    let z = Math.pow(v, 3);
    let sum = x + y + z;
    console.log("The armstrong number is: " + sum);
}

/*Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor

*
* *
* * *
* * * *
* * * * *

*/

for(let i = 1; i < 5; i++){
    let combinestars ="";

    for(let j = 1; j <= i; j++){
        combinestars = combinestars + "*";
        console.log(combinestars);
    }
    console.log("\n");
}


//Write a JavaScript program to sum the multiples of 3 AND 5 under 1000. Go to the editor

for(let i = 0; i < 1000; i++){
    let sum = 0;
    if (i % 3 === 0 || i % 5 === 0){
            sum = sum + i;
    
    }
}
console.log("The sum of multiples of 3 AND 5 under 1000 is: " + sum);